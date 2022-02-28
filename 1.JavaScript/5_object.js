// in JS object are basically key value pair
//to declare an obj
// let obj ={}  //object declaration
// let person ={
//     name : 'Mohit',
//     age : 20,
//     Phone :12345
// }

// console.log(person)

//---------------------

let cap={
firstName : 'Steve',
lastName : 'rogers',
friends : ['Bucky','Tony','Dr Banner'],
age : 102,
isAvenger :true,
address : {
    state : 'Manhattan',
    city : 'New York'
},
sayHi: function fn(){
    console.log('captain Says Hi')
},
 retHi: function ft(){
    return 'venkatesh'
}
}
// console.log(cap.firstName) //dot Notation //access a property of an object
//or
//console.log(cap['firstName'])  //breaket Notation
// console.log(cap.age)
// console.log(cap.friends[1])
//console.log(cap.address.city)
//cap.sayHi()
//console.log(cap.retHi())

//loop -> for in loop
//for looping in the object

for(let i in cap){
console.log("key : ",i,'Value : ',cap[i])
}

// cap.isAvenger=false; //update a property of an object
// console.log(cap)
// cap.movies=['Age of Ultron','First Avenger'] //add new property of an object
// console.log(cap)
// delete cap.age //delete a property from an object
// console.log(cap)
