const game_screen = {
    btn_1_1 : document.querySelector(".cell-1"),
    btn_1_2 : document.querySelector(".cell-2"),
    btn_1_3 : document.querySelector(".cell-3"),
    btn_2_1 : document.querySelector(".cell-4"),
    btn_2_2 : document.querySelector(".cell-5"),
    btn_2_3 : document.querySelector(".cell-6"),
    btn_3_1 : document.querySelector(".cell-7"),
    btn_3_2 : document.querySelector(".cell-8"),
    btn_3_3 : document.querySelector(".cell-9"),
}

const btn = {
    join_btn : document.querySelector(".connect-btn"),
    leave_btn : document.querySelector(".disconnect-btn"),
}
btn.join_btn.addEventLisener("click",joinGame(),false);

function joinGame(){
    console.log("hello")
    btn.join_btn.style.display = "none";
    btn.leave_btn.style.display = "flex";
}

function leaveGame(){
    console.log("hello2");
    btn.join_btn.style.display = "flex";
    btn.leave_btn.style.display = "none";
}