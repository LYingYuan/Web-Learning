// 返回顶部
var reset_btn = document.querySelector(".reset");
reset_btn.style.display = "none"; //先将按钮隐藏起来

window.addEventListener("scroll", scrollHandler);
function scrollHandler(e) {
    var distance_Y =
        document.documentElement.scrollTop || document.body.scrollTop;
    if (distance_Y > 50) {
        reset_btn.style.display = "flex";
    } else {
        reset_btn.style.display = "none";
    }
}

//然后给reset_btn添加点击事件，用计时器interval来循环
reset_btn.addEventListener("click", clickHandler);
function clickHandler(e) {
    let time = setInterval(() => {
        var distanceY =
            document.documentElement.scrollTop || document.body.scrollTop;
        if (distanceY == 0) {
            clearInterval(time);
            return;//当回到初识距离时
        }
        let speed = Math.ceil(distanceY / 16);
        document.documentElement.scrollTop = distanceY - speed;
    }, 16);
}
