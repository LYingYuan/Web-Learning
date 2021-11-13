var arr=[1,2,3,3,4,'a','a','b','c'];

function reduce(arr){
    var res=[];

    for(var i=0, len=arr.length; i<len; i++){
        if(i == 0){
            res[0] = arr[0];
        }
        else{
            for(var j=0; j<res.length; j++){
                if(res[j] === arr[i]){
                    break;
                }
                else if(j == res.length - 1){
                    res[res.length] = arr[i];
                }
            }
        }
    }

    return res;
}

console.log(reduce(arr));  //[1, 2, 3, 4, "a", "b", "c"]