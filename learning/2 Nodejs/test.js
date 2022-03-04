// var isPalindrome = function(head) {
//     let list = head;
//     let list1 = null;
//     while(list){
//         const next = list.next;
//         list.next = list1;
//         list1 = list;
//         list = next;
//     }
//     console.log(list1)
//     list = head;
//     console.log(list)
//     while(list){
//         if(list.val !== list1.val){
//             return false
//         }else{
//             list = list.next;
//             list1 = list1.next;
//         }
//     }
//     return true;
// };
// console.log(isPalindrome([1,4,2,1]));

var reverseList = function(head) {
    let headb = null;
    let heada = head;
    while(heada){
        const next = heada.next;
        heada.next = headb;
        headb = heada;
        heada = next;
    }
    return headb;
};
console.log(reverseList([1,2,3]))