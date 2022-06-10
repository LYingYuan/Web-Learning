const server_url = "http://127.0.0.1";
class Ajax {
    constructor() {
        data: JSON.stringify({
            // 数据
        });
        header: {
            // 设置请求头
        }
    }
    request(method, url) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, `${server_url}${url}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const status = xhr.status;
                if ((status >= 200 && status < 300) || status === 304) {
                    // const result = JSON.parse(xhr.responseText);
                    this.success(xhr.responseText);
                } else {
                    this.error();
                }
            }
        };
        xhr.send();
    }
    success() {
        console.log("请求成功");
    }
    error() {
        console.log("请求失败");
    }
}

class AjaxGET extends Ajax {
    success() {
        console.log("GET请求成功");
    }
    error() {
        console.log("GET请求失败");
    }
}

class AjaxPOST extends Ajax {
    success() {
        console.log("POST请求成功");
    }
    error() {
        console.log("POST请求失败");
    }
}
