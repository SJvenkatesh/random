// Split
// split() is a string method that splits a string into an array of substrings based on the delimiter.
// split() splits a string into an array of substrings based on the separator string you provide as an argument.
// The separator string can be a character, a string, or a regular expression.
// If the separator is not specified, the string is split on every character.
// If the separator is an empty string (""), the string is split on every character.


let str='pepcodcer'
// split will split the sentance based on parameters and the parmeter will also get remove
// split function will split a string according to a passed parameter and will return the left and the right part in an array
let partOfString=str.split('c') 
console.log(partOfString);//[ 'pep', 'od', 'er' ]
 

// Join 
// join function reverses the process of split()
// join() takes an array and joins the elements into a string
// it takes an optional separator argument which is used to separate the elements of the array
// if the separator is not specified, the array elements are separated by commas


// fills with empty space with parmeter
let joinedStr=partOfString.join('c')
// Join function will take an array and it will fill the parameter after each element  of the array with the passed parameters
// and will return the complete str

console.log(joinedStr);  //joined str (pepcoder)

let partOfString1=['ve n','ka te rs h'];
let joinedStr1=partOfString1.join('c')
console.log(joinedStr1);

// Task
// you have to use map function and you will take out firstName and lastName separately
let nameArr=['Vishal Kumar','Vaibahv Rawal','Anmol Taneja']
let ans=nameArr.map(function name(namesV){
return namesV.split(' ');
})
console.log(ans);

// Task to convert Dollar to Rupees using map() and vice-versa
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd=74;

let rs=transactions.map(function(d){
return (d/inrtToUsd).toFixed(2);
// toFixed ->no of elements after decimal for round off
})
console.log(rs);

