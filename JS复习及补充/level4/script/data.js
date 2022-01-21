// 实现功能：1.主页顶部城市名/搜索页当前城市名
//          2.实时天气
//          3.实时空气质量
//          4.逐天天气
//          5.逐天空气质量

function Main() {
    nowCityName(); // 主页顶部城市名/搜索页当前城市名
    nowCityWeather(); // 实时天气
    nowCityAir(); // 实时空气质量
    dailyCityWeather(); // 逐天天气
}

// 图标
const icon_bao_yu = "../icons/天气-暴雨.svg";
const icon_bing_bao = "../icons/天气-冰雹.svg";
const icon_da_xue = "../icons/天气-大雪.svg";
const icon_da_yu = "../icons/天气-大雨.svg";
const icon_duo_yun = "../icons/天气-多云.svg";
const icon_lei_yu = "../icons/天气-雷雨.svg";
const icon_qing = "../icons/天气-晴.svg";
const icon_sha_chen = "../icons/天气-沙尘.svg";
const icon_shuang = "../icons/天气-霜.svg";
const icon_wu_mai = "../icons/天气-雾霾.svg";
const icon_xiao_xue = "../icons/天气-小雪.svg";
const icon_xiao_yu = "../icons/天气-小雨.svg";
const icon_xiao_yu_2_qing = "../icons/天气-小雨转晴.svg";
const icon_xue_2_qing = "../icons/天气-雪转晴.svg";
const icon_yin_tian = "../icons/天气-阴天.svg";
const icon_yu_and_xue = "../icons/天气-雨加雪.svg";
const icon_zhong_xue = "../icons/天气-中雪.svg";
const icon_zhong_yu = "../icons/天气-中雨.svg";

const url_local_city = "https://geoapi.qweather.com/v2/city/lookup?location=";
const url_now_weather = "https://devapi.qweather.com/v7/weather/now?location=";
const url_daily_weather = "https://devapi.qweather.com/v7/weather/3d?location=";
const url_now_air = "https://devapi.qweather.com/v7/air/now?location=";
const url_daily_air = "";
const my_key = "6c54aec206e142069a9d30b14fba16a5";
var city_id_now = document
    .querySelector(".city-now")
    .querySelector("span")
    .getAttribute("value");

// 实时天气【】记得修改树叶的颜色,notice没有获取到
const now_text = document.querySelector(".now-text");
const now_temp = document.querySelector(".now-temp");
const now_wind = document.querySelector(".now-wind");
const now_humidity = document.querySelector(".now-humidity");
const now_notice = document.querySelector(".now-notice");
const now_air_quality = document.querySelector(".now-air-quality");

// 逐天天气
// 今天
const today_temp = document
    .querySelector(".today-weather")
    .querySelector(".daily-temp");
const today_text = document
    .querySelector(".today-weather")
    .querySelector(".daily-text");
const today_air = document
    .querySelector(".today-weather")
    .querySelector(".daily-category");
const today_icon = document
    .querySelector(".today-weather")
    .querySelector(".weather-icon");
// 明天
const tomorrow_temp = document
    .querySelector(".tomorrow-weather")
    .querySelector(".daily-temp");
const tomorrow_text = document
    .querySelector(".tomorrow-weather")
    .querySelector(".daily-text");
const tomorrow_air = document
    .querySelector(".tomorrow-weather")
    .querySelector(".daily-category");
const tomorrow_icon = document
    .querySelector(".tomorrow-weather")
    .querySelector(".weather-icon");

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
// 1.主页顶部城市名/搜索页当前城市名 start【】怎么后面加市、区、县
class CityAjax extends Ajax {
    success(result) {
        // 主页顶部城市名/搜索页当前城市名
        // console.log(result.location[0].name);
        var city_name = result.location[0].name;
        const city_index = document
            .querySelector(".city-now")
            .querySelector("span");
        const city_search = document
            .querySelector(".current-city")
            .querySelector(".city-list")
            .querySelector("li");
        city_index.innerHTML = city_name;
        city_search.innerHTML = city_name;
    }
}

