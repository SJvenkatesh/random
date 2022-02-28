const path=require('path')


//this extname methods gets the extenstion name of the file
let ext=path.extname('D:\DEV\Class\7.Node\f1.txt')

console.log(ext)

let basename=path.basename('D:\\DEV\\Class\\7.Node\\f1.txt')
console.log('BaseName - '+basename)

console.log(__dirname) //gets u the path of current directory of the file
console.log(__filename) //gets u the path of the file you are in

let basename1=path.basename(__filename)
console.log('BaseName - '+basename1)
