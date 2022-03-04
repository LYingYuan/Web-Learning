function dateFormat(data_str){
    const dt = new Date(data_str);

    const y = dt.getFullYear();
    const m = dt.getMonth();
    const d = dt.getDate();

    const hh = dt.getHours();
    const mm = dt.getMinutes();
    const ss = dt.getSeconds();

}

function padZero(n){
    return n>9? n:'0'+n;
}
// 编写包的说明文档：
// 安装方式、导入方式、……、开源协议