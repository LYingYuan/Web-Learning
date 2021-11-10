var arr=[1,5,4,8,2,6,3,9,7];

function mySort(arr){
    //冒泡排序
    var temp;
    for(var i=0, len = arr.length; i < len-1; i++){
        for(var j=0; j<len-i-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(mySort(arr)); //[1,2,3,4,5,6,7,8,9]