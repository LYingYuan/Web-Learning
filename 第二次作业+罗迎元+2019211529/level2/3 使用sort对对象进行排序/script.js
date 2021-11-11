var arr=[{name:'xiaoming',age:18},{name:'zhangsan',age:34},
        {name:'lisi',age:29},{name:'wangwu',age:24}];

function sortby(key, way){//way为true表示默认按照升序排列
    num_test = /^\d+$/
    if(way == true){
        return function(a,b){
            value1 = a[key]
            value2 = b[key]
            if(num_test.test(value1) && num_test.test(value2)){
                return value1 - value2
            }
            else {
                return value1.localeCompare(value2)
            }
        }
    }
    else{
        return function(a,b){
            value1 = a[key]
            value2 = b[key]
            if(num_test.test(value1) && num_test.test(value2)){
                return value2 - value1
            }
            else {
                return value2.localeCompare(value1)
            }
        }
    }
}

console.log(arr.sort(sortby('age', true))) //[{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29},{name: "zhangsan", age: 34}]
// console.log(arr.sort(sortby(['name'],false))) //[{name: "zhangsan", age: 34},{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29}]

//因为浏览器console.log输出引用的原因，测试的时候可以将另一句不用的console语句注释起来，避免对测试结果产生影响