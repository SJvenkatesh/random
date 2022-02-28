// File System Module in node js
// working with files
// File System Module is used to read and write files
const fs=require('fs')   // require is used to import the file system module
// reading, writing and deleting files
// reading a file : fs.readFileSync() - synchronous

const path=require('path')

// // 1. we will be reading writing updating and deleting files
// // reading file
// let content=fs.readFileSync('f1.txt')  // read the file test.txt
// console.log(content);  //binary data
// console.log(""+content);// data will be in binary data so we convert it into string using concatenation

/*
The fs.readFileSync() method is an inbuilt application programming interface
 of fs module which is used to read the file and return its content.
  In fs.readFile() method, we can read a file in a non-blocking asynchronous way,
   but in fs.readFileSync() method, we can read files in a synchronous way, i.e.
    we are telling node.js to block other parallel process and do the current file reading process.
     That is, when the fs.readFileSync() method is called the original node program stops executing,
      and node waits for the fs.readFileSync() function to get executed, after getting the result of 
      the method the remaining node program is executed.
*/

// //Writing to a file
// fs.writeFileSync('f2.txt','This data will be written on F2')
// // If the file name that is passed doesn't exists the new file be created with its name and the data will be written on that file
// fs.writeFileSync('f3.txt','This data will be written on F3') //it will create new file itself if f3 was not present
// console.log('Data written')
// // append a file
// //appendFile Sync methods adds new data to a previosuly written file
// fs.appendFileSync('f2.txt','This is new data');
// // delete a file

// fs.unlinkSync('f2.txt');
// console.log('f2 deleted');


// // Directories
// // creating a directory

// // mkdirSync method is used to create a new Directory or folder

// // fs.mkdirSync('myDirectory')
// // console.log('Directory Created')

// // // delete a directory
// // fs.rmdirSync('myDirectory')
// // console.log('Directory Removed')

// //To check whether a directory exits or not
// let doesExit=fs.existsSync('myDirectory')
// console.log(doesExit)  //true
// //To check whether a directory exits or not
// let doesExit1=fs.existsSync('mmyd')
// console.log(doesExit1)
// let doesExit2=fs.existsSync('f1.txt')
// console.log(doesExit2)
// let statsOfDirictory=fs.statSync('myDirectory')
// console.log(statsOfDirictory)

// console.log('isFile?',statsOfDirictory.isFile())
// console.log('isDirectory?',statsOfDirictory.isDirectory())

// // Read directory-method which is used to check containt of the directory
// let folderpath='D:\\DEV\\Class\\7.Node\\myDirectory'
// let foldercontent=fs.readdirSync(folderpath)
// console.log(foldercontent)
// console.log(""+foldercontent)

// ************************* Path Module **************************

// Copying Files
// required source file and destination file
// use double slash 
let srcFilePath='D:\\DEV\\Class\\7.Node\\myDirectory\\f4.txt'
let destinationPath='D:\\DEV\\Class\\7.Node\\myDirectory2\\'
// file base name to name in source file
let tobecopiedFileName = path.basename(srcFilePath)//taking file name(f4.txt)
console.log(tobecopiedFileName)

let destPath=path.join(destinationPath,tobecopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath,destPath)
console.log('File Copied')

// ************************************************************

// chain of methods
// fs.mkdirSync("07-test"); // create a directory
// fs.writeFileSync("07-test/test.txt", "This is the content of the file"); // write the content of the file
// fs.appendFileSync("07-test/test.txt", ".This is the new content of the file"); // append the content of the file
// fs.unlinkSync("07-test/test.txt"); // delete the file
// fs.rmdirSync("07-test"); // delete the directory

// // writing a file : fs.writeFileSync() - synchronous
// fs.writeFileSync("06-test.txt", "This is the content of the file"); // write the content of the file
// console.log("The file has been written"); // print the message

// // appennd file : fs.appendFileSync() - synchronous (updates the file with new data)
// fs.appendFileSync("06-test.txt", ".This is the new content of the file"); // append the content of the file
// console.log("The file has been appended"); // print the message

// // Deleting a file : fs.unlinkSync() - synchronous
// fs.unlinkSync("06-test.txt"); // delete the file
// console.log("The file has been deleted"); // print the message

// // Directory and file creation : fs.mkdirSync() - synchronous
// fs.mkdirSync("07-test"); // create a directory
// console.log("The directory has been created"); // print the message

// // Directory exists : fs.existsSync() - synchronous
// let exists = fs.existsSync("07-test"); // check if the directory exists
// console.log("The directory exists: " + exists); // print the message

// // Directory stats : fs.statSync() - synchronous / fs.lstatSync() - synchronous
// let stats = fs.statSync("07-test"); // get the stats of the directory
// let lstats = fs.lstatSync("07-test"); // get the stats of the directory
// console.log(lstats); // print the stats

// // check if a file is a directory : fs.statSync().isDirectory() - synchronous
// let isDir = fs.statSync("07-test").isDirectory(); // check if the directory is a directory
// console.log("The directory is a directory: " + isDir); // print the message

// // delete a directory : fs.rmdirSync() - synchronous
// fs.rmdirSync("07-test"); // delete the directory

// // check if a file exists : fs.existsSync() - synchronous
// let exists2 = fs.existsSync("07-test"); // check if the directory exists
// console.log("The directory exists: " + exists2); // print the message

// // check is a file is a file : fs.statSync().isFile() - synchronous
// let isFile = fs.statSync("07-test").isFile(); // check if the directory is a file
// console.log("The directory is a file: " + isFile); // print the message : false

// // read inside a directory : fs.readdirSync() - synchronous
// let files = fs.readdirSync("07-test"); // read the files inside the directory path given in the argument
// console.log(files); // print the files



