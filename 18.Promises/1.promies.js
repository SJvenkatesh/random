const fs=require('fs')
// promises are also object in javaScript

// *************************************************************
// using call back function
// console.log('Before')
// fs.readFile('f1.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     console.log('File Data -> '+ data)
// })

// console.log('After')
// ***************************************************************
// using promise

console.log('Before')
let promise=fs.promises.readFile("f1.txt")//pending
// console.log(promise)//pending
console.log('After')
// for fulfill (then)
promise.then(function(data){
    console.log("File Data -> "+data)
});
// if any error comes (catch) //rejected
promise.catch(function(err){
    console.log(err)
})

console.log("After");

// Note : Promises as an optimisation over callback functions, since there is something known as
// callback hell (callback hell is a nightmare) and it is not easy to debug. 



// setTimeout(function)
// setTimeout() : Helps to execute a function after a certain time

// The global setTimeout() method sets a timer which executes a function or specified piece of code
// once the timer expires.

// setTimeout(() => {
//     console.log("this is the first message");
//    }, 5000);
//    setTimeout(() => {
//     console.log("this is the second message");
//    }, 3000);
//    setTimeout(() => {
//     console.log("this is the third message");
//    }, 1000);
//    // Output:
//    // this is the third message
//    // this is the second message
//    // this is the first message
   
 