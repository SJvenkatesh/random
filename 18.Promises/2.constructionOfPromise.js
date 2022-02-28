// let myPromise=new Promise(function(resolve,reject){
//     // your code will go here
// })
// ****************************************************************
// let promise=new Promise(function(resolve,reject){
//     const a='Pepcoders'
//     const b='pepcoders'
//     if(a===b){
//         resolve()
//     }else{
//         reject()
//     }
// })

// promise.then(function(){
//     console.log('Equal  ')
// })
// promise.catch(function(){
//     console.log('Non Equal')
// })

// **************************************************************
let promise=new Promise(function(resolve,reject){
    const a=2
    const b=2
    if(a===b){
        resolve('yes values are equal')
    }else{
        reject('No the values are not equal')
    }
})

// promise.then(function(){
//     console.log('Equal  ')
// })
// promise.catch(function(){
//     console.log('Error Non Equal')
// })
// we can also write by chain
promise.then(function(data){
    console.log('result coming from Resolve Method ->'+data);
}).catch(function(err){
    console.log('Result coming from Reject Method ->'+err);
});

  