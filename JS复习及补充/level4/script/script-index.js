// 实现功能：1.展开逐时天气情况

const menu_btn = document.querySelector(".daily-menu");
// 1.展开逐时天气情况 start【】还有好多事情没做
var flag = 0; // 0表示菜单关闭；1表示菜单展开。
menu_btn.onclick = function openMenu() {
    var icon = menu_btn.querySelector("img");
    // 展开菜单
    if (flag == 0) {
        flag = 1;
        changeIcon(icon, flag);
    }
    // 关闭菜单
    else {
        flag = 0;
        changeIcon(icon, flag);
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
