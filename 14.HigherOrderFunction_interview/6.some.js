
// some() function is used to check if any of the elements in an array passes the condition.
// some() expects a callback function as its argument
// The callback function is called for each element of the array, and the element is passed as the first argument to the callback function.
// The callback function should return a boolean value.
// If the callback function returns true, some() returns true. Otherwise, it returns false.

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
let anyDeposit=transactions.some(function(n){
    return n>0;
})
console.log(anyDeposit);     //true

const transactions1 = [-1000, -3000, -4000, -2000, -898, -3800, -4500];
let anyDeposit1=transactions1.some(function(n){
    return n>0;
})
console.log(anyDeposit1);    //false

