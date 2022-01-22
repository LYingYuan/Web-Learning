// 实现功能：1.主页顶部城市名/搜索页当前城市名
//          2.实时天气
//          3.实时空气质量
//          4.逐天天气
//          5.逐天空气质量/日落时间【】mock未完成
//          6.热门城市前5
//          7.搜索框搜索城市
//          8.点击搜索结果跳转
//          9.添加至搜索历史
//          10.生活指数
//          11.清除生活指数

function Main() {
    nowCityName(); // 主页顶部城市名/搜索页当前城市名
    nowCityWeather(); // 实时天气
    nowCityAir(); // 实时空气质量
    dailyCityWeather(); // 逐天天气
    // 逐天空气质量/日落时间
    clearLifeTips(); //1.清除生活指数
    dailyLifeTips(); // 生活指数
}

// const my_key = "6c54aec206e142069a9d30b14fba16a5";
const my_key = "7f5f4451e1ed4668a28ef825fe18a676";
const api_url = {
    url_local_city: "https://geoapi.qweather.com/v2/city/lookup?location=",
    url_now_weather: "https://devapi.qweather.com/v7/weather/now?location=",
    url_daily_weather: "https://devapi.qweather.com/v7/weather/3d?location=",
    url_now_air: "https://devapi.qweather.com/v7/air/now?location=",
    url_daily_air: "https://mytest/air", // 使用mook.js
    url_hot_city: "https://geoapi.qweather.com/v2/city/top?number=5&range=cn",
    url_daily_life_tips:
        "https://devapi.qweather.com/v7/indices/1d?type=0&location=",
};

// 图标
const icon_url = {
    icon_bao_yu: "../icons/天气-暴雨.svg",
    icon_bing_bao: "../icons/天气-冰雹.svg",
    icon_da_xue: "../icons/天气-大雪.svg",
    icon_da_yu: "../icons/天气-大雨.svg",
    icon_duo_yun: "../icons/天气-多云.svg",
    icon_lei_yu: "../icons/天气-雷雨.svg",
    icon_qing: "../icons/天气-晴.svg",
    icon_sha_chen: "../icons/天气-沙尘.svg",
    icon_shuang: "../icons/天气-霜.svg",
    icon_wu_mai: "../icons/天气-雾霾.svg",
    icon_xiao_xue: "../icons/天气-小雪.svg",
    icon_xiao_yu: "../icons/天气-小雨.svg",
    icon_xiao_yu_2_qing: "../icons/天气-小雨转晴.svg",
    icon_xue_2_qing: "../icons/天气-雪转晴.svg",
    icon_yin_tian: "../icons/天气-阴天.svg",
    icon_yu_and_xue: "../icons/天气-雨加雪.svg",
    icon_zhong_xue: "../icons/天气-中雪.svg",
    icon_zhong_yu: "../icons/天气-中雨.svg",

    icon_xing_xing: "../icons/星星.svg",
};

var city_id_now = document
    .querySelector(".city-now")
    .querySelector("span")
    .getAttribute("value");
var city_name_now = "重庆";

// 实时天气【】notice没有获取到
const now = {
    text: document.querySelector(".now-text"),
    temp: document.querySelector(".now-temp"),
    wind: document.querySelector(".now-wind"),
    humidity: document.querySelector(".now-humidity"),
    notice: document.querySelector(".now-notice"),
    air_quality: document.querySelector(".now-air-quality"),
};

// 逐天天气
const daily = {
    // 今天
    today_temp: document
        .querySelector(".today-weather")
        .querySelector(".daily-temp"),
    today_text: document
        .querySelector(".today-weather")
        .querySelector(".daily-text"),
    today_air: document
        .querySelector(".today-weather")
        .querySelector(".daily-category"),
    today_icon: document
        .querySelector(".today-weather")
        .querySelector(".weather-icon"),
    today_sunset: document.querySelector(".daily-sunset"),
    // 明天
    tomorrow_temp: document
        .querySelector(".tomorrow-weather")
        .querySelector(".daily-temp"),
    tomorrow_text: document
        .querySelector(".tomorrow-weather")
        .querySelector(".daily-text"),
    tomorrow_air: document
        .querySelector(".tomorrow-weather")
        .querySelector(".daily-category"),
    tomorrow_icon: document
        .querySelector(".tomorrow-weather")
        .querySelector(".weather-icon"),
};

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
// 1.主页顶部城市名/搜索页当前城市名 start【】后面没有加市、区、县
class CityAjax extends Ajax {
    success(result) {
        // 主页顶部城市名/搜索页当前城市名
        // console.log(result.location);
        var city_name = result.location[0].name;
        var city_id = result.location[0].id;
        const city_index = document
            .querySelector(".city-now")
            .querySelector("span");
        const city_search = document
            .querySelector(".current-city")
            .querySelector(".city-list")
            .querySelector("li");
        city_search.addEventListener("click", function click() {
            city_id_now = this.value;
            Main();
            page_index.style.display = "flex";
            page_search.style.display = "none";
        });
        city_index.innerHTML = city_name;
        city_search.innerHTML = city_name;
        city_name_now = city_name;
        city_search.setAttribute("value", city_id);
    }
}

