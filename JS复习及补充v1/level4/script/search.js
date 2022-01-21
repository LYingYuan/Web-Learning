// 实现功能：1.进入搜索页面
//          2.点击返回页面
//          3.显示当前城市

const search = document.querySelector(".container-search");
const index = document.querySelector(".container");
search.style.display = "none";
index.style.display = "flex";

// 1.进入搜索页面 start
const search_btn = document.querySelector(".city-now");
search_btn.onclick = function click() {
    search.style.display = "flex";
    index.style.display = "none";
};
// 1.进入搜索页面 end

// 2.点击返回页面 start
const return_btn = document.querySelector(".search").querySelector("img");
return_btn.onclick = function click() {
    search.style.display = "none";
    index.style.display = "flex";
};
// 2.点击返回页面 end

// 3.显示当前城市 start
const search_now_city_name = document
    .querySelector(".current-city")
    .querySelector(".city-list")
    .querySelector("li");
// 3.显示当前城市 end
