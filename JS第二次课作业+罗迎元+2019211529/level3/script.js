var data = {
    age: 18,
    name: "这是真的难",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    friends: [
            { name: "Amber",sex: "woman"},
            { name: "Barbara",sex: "woman"},
            { name: "Venti",sex: "man"}], 
    work: { 
            time: "2021", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
            }, 
    play: function() {    console.log("玩滑板");  }
}

function deep_clone(obj){
    if(!isObject(obj)){
        return obj;//如果不是对象，直接返回
    }
    let objclone = Array.isArray(obj)? [] : {}
    for(key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] && typeof obj[key] === 'object'){
                objclone[key] = deep_clone(obj[key]);
            }
            else{
                objclone[key] = obj[key];
            }
        }
    }
    return objclone;
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}

b = deep_clone(data);
console.log(b);