function nowCityName() {
    const url = api_url.url_local_city + city_id_now + "&key=" + my_key;
    const ajax = new CityAjax();
    ajax.request(url);
}
// 1.主页顶部城市名/搜索页当前城市名 end

// 2.实时天气 start
class NowWeatherAjax extends Ajax {
    success(result) {
        // console.log(result.now);
        const weather_data = result.now;
        now.text.innerHTML = weather_data.text;
        now.temp.innerHTML = weather_data.temp;
        now.wind.innerHTML =
            weather_data.windDir + weather_data.windScale + "级";
        now.humidity.innerHTML = "湿度" + weather_data.humidity + "%";
    }
}

function nowCityWeather() {
    const url = api_url.url_now_weather + city_id_now + "&key=" + my_key;
    const ajax = new NowWeatherAjax();
    ajax.request(url);
}
// 2.实时天气 end

// 3.实时空气质量 start
class NowAirAjax extends Ajax {
    success(result) {
        // console.log(result.now);
        const air_data = result.now;
        now.air_quality.querySelector("span").innerHTML =
            air_data.aqi + " " + air_data.category;
        // 更换图标背景颜色
        changeIconColor(now.air_quality, air_data.level);
    }
}

function nowCityAir() {
    const url = api_url.url_now_air + city_id_now + "&key=" + my_key;
    const ajax = new NowAirAjax();
    ajax.request(url);
}

function changeIconColor(div, level) {
    switch (level) {
        case "1":
            div.className += " icon-green";
            break;
        case "2":
            div.className += " icon-yellow";
            break;
        default:
            div.className += " icon-blue";
            break;
    }
}
// 3.实时空气质量 end

// 4.逐天天气 start
class DailyWeatherAjax extends Ajax {
    success(result) {
        // console.log(result.daily);
        const weather_data = result.daily;
        // 今天
        daily.today_temp.innerHTML =
            weather_data[0].tempMin + " / " + weather_data[0].tempMax + "°";
        daily.today_text.innerHTML = weather_data[0].textDay;
        changeWeatherIcon(daily.today_icon, weather_data[0].iconDay);
        // 今天日落时间
        daily.today_sunset.innerHTML = "日落" + weather_data[0].sunset;
        // 明天
        daily.tomorrow_temp.innerHTML =
            weather_data[1].tempMin + " / " + weather_data[1].tempMax + "°";
        daily.tomorrow_text.innerHTML = weather_data[1].textDay;
        changeWeatherIcon(daily.tomorrow_icon, weather_data[1].iconDay);
    }
}

function dailyCityWeather() {
    const url = api_url.url_daily_weather + city_id_now + "&key=" + my_key;
    const ajax = new DailyWeatherAjax();
    ajax.request(url);
}

function changeWeatherIcon(img, icon_id) {
    switch (icon_id) {
        case "100":
            img.setAttribute("src", icon_url.icon_qing);
            break;
        case "101":
            img.setAttribute("src", icon_url.icon_duo_yun);
            break;
        case "310":
            img.setAttribute("src", icon_url.icon_bao_yu);
            break;
        case "306":
            img.setAttribute("src", icon_url.icon_zhong_yu);
            break;
        case "401":
            img.setAttribute("src", icon_url.icon_zhong_xue);
            break;
        case "404":
            img.setAttribute("src", icon_url.icon_yu_and_xue);
            break;
        case "104":
            img.setAttribute("src", icon_url.icon_yin_tian);
            break;
        case "154":
            img.setAttribute("src", icon_url.icon_yin_tian);
            break;
        case "305":
            img.setAttribute("src", icon_url.icon_xiao_yu);
            break;
        case "400":
            img.setAttribute("src", icon_url.icon_xiao_xue);
            break;
        case "501":
            img.setAttribute("src", icon_url.icon_shuang);
            break;
        case "502":
            img.setAttribute("src", icon_url.icon_wu_mai);
            break;
        case "503":
            img.setAttribute("src", icon_url.icon_sha_chen);
            break;
        case "504":
            img.setAttribute("src", icon_url.icon_sha_chen);
            break;
        case "301":
            img.setAttribute("src", icon_url.icon_lei_yu);
            break;
        case "302":
            img.setAttribute("src", icon_url.icon_lei_yu);
            break;
        case "303":
            img.setAttribute("src", icon_url.icon_lei_yu);
            break;
        case "306":
            img.setAttribute("src", icon_url.icon_zhong_yu);
            break;
        case "307":
            img.setAttribute("src", icon_url.icon_da_yu);
            break;
        case "402":
            img.setAttribute("src", icon_url.icon_da_xue);
            break;
        case "304":
            img.setAttribute("src", icon_url.icon_bing_bao);
            break;
        default:
            img.setAttribute("src", icon_url.icon_qing);
            break;
    }
}
// 4.逐天天气 end

