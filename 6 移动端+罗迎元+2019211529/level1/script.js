const url = "https://api.oick.cn/lishi/api.php";

class Ajax {
    constructor() {
        data: JSON.stringify({});
        headers: {
        }
    }
    request(url) {
        const xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const status = xhr.status;
                if ((status >= 200 && status < 300) || status == 304) {
                    const result = JSON.parse(xhr.responseText);
                    this.success(result);
                } else {
                    this.error();
                }
            }
        };
        xhr.send();
    }
    success(result) {
        const data = result.result;
        const data_length = data.length;
        var element = document.querySelector(".content");
        var today = document.querySelector(".date");
        console.log(result);
        console.log(data);
        console.log("请求成功");
        //获取日期
        for (let i = 0; i < data_length; i++) {
            const list = document.createElement("li");
            const list_year = document.createElement("p");
            const list_event = document.createElement("p");
            list.appendChild(list_year);
            list.appendChild(list_event);
            element.appendChild(list);
            const date = data[i].date;
            const event = data[i].title;
            const re_year = /\d+\u5e74/; //匹配年份
            const year = re_year.exec(date)[0];
            if (i == 0) {
                const re_day = /\d+\u6708\d+\u65e5/;
                const day = re_day.exec(date)[0];
                today.innerHTML = day;
            }
            list_year.innerHTML = year;
            list_event.innerHTML = event;
        }
    }
    error() {
        console.log("请求失败");
    }
}
const ajax = new Ajax();
ajax.request(url);
