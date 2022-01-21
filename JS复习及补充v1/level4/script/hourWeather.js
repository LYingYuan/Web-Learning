// 实现功能：1.点击展开24小时温度\风力菜单
//          2.切换图标
//          3.使用Echart.js绘画温度\风力曲线

var menu_btn = document.querySelector(".daily-menu");
// flag = 0表示菜单关闭；
// flag = 1表示菜单展开。
var flag = 0;

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

// 2.切换图标 start
// icon为所修改对象；
// flag = 0 收起状态图标，
// flag = 1 展开状态图标。
function changeIcon(icon, flag) {
    var open_icon = "../icons/展开-线性圆框.svg";
    var close_icon = "../icons/收起-线性圆框.svg";
    if (flag == 1) {
        icon.setAttribute("src", open_icon);
    } else {
        icon.setAttribute("src", close_icon);
    }
}
// 2.切换图标 end
