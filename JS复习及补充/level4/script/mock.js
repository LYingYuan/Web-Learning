require.config({
    paths: {
        mock: "http://mockjs.com/dist/mock",
    },
});

// "https://mytest/air",

require(["mock"], function (Mock) {
    // 使用 Mock
    // 逐天空气质量
    var daily_air_mock = Mock.mock({
        "daily|3": [
            {
                "aqi|0-150": 40,
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
        const text_daily_category_today = document
            .querySelector(".today-weather")
            .querySelector(".daily-category");
        const text_daily_category_tomorrow = document
            .querySelector(".tomorrow-weather")
            .querySelector(".daily-category");
        for (let i = 0; i < 2; i++) {
            if (i == 0) {
                text_daily_category_today.innerHTML =
                    daily_air_mock.daily[i].air.category;
                changeColorAndText(
                    text_daily_category_today,
                    daily_air_mock.daily[i].air.level
                );
            } else {
                text_daily_category_tomorrow.innerHTML =
                    daily_air_mock.daily[i].air.category;
                changeColorAndText(
                    text_daily_category_tomorrow,
                    daily_air_mock.daily[i].air.level
                );
            }
        }
        function changeColorAndText(element, level) {
            switch (level) {
                case 1: {
                    element.innerHTML = "优";
                    element.style.backgroundColor = "#8fc31f";
                    break;
                }
                case 2: {
                    element.innerHTML = "良";
                    element.style.backgroundColor = "#fcc713";
                    break;
                }
                case 3: {
                    element.innerHTML = "轻度污染";
                    element.style.backgroundColor = "#f18d24";
                    break;
                }
                default: {
                    element.innerHTML = "优";
                    element.style.backgroundColor = "#8fc31f";
                    break;
                }
            }
        }
    }

    var hour_air = Mock.mock({
        "hour|24": [
            {
                "hour|+1": 0,
                "Temp|0-30": 13,
                "Wind|0-5": 1,
            },
        ],
    });
    {
        const hour_x_axis = [];
        const hour_y_wind_axis = [];
        const hour_y_temp_axis = [];
        for (let i = 0; i < 24; i++) {
            hour_x_axis.push(hour_air.hour[i].hour);
            hour_y_wind_axis.push(hour_air.hour[i].Wind);
            hour_y_temp_axis.push(hour_air.hour[i].Temp);
        }
        // console.log(hour_x_axis);
        // console.log(hour_y_wind_axis);
        // console.log(hour_y_temp_axis);
        var myChart_hour_wind = echarts.init(document.getElementById("wind"));
        var myChart_hour_temp = echarts.init(document.getElementById("temp"));
        var option_hour_wind = {
            tooltip: {},
            xAxis: {
                data: hour_x_axis,
                axisLine: {
                    lineStyle: {
                        color: "#7ca7cf",
                    },
                    show: true,
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
                    data: hour_y_wind_axis,
                    symbol: "circle",
                    smooth: 0.3,
                    lineStyle: {
                        color: "#6999c8",
                        width: 0.8,
                    },
                },
            ],
        };
        var option_hour_temp = {
            tooltip: {},
            xAxis: {
                data: hour_x_axis,
                axisLine: {
                    lineStyle: {
                        color: "#7ca7cf",
                    },
                    show: true,
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
        // 使用刚指定的配置项和数据显示图表。
        myChart_hour_wind.setOption(option_hour_wind);
        myChart_hour_temp.setOption(option_hour_temp);
    }

    // 7天天气
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
            
        }
        mychart_week.setOption(option_week);
    }

    // 输出结果
    // console.log(daily_air);
});
