// Find returns the first element of an array that satisfy the condition


// The find() method returns the value of the first element in the array that satisfies the provided testing function.
// Otherwise undefined is returned.
// find() expects a callback function as its argument
// The callback function is called for each element of the array, and the element is passed as the first argument to the callback function.
// The callback function should return a boolean value.
// If the callback function returns true, find() returns the value of the element. Otherwise, it returns undefined.
// it just returns the first element that satisfies the condition, a value and not an array
// used to look up a value in an array or anything else that is iterable

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const firstWithdrwal=transactions.find(function(n){
    return n<0;
})

console.log(firstWithdrwal);//-898

 