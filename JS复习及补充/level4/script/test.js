require.config({
    paths: {
        mock: "http://mockjs.com/dist/mock",
    },
});
require(["mock"], function (Mock) {
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
            hour_y_wind_axis.push(hour_air.hour[i].Temp);
            hour_y_temp_axis.push(hour_air.hour[i].Wind);
        }
        console.log(hour_x_axis);
        console.log(hour_y_wind_axis);
        console.log(hour_y_temp_axis);
        var myChart_hour_wind = echarts.init(document.getElementById('wind'));
        var myChart_hour_temp = echarts.init(document.getElementById('temp'));
        var option_hour_wind = {
            tooltip: {},
            xAxis: {
                data: hour_x_axis
            },
            yAxis: {},
            series: [{
                name: 'wind',
                type: 'line',
                data: hour_y_wind_axis
            }]
        };
        var option_hour_temp = {
            tooltip: {},
            xAxis: {
                data: hour_x_axis
            },
            yAxis: {},
            series: [{
                name: 'temp',
                type: 'line',
                data: hour_y_temp_axis
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart_hour_wind.setOption(option_hour_wind);
        myChart_hour_temp.setOption(option_hour_temp);
    }
});