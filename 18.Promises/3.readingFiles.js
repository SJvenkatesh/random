const fs=require('fs')
       
// async function fs.readFile
let f1p=fs.promises.readFile('f1.txt');
let f2p=fs.promises.readFile('f2.txt');
let f3p=fs.promises.readFile('f3.txt');
      
function cb(data){
    console.log("File Data -> "+data);
}      
f1p.then(cb);
f2p.then(cb); 
f3p.then(cb); 
       