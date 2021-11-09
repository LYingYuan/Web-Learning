var arr1=[1,3,5,7,9];
var arr2=[2,4,6,8,10];

function merge(arr1,arr2){
    //先合再排
    var res = []
    var temp
    for(var i = 0, len = arr1.length; i<len; i++){
        res[i] = arr1[i]
    }
    for(var i = 0, len = arr2.length, len2 = res.length; i<len; i++){
        res[len2+i] = arr2[i]
    }
    for(var i=0, len = res.length; i < len-1; i++){
        for(var j=0; j<len-i-1; j++){
            if(res[j] > res[j+1]){
                temp = res[j]
                res[j] = res[j+1]
                res[j+1] = temp
            }
        }
    }
    return res
}

console.log(merge(arr1,arr2));//[1,2,3,4,5,6,7,8,9,10]