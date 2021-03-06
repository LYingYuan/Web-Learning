const server_url = "http://127.0.0.1";
class Ajax {
    constructor(user, psw) {
        this.data = JSON.stringify({
            // 数据
            user: user,
            password: psw,
        });
        // this.data = data;
        this.header = {
            // 设置请求头
        };
    }
    request(method, usr) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, `${server_url}/${usr}`);
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token");
            console.log("have token");
            xhr.setRequestHeader("Authorization", `Bearer ${token}`);
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const status = xhr.status;
                if ((status >= 200 && status < 300) || status === 304) {
                    const result = JSON.parse(xhr.responseText);
                    this.success(result);
                } else {
                    this.error();
                }
            }
        };
        // console.log(this.data);
        xhr.send(this.data);
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

class AjaxLoginPOST extends Ajax {
    success(str) {
        console.log("POST请求成功");
        if (str.OK) {
            localStorage.setItem("token", JSON.stringify(str.data.token));
            window.location.href = `${server_url}/index`;
            // localStorage.clear();
        } else {
            alert(str.message);
        }
    }
    error() {
        console.log("POST请求失败");
    }
}

class AjaxSignPOST extends Ajax {
    success(str) {
        console.log("POST请求成功");
        if (str.OK) {
            alert(str.message);
        } else {
            alert(str.message);
        }
    }
    error() {
        console.log("POST请求失败");
    }
}
