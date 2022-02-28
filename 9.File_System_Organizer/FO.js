// We will be created a File System Organizer

// js ma inout array ka form mein jaata hai and that is array is process 

// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders


//js mein input Array ke from mein jaata hai and that is array is process.argv Array

let input = process.argv[2]   //node FO.js venkatesh
// [node FO.js venkatesh]
console.log(input)
let command=input  //tree,organize,help
switch(command){
    case 'tree':
        console.log('Tree Implements')
        break;
    case 'organize':
        console.log('Organize Implements')
        helpfn()
        break;
    case 'help':
        console.log('Help Implemented')
        break;
    default: 
        console.log('Please enter a valid command');
        break;
    }

    function helpfn(){
        console.log(`List of all Commands-
        1) Tree Command -node FO.js tree <dirname>
        2)Organize Command- node FO.js organize <dirname>
        3)Help Command - node FO.js help `)
    }
   