var text = document.querySelector('.text');
var btn1 = document.querySelector('.btn1');
var output = document.querySelector('.output');

btn1.onclick = function() {
    if (text.value == ''){
        alert('您没有输入内容,请重新输入！');
        return false;
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = '<div class="text2">' + text.value + '<button class="btn2">删除</button>' + '</div>';
        output.insertBefore(li, output.childNodes[0])
        text.value = '';
    }
    var dels = document.querySelectorAll('.btn2');
    let len = dels.length;
    for(var i = 0 ; i < len ; i++){
        dels[i].onclick = function() {
            output.removeChild(this.parentNode.parentNode)
        }
    }
}