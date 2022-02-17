var arr = [1, [2, 3], 4, [5, [6, [7, 8]]],[9, 10]];
res = []; //用来存储返回的数据
var len2 = 0

function fun1(arr) {
    var len = arr.length
    for(var i=0; i<len; i++){
        if(Array.isArray(arr[i])){
            fun1(arr[i])
        }
        else{
            res[len2++] = arr[i]
        }
    }
}
// console.log(typeof(arr))
// console.log(Array.isArray(arr[1]))
fun1(arr);
console.log(res); //[1,2,3,4,5,6,7,8,9,10];