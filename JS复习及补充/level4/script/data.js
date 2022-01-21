// 实现功能：1.显示主页顶部城市名

const url_local_city = "https://geoapi.qweather.com/v2/city/lookup?location=";
const url_now_weather = "https://devapi.qweather.com/v7/weather/now?location=";
const my_key = "6c54aec206e142069a9d30b14fba16a5";
var city_id_now = document
    .querySelector(".city-now")
    .querySelector("span")
    .getAttribute("value");

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
// 1.显示主页顶部城市名 start【】怎么后面加市、区、县
class CityAjax extends Ajax {
    success(result) {
        // 主页顶部城市名
        console.log(result.location[0].name);
        let city_name = result.location[0].name;
        const city = document.querySelector(".city-now").querySelector("span");
        city.innerHTML = city_name;
    }
}
function nowCityName() {
    const url = url_local_city + city_id_now + "&key=" + my_key;
    const ajax = new CityAjax();
    ajax.request(url);
}
// 1.显示主页顶部城市名 end
function main() {
    nowCityName();
}

main();
