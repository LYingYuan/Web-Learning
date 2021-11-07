var arr=[1,2,3,3,4,'a','a','b','c']

function reduce(arr){
    var res = [];

    var flag;
    var l = 0;
    for(var i=0; i<arr.length; i++){
        flag = 0;
        for(var j=0; j<res.length; j++){
            if(res[j] === arr[i]){
                flag = 1
                // continue
            }
        }
        if(flag == 1){
            res[l++] = arr[i]
        }
    }

    return res
}

console.log(reduce(arr)) //[1, 2, 3, 4, "a", "b", "c"]