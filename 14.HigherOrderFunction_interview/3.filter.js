// In bases of some condition array elements are filtered out 
// Filetr return a new array containing array elements that matches a specified condition
// if the condition stands true it will filter out those elements and will presents them in a new array

// let arr=[2,3,5,7,9,11,13,12,18]
// // we need to take out all the even numbers

// let evenNoArr=arr.filter(function(n){

//     if(n%2==0){
//         return true;
//     }else{
//         return false;
//     }
// })

// console.log(evenNoArr)//[ 2, 12, 18 ]

//  Task
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
let profit=transactions.filter(function(n){
    if(n>0){
        return true;
    }else{
        return false;
    }
})
 
console.log(profit);

