// 实现功能：1.搜索联想
//          2.切换城市
//          3.记录历史城市
//          4.清空历史城市
//          5.主页index顶部显示城市
//          6.点击返回当前城市

const local_url = "https://geoapi.qweather.com/v2/city/lookup?location=";
const my_key = "6c54aec206e142069a9d30b14fba16a5";
var city_id = document.querySelector(".city-now").querySelector("span").getAttribute("value");

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

// 请求城市中文名
// local_url + city_id + '&key=' + my_key
class CityAjax extends Ajax {
    success(result) {
        // 主页顶部显示城市名
        console.log.result;

    }
}

// 5.主页index顶部显示城市 start

// 5.主页index顶部显示城市 end
const city_url =  local_url + city_id + '&key=' + my_key
const city_ajax = new CityAjax();
city_ajax.request(city_ajax);