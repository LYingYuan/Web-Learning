//使用正则表达式来筛选

var num = prompt("请输入一个数字：")

//非负浮点数
num_test1 = /^\d+(\.\d+)?$/
// /^：正则表达式开始 \d+：整数部分 \.：小数点 \d+：小数部分,0-9数字有一个或多个 ()?：可能没有小数点及小数部分 $/：正则表达式结束

//负浮点数(保证小数点前后至少有一个不为0)
num_test2 = /^(-((\d*[1-9]\d*)|(\d*[1-9]\d*\.\d+)|(\d+\.\d*[1-9]\d*)))$/
// 负整数|小数点前不为0|小数点后不为0

function myIsNum(num){
    if(num_test1.test(num) || num_test2.test(num)){
        return true
    }
    else{
        return false
    }
}

while(!myIsNum(num)){
    num = prompt("你未输入正确的数字，请重新输入：")
}

alert(Math.pow(parseFloat(num), 2))