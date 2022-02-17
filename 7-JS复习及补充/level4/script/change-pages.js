// 实现功能：1.切换至搜索页
//          2.点击返回图标返回主页面

var page_index = document.querySelector(".index-container");
var page_search = document.querySelector(".search-container");
// 默认显示主页面
page_search.style.display = "none";

// 1.切换至搜索页 start
const btn_to_search = document.querySelector(".city-now").querySelector("img");
btn_to_search.onclick = function click() {
    page_index.style.display = "none";
    page_search.style.display = "flex";
};
// 1.切换至搜索页 end

// 2.点击返回图标返回主页面 start
const btn_return = document.querySelector(".search").querySelector("img");
btn_return.onclick = function click() {
    page_index.style.display = "flex";
    page_search.style.display = "none";
};
// 2.点击返回图标返回主页面 end