function nowCityName() {
    const url = url_local_city + city_id_now + "&key=" + my_key;
    const ajax = new CityAjax();
    ajax.request(url);
}
// 1.主页顶部城市名/搜索页当前城市名 end

// 2.实时天气 start
class NowWeatherAjax extends Ajax {
    success(result) {
        // console.log(result.now);
        const weather_data = result.now;
        now_text.innerHTML = weather_data.text;
        now_temp.innerHTML = weather_data.temp;
        now_wind.innerHTML =
            weather_data.windDir + weather_data.windScale + "级";
        now_humidity.innerHTML = "湿度" + weather_data.humidity + "%";
    }
}

function nowCityWeather() {
    const url = url_now_weather + city_id_now + "&key=" + my_key;
    const ajax = new NowWeatherAjax();
    ajax.request(url);
}
// 2.实时天气 end

// 3.实时空气质量 start
class NowAirAjax extends Ajax {
    success(result) {
        // console.log(result.now);
        const air_data = result.now;
        now_air_quality.querySelector("span").innerHTML =
            air_data.aqi + " " + air_data.category;
        // 更换图标背景颜色
        changeIconColor(now_air_quality, air_data.level);
    }
}

function nowCityAir() {
    const url = url_now_air + city_id_now + "&key=" + my_key;
    const ajax = new NowAirAjax();
    ajax.request(url);
}

function changeIconColor(div, level) {
    switch (level) {
        case "1":
            div.className += " icon-green";
        case "2":
            div.className += " icon-yellow";
        default:
            div.className += " icon-blue";
    }
}
// 3.实时空气质量 end

// 4.逐天天气 start
class DailyWeatherAjax extends Ajax {
    success(result) {
        console.log(result.daily);
        const weather_data = result.daily;
        today_temp.innerHTML =
            weather_data[0].tempMin + " / " + weather_data[0].tempMax + "°";
        today_text.innerHTML = weather_data[0].textDay;
        changeWeatherIcon(today_icon, weather_data[0].iconDay);
        tomorrow_temp.innerHTML =
            weather_data[1].tempMin + " / " + weather_data[1].tempMax + "°";
        tomorrow_text.innerHTML = weather_data[1].textDay;
        changeWeatherIcon(tomorrow_icon, weather_data[1].iconDay);
    }
}

function dailyCityWeather() {
    const url = url_daily_weather + city_id_now + "&key=" + my_key;
    const ajax = new DailyWeatherAjax();
    ajax.request(url);
}

function changeWeatherIcon(img, icon_id) {
    switch (icon_id) {
        case "100":
            img.setAttribute("src", icon_qing);
        case "101":
            img.setAttribute("src", icon_duo_yun);
        case "310":
            img.setAttribute("src", icon_bao_yu);
        case "306":
            img.setAttribute("src", icon_zhong_yu);
        case "401":
            img.setAttribute("src", icon_zhong_xue);
        case "404":
            img.setAttribute("src", icon_yu_and_xue);
        case "104":
            img.setAttribute("src", icon_yin_tian);
        case "154":
            img.setAttribute("src", icon_yin_tian);
        case "305":
            img.setAttribute("src", icon_xiao_yu);
        case "400":
            img.setAttribute("src", icon_xiao_xue);
        case "501":
            img.setAttribute("src", icon_shuang);
        case "502":
            img.setAttribute("src", icon_wu_mai);
        case "503":
            img.setAttribute("src", icon_sha_chen);
        case "504":
            img.setAttribute("src", icon_sha_chen);
        case "301":
            img.setAttribute("src", icon_lei_yu);
        case "302":
            img.setAttribute("src", icon_lei_yu);
        case "303":
            img.setAttribute("src", icon_lei_yu);
        case "306":
            img.setAttribute("src", icon_zhong_yu);
        case "307":
            img.setAttribute("src", icon_da_yu);
        case "402":
            img.setAttribute("src", icon_da_xue);
        case "304":
            img.setAttribute("src", icon_bing_bao);
        default:
            img.setAttribute("src", icon_qing);
    }
}
// 4.逐天天气 end
Main();
