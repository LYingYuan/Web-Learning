const url = "http://cloud-music.pl-fe.cn/personalized?limit=10";

const p = new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get',url,true);

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if((xhr.status>=200 && xhr.status<300) || xhr.status==304){
                resolve(xhr)
            }else{
                reject()
            }
        }
    }
    xhr.send();
})
p
    .then((xhr) => {
        const result = JSON.parse(xhr.responseText);
        const data = result.result;
        const data_length = data.length;
        var element = document.querySelector('.list')
        console.log(result);
        console.log(data);
        console.log('请求成功');
        
        for(var i=0; i<data_length; i++){
            var song_list = document.createElement('li');
            var list_image = document.createElement('img');
            var list_name = document.createElement('div');
            list_name.classList.add('.name')
            list_image.setAttribute('src', data[i].picUrl);
            song_list.appendChild(list_image)
            list_name.innerHTML = data[i].name;
            song_list.appendChild(list_name)
            element.appendChild(song_list);
        }
    })
    .catch(() => {
        console.log('再试一试');
    })
