// 准备全部移动到search.js！！！
// 实现功能：1.历史城市记录
//          2.删除历史城市

const append_record = document.querySelector(".append-record");
var city_list = append_record.querySelector(".city-list");

// 历史城市记录 start

// 历史城市记录 end

// 删除历史城市 start
var del_btn = document.querySelector(".del-city");
var citys = city_list.childNodes; // 获取city_list下的所有子节点
del_btn.onclick = function delCity() {
    console.log(citys);
    // 逆序移除所有子节点
    for (var i = citys.length - 1; i >= 0; i--) {
        city_list.removeChild(citys[i]);
    }
};
// 删除历史城市 end
