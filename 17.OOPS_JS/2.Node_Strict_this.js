// Node + strict
// global-
'use strict'
// this in global context
console.log(this)

// ***********************************************************

// Inside a function
function f(){
    console.log(this)
}

f()
// ************************************************************

// inside a function inside an object

// let obj = {
//        name : 'Rahul',

//        f: function(){
//               console.log(this)
//        }
// }

// obj.f()



// ***************************************************************
// object function inside function 

let obj2 = {
    name :'Mrinal',

    f: function f(){
           function g(){
                  console.log(this)
           }

           g();
    }
}


obj2.f()