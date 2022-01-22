// 实现功能：1.清除添加记录
//          2.点击城市跳转界面【】可优化，时间不够

// 1.清除添加记录 start
const del_history_btn = document.querySelector(".del-city");
var city_list_history = document
    .querySelector(".append-record")
    .querySelector(".city-list");
var citys_history = city_list_history.childNodes;
del_history_btn.onclick = function delCity() {
    // 逆序移除所有子节点
    for (var i = citys_history.length - 1; i >= 0; i--) {
        city_list_history.removeChild(citys_history[i]);
    }
};
// 1.清除添加记录 end

// 2.点击城市跳转界面 start
// 点击当前城市跳转
const city_click_list_1 = document
    .querySelector(".current-city")
    .querySelector(".city-list")
    .querySelectorAll("li");
// 点击历史城市跳转
const city_click_list_2 = document
    .querySelector(".append-record")
    .querySelector(".city-list")
    .querySelectorAll("li");
// 点击热搜城市跳转
const city_click_list_3 = document
    .querySelector(".hot-city")
    .querySelector(".city-list")
    .querySelectorAll("li");
// 2.点击城市跳转界面 end
