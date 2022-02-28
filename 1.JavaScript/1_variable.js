//variable declaration
//semicolon(;) are is not nessary in js
//var,let,const
// //JS is a dynamically typed langauge dataType is not specified here
// A language is dynamically-typed if the type of a variable is checked during run-time.
// Common examples of dynamically-typed languages includes JavaScript, Objective-C, PHP, Python, Ruby, Lisp, and Tcl.
//var a; //variable will be initialized with undefined
// console.log(a);
// var a=2; 
// console.log(a);
// var a='i am string'; 
// console.log(a);
// var a=true; 
// console.log(a);
// a=null
// console.log(a);

// Data types in JavaScript - primitive types
// String
// Number
// Boolean
// Null
// Undefined


//DataType in JavaScript ->number
// var b=2.3 //treated as a number
// var c='d' //treated as a string
// var d='I am String' //treated as a string
// var e; //undefinded
// var f=true; //treated as boolean
// var t=null; //treated as null
// var z="I am string s"
// console.log(z)

//var has some problem
//1st Problem with var - Redeclartion
// var b='hello'
// var b='bye'
// console.log(b);


//overcoming redeclation - using let keyword

// let b='hello'
// console.log(b);
// b='bye' // this will not work! Identifier 'b' has already been declared
// console.log(b);

//reassigning

// let b='hello'
// console.log(b);
// b='25bye'  //reassigning is allowed
// console.log(b);

// Diffrence in var and let
// var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
// var variables can be redeclared whereas let variables cannot.
// It can be said that a variable declared with var is defined throughout the program as compared to let.


// Loops in Js (Iterative Statements)
// for(var i = 0; i < 5; i++) {
//     console.log(i);
// }


// program to check if a number is prime or not

//for loop
// var flag=true;
// var num=13;
// for(var i=2;i*i<=num;i++){
//     if(num%i==0){
//         flag=false;
//         break;
//     }
//     i='string'
// }
// if(flag==true){
// console.log('Number is prime');
// }else{
//     console.log('Number is not prime')
// }
//2nd Problem with var -scoping problem
// if(10%2==0){
//     var a=2   //var keyword is function scoped
//     console.log(a)
// }
// console.log(a) // this can be accessed outside the if block as well!
//overcoming  - using let keyword

// if(10%2==0){
//     let a=2   
//     console.log(a) // let keyword is block scoped!
// }

// console.log(a) // this will not work! Identifier 'x' has not been declared

//const  -> we can't reassign nor we can redeclare

// const b=2
// console.log(b);
// b=2  // this will not work!
// console.log(b);

// const b;   //error redeclaration not possible
// console.log(b);

// const b=undefined;   //correct
// console.log(b);

