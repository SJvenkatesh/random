// Js has two modes strict and non-strict
// without using strict mode
//  a=10
// console.log(a) //10

// ***********************************************************
// "use strict"; // strict mode
// a = 10; // error
// console.log(a); // not defined
// Js has two environments node and browser
// *********************************************************
// Node ->non-strict mode
// this in global context
// console.log(this);//global area // {} empty object
// **********************************************************
// Inside a function
// function f(){
//     console.log(this) //global object
// }
// f()

// *************************************************************
// inside a function inside an object

// let obj={
//     name: 'rahul',
//     f:function(){
//         console.log(this)
//     }
// }
// obj.f()//it will return object itself


// ***************************************************************
// object function inside function 
let obj2 ={
    name : 'Rahul',
    f2 : function(){
        function g(){
        console.log(this)
        }
        g()
    } 
}
obj2.f2()  //it will return object itself

// Summarry - 
// Context : node+non strict ->
// global area -> empty Object
// function - > global Object

// obj -> function - object Itself

// obj - function - function -  global Object