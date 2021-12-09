const url = "http://cloud-music.pl-fe.cn/personalized?limit=10";
const xhr = new XMLHttpRequest();

xhr.open('get',url,true);
xhr.send();

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
        if((xhr.status>=200 && xhr.status<300) || xhr.status==304){
            const result = JSON.parse(xhr.responseText)
            const data = result.result;
            const data_length = data.length;
            var element = document.querySelector('.list');

            console.log(result);
            console.log(data);
            console.log('请求成功');
            
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
        }else{
            console.log('请求失败');
        }
    }
}
// xhr.abort();