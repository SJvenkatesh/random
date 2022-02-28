// Callback function -any function that is passed as an argument to another function is known as callback function
 const fs=require('fs')
// *********************************************************************************************
// Callback functions in Js

// Callback functions are functions that are passed to other functions as arguments.
// They are used to execute code after the function that calls them is finished executing.
// They are also used to execute code in response to events.
// They are used to execute code in response to asynchronous events.

//  function printFirstName(firstName,cb,cb2){
      // cb is a callback function parameter
//     console.log(firstName);
//     cb('Sachdeva')
//     cb2(23)
//     // cb2(52) 
// }

// function printLastName(lastName){
    // function that is passed to printFirstName as a callback
//     console.log(lastName);
// }
// function printAge(age){
     // function that is passed to printFirstName as second callback parameter
//     console.log(age);
// }

// printFirstName('Utsav',printLastName,printAge) // prints "John" and "Doe" and "23"

// *********************************************************************************************

// Synchronus way of reading file  (line by line)
// console.log('before')

// let data=fs.readFileSync('f1.txt');
// console.log(' '+data);

// console.log('after')
// *********************************************************************************************
// Asynchronous way of reading a file 
// read file excpect call back function


// error first callbacks : error first callbacks are functions that are passed to handle error events(you write callbacks fumction and first deal with errors)
// Error-First Callback in Node.js is a function which either returns an error object or any successful data returned by the function.
// The first argument in the function is reserved for the error object. If any error has occurred during the execution of the function, it will be returned by the first argument.
// The second argument of the callback function is reserved for any successful data returned by the function. 
// If no error occurred then the error object will be set to null.

console.log('before');

fs.readFile('f1.txt',cb)

fs.readFile('f2.txt',cb2);



function cb(err,data){
if(err){
    console.log(err)
}
console.log(' '+data)
}      

console.log('after');
 
console.log('before');

function cb2(err,data){
if(err){
    console.log(err)
} 
console.log(' '+data)
}      

console.log('after');


// The nature of these async functions is that they are not executed immediately.
// And the order can vary depending on the order of the events. The order of the events is not guaranteed.

// event loop visualizer
// https://www.jsv9000.app/