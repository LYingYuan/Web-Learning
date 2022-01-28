require.config({
    paths: {
        mock: "http://mockjs.com/dist/mock",
    },
});
require(["mock"], function (Mock) {
    var week_air = Mock.mock({
        "daily|7": [
            {
                "week|+1": [
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六",
                    "星期日",
                ],
                "maxTemp|15-30": 13,
                "minTemp|0-14": 1,
                "maxIconId|1": [
                    {
                        text: "晴",
                        iconId: "100",
                    },
                    {
                        text: "多云",
                        iconId: "101",
                    },
                    {
                        text: "暴雨",
                        iconId: "301",
                    },
                ],
                "minIconId|1": [
                    {
                        text: "晴",
                        iconId: "100",
                    },
                    {
                        text: "多云",
                        iconId: "101",
                    },
                    {
                        text: "暴雨",
                        iconId: "301",
                    },
                ],
                "windDir|1": [
                    "北风",
                    "南风",
                    "西风",
                    "东风",
                    "南北风",
                    "西北风",
                    "东北风",
                    "东南风",
                ],
                "windScale|1-4": 1,
                "air|1": [
                    {
                        level: 1,
                        category: "优",
                    },
                    {
                        level: 2,
                        category: "良",
                    },
                    {
                        level: 3,
                        category: "轻度污染",
                    },
                ],
            },
        ],
    });
    {
        console.log(week_air);
        const max_temp = [];
        const min_temp = [];
        const week_container = document.querySelector(".week-weather");
        for (let i = 0; i < 7; i++) {
            max_temp.push(week_air.daily[i].maxTemp);
            min_temp.push(week_air.daily[i].minTemp);
            const week_day = document.createElement("div");
            week_day.classList.add("week-day");

            const weekday = document.createElement("span");
            weekday.classList.add("weekday");
            week_day.appendChild(weekday);

            const max_temp_text = document.createElement("span");
            max_temp_text.classList.add("max-temp-text");
            week_day.appendChild(max_temp_text);

            const max_temp_icon = document.createElement("img");
            max_temp_icon.classList.add("max-temp-icon");
            max_temp_icon.classList.add("weather-icon");
            week_day.appendChild(max_temp_icon);

            const min_temp_icon = document.createElement("img");
            min_temp_icon.classList.add("min-temp-icon");
            min_temp_icon.classList.add("weather-icon");
            week_day.appendChild(min_temp_icon);

            const min_temp_text = document.createElement("span");
            min_temp_text.classList.add("min-temp-text");
            week_day.appendChild(min_temp_text);

            const air = document.createElement("span");
            air.classList.add("air");
            week_day.appendChild(air);

            const wind_dir = document.createElement("span");
            wind_dir.classList.add("wind-dir");
            week_day.appendChild(wind_dir);

            const wind = document.createElement("span");
            wind.classList.add("wind");
            week_day.appendChild(wind);

            weekday.innerHTML = week_air.daily[i].week;
            max_temp_text.innerHTML = week_air.daily[i].maxIconId.text;
            min_temp_text.innerHTML = week_air.daily[i].minIconId.text;
            air.innerHTML = week_air.daily[i].air.category;
            wind_dir.innerHTML = week_air.daily[i].windDir;
            wind.innerHTML = week_air.daily[i].windScale + "级";
            changeWeatherIcon(
                max_temp_icon,
                week_air.daily[i].maxIconId.iconId
            );
            changeWeatherIcon(
                min_temp_icon,
                week_air.daily[i].minIconId.iconId
            );
            changeAirTextColor(air, week_air.daily[i].air.level);
            week_container.appendChild(week_day);
        }
        console.log(min_temp);
        console.log(max_temp);
        function changeAirTextColor(element, level) {
            switch (level) {
                case 1: {
                    element.style.backgroundColor = "#8fc31f";
                    break;
                }
                case 2: {
                    element.style.backgroundColor = "#fcc713";
                    break;
                }
                case 3: {
                    element.style.backgroundColor = "#f18d24";
                    break;
                }
                default: {
                    element.style.backgroundColor = "#f18d24";
                    break;
                }
            }
        }
        // 画图
        var mychart_week = echarts.init(document.getElementById("week"));
        var option_week = {
            tooltip: {},
            xAxis: {
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
            },
            yAxis: {
                show: false,
            },
            grid: {
                tooltip: {},
                show: false,
                top: "30%",
                left: "0",
                bottom: "20%",
                right: "0",
            },
            series: [
                {
                    color: "#fafcfd",
                    name: "temp",
                    type: "line",
                    data: hour_y_temp_axis,
                    symbol: "circle",
                    smooth: 0.3,
                    lineStyle: {
                        color: "#6999c8",
                        width: 0.8,
                    },
                },
            ],
        };
        mychart_week.setOption(option_week);
    }
});

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
