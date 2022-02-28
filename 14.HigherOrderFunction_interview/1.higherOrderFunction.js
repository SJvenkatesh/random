// A higher order function is a function that takes a function as an argument or returns a function as a result.
// Higer order functions are function that operate on other functions,either by taking them as arguments or by returning them.
// In simple words, A higher-Order function is a function that recevives a function as an arguments or return the function as output

let arr=[2,5,9,8,15,11,6]


// for(var i=0;i<arr.length;i++){
// arr[i]=arr[i]*arr[i];
// }
// ********************************************
// Map Function
//  we can do this without using for loop using map function
// map is itself a function
//map takes a callback function as an arg
// map will call the callback function as many times as the elements in the array
// map will process every value and will apply the instruction that inside the callback function
// map returns a new array
// map is only used in array function
// eg1
// let sqarr=arr.map(function squarer(v){
//     return v*v
// })
// console.log(sqarr);//[ 4,  25, 81, 64,225, 121, 36 ]
// console.log(arr);//[ 2,  5, 9, 8,15, 11, 6]
// eg2
// print names using map functions
let nameArr=['Mirnal','Harsh','Utkarsh']

let names=nameArr.map(function(nam){
    return nam;
})
console.log(names);

