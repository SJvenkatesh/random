// let arr=[2,3,4,5,6]
// let sum=arr.reduce(function(accumulator,values){
// let updatedSum=accumulator+values;
// return updatedSum
// },0)

// console.log(sum)   //20
//   ************************************************************************
// Multiplying
// let Mul=arr.reduce(function(accumulator,values){
//     let updatedSum=accumulator*values;
//     return updatedSum
//     },1)
    
// console.log(Mul)   //720
//   ************************************************************************
// Q2

// From the Transactions Array filter out positive Elements and Calculate the total amount
// Use filter and Reduce to Achieve this
// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]
// let sum=transactions.filter(function(v){
//     return v>0;
// }).reduce(function(accumulator,values){
//     let updatedSum=accumulator+values;
//     return updatedSum
//     },0)
// console.log(sum)//13800
//   ************************************************************************

// ReduceRight
// it will travel from right to left
// let arr=[2,3,4,5,6]
// let sumFromRight=arr.reduceRight(function(accumulator,values){
// let updatedSum=accumulator+values;
// return updatedSum
// },0)
// console.log(sumFromRight);