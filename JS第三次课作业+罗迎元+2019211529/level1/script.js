let btns = document.querySelectorAll("button");
var text = document.querySelector('.txt');
let len = btns.length;
for (var i = 0; i < len; i++) {
    btns[i].onclick = function() {
        let val = this.value;
        if(val == 'red'){
            document.body.style.backgroundImage = 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)';
        }
        else if(val == 'green'){
            document.body.style.backgroundImage = 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)';
        }
        else if(val == 'blue'){
            document.body.style.backgroundImage = 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
        }
        else if(val == 'smaller'){
            text.style.fontSize = '20px';
        }
        else if(val == 'bigger'){
            text.style.fontSize = '40px';
        }
        else if(val == 'default'){
            text.style.fontSize = '30px';
        }
    }
}