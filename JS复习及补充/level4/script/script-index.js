// 实现功能：1.展开逐时天气情况
//          2.24小时的温度/风力切换

const menu_btn = document.querySelector(".daily-menu");
const hour_temp = document.querySelector(".hour-temp");
const hour_wind = document.querySelector(".hour-wind");
const menu_select_btn = document.querySelector(".menu-select");
const hour_btn = menu_select_btn.querySelectorAll("span");
console.log(hour_btn);
const hour_temp_btn = hour_btn[0];
const hour_wind_btn = hour_btn[1];
const daily_sunset = document.querySelector(".daily-sunset");

// 1.展开逐时天气情况 start

var flag = 0; // 0表示菜单关闭；1表示菜单展开。
menu_btn.onclick = function openMenu() {
    var icon = menu_btn.querySelector("img");
    // 展开菜单
    if (flag == 0) {
        flag = 1;
        hour_temp.style.display = "flex";
        menu_select_btn.style.display = "flex";
        daily_sunset.style.display = "none";
        changeIcon(icon, flag);
    }
    // 关闭菜单
    else {
        flag = 0;
        hour_temp.style.display = "none";
        hour_wind.style.display = "none";
        menu_select_btn.style.display = "none";
        daily_sunset.style.display = "flex";
        changeIcon(icon, flag);
        hour_temp_btn.classList.add("menu-select-selecting");
        hour_wind_btn.classList.remove("menu-select-selecting");
    }
};
function changeIcon(icon, flag) {
    var open_icon = "../icons/展开-线性圆框.svg";
    var close_icon = "../icons/收起-线性圆框.svg";
    if (flag == 1) {
        icon.setAttribute("src", open_icon);
    } else {
        icon.setAttribute("src", close_icon);
    }
}
// 1.展开逐时天气情况 end

// 2.24小时的温度/风力切换 start
hour_temp_btn.onclick = function click() {
    hour_temp_btn.classList.add("menu-select-selecting");
    hour_wind_btn.classList.remove("menu-select-selecting");
    hour_temp.style.display = "flex";
    hour_wind.style.display = "none";
};
hour_wind_btn.onclick = function click() {
    hour_wind_btn.classList.add("menu-select-selecting");
    hour_temp_btn.classList.remove("menu-select-selecting");
    hour_temp.style.display = "none";
    hour_wind.style.display = "flex";
};
// 2.24小时的温度/风力切换 end
