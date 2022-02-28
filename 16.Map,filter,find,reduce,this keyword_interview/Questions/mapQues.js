// const products = [
//     { name: "T-Shirt", price: 25 },
//     { name: "Headphones", price: 125 },
//     { name: "Keyboard", price: 75 },
//     { name: "Monitor", price: 200 },
// ];
// Q1
// Gets the number of products whose price is a least 100
// let pl=products.map(function(v){
//     // if(v.price>=100){
//         return v.price;
//     // }
// }).filter(function(price){
//     return price>=100;
// })

// console.log(pl.length);

// Question 02

// Get the movie Names from this Array of Objects
// method and only get the movie name which has rating higher than or equal to 8
// use Filter and map chaining to achaive the objective

// var newReleases = [
//     {
//       id: 1,
//       title: "Die Hard",
//       rating: 9,
//     },
//     {
//       id: 2,
//       title: "Bad Boys",
//       rating: 7,
//     },
//     {
//       id: 3,
//       title: "The Chamber",
//       rating: 10,
//     },
//   ];
  
//   // Solution using filter and map chaining
  
//   let names=newReleases.filter(function(movies){
//     return movies.rating>=8;
// }).map(function(v){
//       return v.title;
//   })
// console.log(names);

// Q3

// Map Question
// You have to use map function and have to get all the students name in upperCase
// Use filter method to approach the problem
// Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord
let studentRecords = [
  { name: "Abhishek", id: 123, marks: 98 },
  { name: "Udai", id: 101, marks: 90 },
  { name: "Himanshu", id: 200, marks: 96 },
  { name: "Mrinal", id: 115, marks: 75 },
];

let up=studentRecords.map(function (student){
   return  student.name.toUpperCase();
});
console.log(up);
// output
// [ 'ABHISHEK', 'UDAI', 'HIMANSHU', 'MRINAL' ]


// solution2

let hmgid=studentRecords.filter(function(v){
    return v.id>120;
}).filter(function(e){
    return e.marks>=50;
})
console.log(hmgid);
// output
//[
//   { name: 'Abhishek', id: 123, marks: 98 },
//   { name: 'Himanshu', id: 200, marks: 96 }
// ]

// or
// let hmgid=studentRecords.filter(function(v){
//   return v.id>120;
// }).filter(function(e){
//   return e.marks>=50;
// })
// console.log(hmgid);

let studentName=studentRecords.filter(function(student){
  return student.marks>=50 && student.id>120;
})
console.log(studentName)