// everything in the java script happens inside an excution context
// Execution Context - The Environment where JS code os Executed and Evaluated.It is the place where all the variables and functions are defined.
// Global Execution Context -by default an excution is provided from JS and that is known as Global Execution Context.
// Global Execution Context in which the whole code will reside

// That whole thing is called as execution context inside that there two things 
// 1.Memory component
// 2.Code component
// In memory component variable and functions values can be stored in a  key value format.
// Code component is a place where whole JavaScript code is executed
// Memory component is also called as variable environment 
// And code component is also called as thread of execution.

var a=2;
var b=3;

function add(a,b) {
var sum=a+b;
return sum;
}

var sum1=add(1,2)
var sum2=add(a,b)

console.log(sum1);
console.log(sum2);

// Execution context - Environments.
// ->Global Execution Context

