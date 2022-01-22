import Mock from "mockjs";

var daily_air = Mock.mock({
    "daily|3": [
        {
            "aqi|0-150": 40,
            "level|1-3": "1",
            "category|1": ["优", "良", "轻度污染"],
        },
    ],
});

console.log(daily_air);
