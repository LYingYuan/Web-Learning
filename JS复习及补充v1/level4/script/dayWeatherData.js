// 实现功能：1.获取实时天气数据
//          2.获取今天、明天天气数据

// https://devapi.qweather.com/v7/weather/now?location=101010100&key=你的KEY
const now_url = "https://devapi.qweather.com/v7/weather/now?";
// const my_key = "6c54aec206e142069a9d30b14fba16a5";
const city_id = document
    .querySelector(".city-now")
    .querySelector("span")
    .getAttribute("value");
console.log(city_id);

class Ajax {
    constructor() {
        data: JSON.stringify({
            // 传递参数，会与之后传的合并
        });
        headers: {
            // 设置请求头
        }
    }
    request(url) {
        const xhr = new XMLHttpRequest();
        xhr.open("get", url, true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (
                    (xhr.status >= 200 && xhr.status < 300) ||
                    xhr.status == 304
                ) {
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
        console.log("请求成功");
    }
    error() {
        console.log("请求失败");
    }
}

// 实时天气数据
class NowAjax extends Ajax {
    success(result) {}
}

// 逐天天气数据
class DailyAjax extends Ajax {
    success(result) {}
}

// 1小时刷新1次
// const ajax = new Ajax();
// ajax.request(url);
