const url = "http://cloud-music.pl-fe.cn/personalized?limit=10";
//打印查看信息
console.log(new Promise(function(resolve,reject){ }));

//一个简单的实例
function start() {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('get',url,true);
    
        if(xhr.readyState === 4){
            if ((xhr.status>=200 && xhr.status<300) || xhr.status==304){
                resolve('请求成功');
            } else {
                reject('请求失败');
            }
        }
        xhr.send();
    });
}

start().then(function success(){
    const result = JSON.parse(xhr.responseText)
    const data = result.result;
    const data_length = data.length;
    var element = document.querySelector('.list');
    console.log(result);
    console.log(data);
    for(var i=0; i<data_length; i++){
        var song_list = document.createElement('li');
        var list_image = document.createElement('img');
        var list_name = document.createElement('div');
        list_name.classList.add('.name');
        list_image.setAttribute('src', data[i].picUrl);
        song_list.appendChild(list_image);
        list_name.innerHTML = data[i].name;
        song_list.appendChild(list_name);
        element.appendChild(song_list);
    }
}).catch(function error(){
    console.log('真的失败啦！')
});