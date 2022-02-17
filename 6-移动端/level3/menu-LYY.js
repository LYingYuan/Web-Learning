var menu = document.querySelector(".menu");
var menu_btn = document.querySelector(".btn-menu");
menu.style.display = "none";

var flag = 0;
menu_btn.addEventListener("click", menuClickHandler);
function menuClickHandler(e) {
    if(flag == 0){
        menu.style.display = "flex";
        menu_btn.src = './icon/up.png';
        flag = 1;
        return;
    }
    else if(flag == 1){
        menu.style.display = "none";
        menu_btn.src = './icon/home.png';
        flag = 0;
        return;
    }
}