console.log(a); //undefined

greet();//hello
var a = 2;

function greet() {
  console.log("Hello!");
}

// ⋊> ~/D/g/pepcoding-webdev on main ⨯ node lecture-014/hoisting.js
// undefined
// Hello!

// Temporal Dead Zone

 console.log(c);
 const c=10;
