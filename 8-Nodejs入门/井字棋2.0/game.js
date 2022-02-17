// 实现功能
// 井字棋游戏逻辑

const select_btn = document.querySelectorAll(".cell");
let flag = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let player_id = 1;
const player_flag = ["X", "O"];

for (let i = 0, length = select_btn.length; i < length; i++) {
    select_btn[i].addEventListener("click", () => {
        // console.log(select_btn[i]);
        const btn = select_btn[i];
        gameBtnClick(btn);
    });
}

// 玩家点击方格下棋
function gameBtnClick(btn) {
    const local = btn.getAttribute("value");
    let local_value = getFlagValue(local);
    if (local_value == 0) {
        if (player_id == 1) {
            setFlagValue(local, 1);
        } else {
            setFlagValue(local, -1);
        }
        console.log(flag);
        btn.innerHTML = player_flag[player_id - 1];
        if (!gameRule()) {
            gameOver();
            return;
        }
        changePlayer();
    } else {
        alert("该处已被下子");
    }
}

// 获取当前方格标志，0表示空，1表示玩家1，-1表示玩家2
function getFlagValue(local) {
    switch (local) {
        case "[0][0]":
            return flag[0][0];
        case "[0][1]":
            return flag[0][1];
        case "[0][2]":
            return flag[0][2];
        case "[1][0]":
            return flag[1][0];
        case "[1][1]":
            return flag[1][1];
        case "[1][2]":
            return flag[1][2];
        case "[2][0]":
            return flag[2][0];
        case "[2][1]":
            return flag[2][1];
        case "[2][2]":
            return flag[2][2];
    }
}

// 设置当前方格标志，0表示空，1表示玩家1，-1表示玩家2
function setFlagValue(local, value) {
    switch (local) {
        case "[0][0]":
            flag[0][0] = value;
            break;
        case "[0][1]":
            flag[0][1] = value;
            break;
        case "[0][2]":
            flag[0][2] = value;
            break;
        case "[1][0]":
            flag[1][0] = value;
            break;
        case "[1][1]":
            flag[1][1] = value;
            break;
        case "[1][2]":
            flag[1][2] = value;
            break;
        case "[2][0]":
            flag[2][0] = value;
            break;
        case "[2][1]":
            flag[2][1] = value;
            break;
        case "[2][2]":
            flag[2][2] = value;
            break;
    }
}

function gameRule() {
    // 判断游戏是否结束
    {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // 行
                {
                    const flag_num = flag[i][0] + flag[i][1] + flag[i][2];
                    if (flag_num == -3 || flag_num == 3) {
                        return false;
                    }
                }
                // 列
                {
                    const flag_num = flag[0][j] + flag[1][j] + flag[2][j];
                    if (flag_num == -3 || flag_num == 3) {
                        return false;
                    }
                }
                // 对角线
                {
                    const flag_num_1 = flag[0][0] + flag[1][1] + flag[2][2];
                    const flag_num_2 = flag[2][0] + flag[1][1] + flag[0][2];
                    if (
                        flag_num_1 == -3 ||
                        flag_num_1 == 3 ||
                        flag_num_2 == -3 ||
                        flag_num_2 == 3
                    ) {
                        return false;
                    }
                }
            }
        }
    }

    // 判断是否平局
    {
        let flag_end = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (flag[i][j] == 0) {
                    flag_end = false;
                    break;
                }
            }
        }
        if (flag_end) {
            // 判断当前局面是否产生胜者
            // 平局
            return false;
        } else {
            return true;
        }
    }
}

// 游戏开始 重置游戏
function gameStart() {
    // 重置游戏
    flag = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
}

// 游戏结束 弹出游戏结束提示
function gameOver() {
    setTimeout(() => {
        alert("Game Over!");
    }, 300);
}

// 更换游戏玩家
function changePlayer() {
    if (player_id == 1) {
        player_id = 2;
    } else {
        player_id = 1;
    }
}
