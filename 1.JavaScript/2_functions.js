//Normal Function
// function sayHi(){  //function declaration
// console.log('function said hii')
// } 
// sayHi() //function invokation

//Pass Parameters in functions
function add(a,b){   // a and b are parameters
    console.log("The addition is " ,a+b);
}
add(2,3);  // 2 and 3 are arguments
//Multiply

function Multiply(a,b){
 //   console.log("The Multiply is ",a*b);
    return a*b;
}

console.log("The Multiplay is ",Multiply(2,3));

//function as first class Citizens
// js does not diffrentiate between functions and variables
// functions can be passed as parameters to other functions
// functions can be returned from other functions
// functions can be assigned to variables
//function expression
let sayHi=function(){ //anonymous functions(function which don't have name)
    console.log('Hi') // in js functions are first class citizens
}
sayHi();//in js you can assign to a variable and  can call it


//IIFE (Immediately invoked function Expression)

let add1=(function(a,b){
    return a+b;
})(10,20)
console.log(add1);
console.log(add1);

let subs=(function(a,b){
    
    console.log(a+b);
})(10,20)
subs;

// IIFE can be used in web automation
// IIFE is used when we want to execute a function as soon as the page is loaded
// IIFE is used when we want to execute a function once and then we don't want to use it again

// "Its a sin to use var keyword in the global scope if you're a Js Developer"
// var keyword is function scoped
// let keyword is block scoped
// const keyword is block scoped

// if java is car js is carpet 