// 5.逐天空气质量/日落时间 start
class DailyAirAjax extends Ajax {
    success(result) {
        console.log(result);
    }
}

function dailyCityAir() {
    const url = api_url.url_daily_air + city_id_now + "&key=" + my_key;
    const ajax = new DailyAirAjax();
    ajax.request(url);
}
// 5.逐天空气质量/日落时间 end
// 6.热门城市前5 start
class HotCityAjax extends Ajax {
    success(result) {
        // console.log(result.topCityList);
        const hot_city_num = result.topCityList.length;
        const hot_city_data = result.topCityList;
        // 热门城市
        const hot_city = document
            .querySelector(".hot-city")
            .querySelector(".city-list");
        for (let i = 0; i < hot_city_num; i++) {
            const list = document.createElement("li");
            list.innerHTML = hot_city_data[i].name;
            list.setAttribute("value", hot_city_data[i].id);
            list.addEventListener("click", function click() {
                const history_city = document.createElement("li");
                history_city.innerHTML = city_name_now;
                history_city.setAttribute("value", city_id_now);
                history_city.addEventListener("click", function click() {
                    city_id_now = this.value;
                    Main();
                    page_index.style.display = "flex";
                    page_search.style.display = "none";
                });
                city_list_history.appendChild(history_city);
                city_id_now = this.value;
                Main();
                page_index.style.display = "flex";
                page_search.style.display = "none";
            });
            hot_city.appendChild(list);
        }
    }
}
function hotCity() {
    const url = api_url.url_hot_city + "&key=" + my_key;
    const ajax = new HotCityAjax();
    ajax.request(url);
}
// 6.热门城市前5 end

// 7.搜索框搜索城市 start
const search_list = document.querySelector(".search-list");
var searched_list = search_list.childNodes;
class SearchCityAjax extends Ajax {
    success(result) {
        // console.log(result);
        const search_city_data = result.location;
        const search_city_num = search_city_data.length;
        for (let i = 0; i < search_city_num; i++) {
            const list = document.createElement("li");
            list.innerHTML = search_city_data[i].name;
            list.setAttribute("value", search_city_data[i].id);
            list.onclick = function () {
                // 9.添加至搜索历史 start
                const history_city = document.createElement("li");
                history_city.innerHTML = city_name_now;
                history_city.setAttribute("value", city_id_now);
                history_city.addEventListener("click", function click() {
                    city_id_now = this.value;
                    Main();
                    page_index.style.display = "flex";
                    page_search.style.display = "none";
                });
                city_list_history.appendChild(history_city);
                // 9.添加至搜索历史 end

                // console.log(city_id_now);
                // 8.点击搜索结果跳转 start
                city_id_now = list.value;
                Main();
                page_index.style.display = "flex";
                page_search.style.display = "none";
                // 8.点击搜索结果跳转 end
            };
            search_list.appendChild(list);
        }
    }
}
const search_input = document.querySelector(".search").querySelector("input");
search_input.oninput = function citySearch() {
    let search_text = search_input.value;
    if (search_text == "") {
        for (var i = searched_list.length - 1; i >= 0; i--) {
            search_list.removeChild(searched_list[i]);
        }
    }
    const url =
        api_url.url_local_city + search_text + "&key=" + my_key + "&range=cn";
    // console.log(url);
    const ajax = new SearchCityAjax();
    ajax.request(url);
};
// 7.搜索框搜索城市 end

// 10.生活指数 start
class LifeTipsAjax extends Ajax {
    success(result) {
        // console.log(result.daily)
        const daily_life_tips = result.daily;
        const daily_life_tips_num = daily_life_tips.length;
        const tips = document.querySelector(".tips");
        // notice
        // now.notice.innerHTML = daily_life_tips[8].text;
        for (let i = 0; i <= daily_life_tips_num; i++) {
            if (i == daily_life_tips_num) {
                const li = document.createElement("li");
                tips.appendChild(li);
                i++;
            }
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.classList.add("icon-tips");
            const span = document.createElement("span");
            span.innerHTML =
                daily_life_tips[i].name + " " + daily_life_tips[i].category;
            dailyLifeIcon(img, daily_life_tips[i].type);
            li.appendChild(img);
            li.appendChild(span);
            tips.appendChild(li);
        }
    }
}

function dailyLifeTips() {
    const url = api_url.url_daily_life_tips + city_id_now + "&key=" + my_key;
    // console.log(url);
    const ajax = new LifeTipsAjax();
    ajax.request(url);
}

function dailyLifeIcon(img, type) {
    switch (type) {
        case "1":
            img.setAttribute("src", icon_url.icon_xing_xing);
            break;
        default:
            img.setAttribute("src", icon_url.icon_xing_xing);
            break;
    }
}

// 10.生活指数 end

// 11.清除生活指数 start
function clearLifeTips() {
    const tips = document.querySelector(".tips");
    let tips_list = tips.childNodes;
    for (var i = tips_list.length - 1; i >= 0; i--) {
        tips.removeChild(tips_list[i]);
    }
}
// 11.清除生活指数 end

Main();
// 热门城市前5
hotCity();
