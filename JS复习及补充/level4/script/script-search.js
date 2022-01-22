// 实现功能：1.清除添加记录


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
