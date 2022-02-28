const fs = require("fs")
const path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
    images: ["jpg", "jpeg", "heic"],
};
function organizeFn(dirpath) {
    //input of a directory path
    let destPath;
    if (dirpath == undefined) {
        console.log('Please Enter a valid Directory Path');
        //check whter dirpath is passed or not
        return;
    } else {
        // this will tell wheter the dirpath exsists or not
        let doesExist = fs.existsSync(dirpath);
        // console.log(doesExit);
        if (doesExist == true) {
            destPath = path.join(dirpath, 'organized_files')
            // D:\DEV\Class\10.project_FileSystem\Test Folder
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);  //we will only create a folder if it does not already exists
            } else {
                console.log("This folder :" + destPath + " Alredy Exists");
            }
        } else {
            console.log("Please Enter a valid Path");
        }
    }
    organizeHelper(dirpath, destPath)

}

// we are wrting this function to categorixe our files                                                                                                                                                         
function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src)  //get all the files and folders inside your src
    // console.log(childNames)

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i])  //path is identified for the files
        // console.log(childAddress);
        let isFiles = fs.lstatSync(childAddress).isFile()  //we check heere to identify  only the files
        // console.log(childAddress+" "+isFiles)

        if (isFiles == true) {
            // if the file is a file
            let fileCategory = getCategory(childNames[i]);
            // we are calling the categorize function to get the category of the file (extemsion of the file)
            console.log(childNames[i] + " belongs to " + fileCategory)
            // we took out all the category type of different files
            sendFiles(childAddress, dest, fileCategory)
        }
    }

}

function getCategory(name) {
    let ext = path.extname(name)
    // console.log(ext)
    ext = ext.slice(1)  //for removing dot(.)
    //  console.log(ext)

    for (let type in types) {
        let cTypeArr = types[type];
        //   console.log(cTypeArr)

        for (let i = 0; i < cTypeArr.length; i++) {
            if (ext == cTypeArr[i]) {  //we matched the extension with the values present in ctypeArr
                // console.log(type);
                return type;
            }
        }
    }
    return 'others'

}


function sendFiles(srcFilePath, dest, fileCategory) {
    // want to create folders of documents ,arcives,media,app
    //defining path
    let catPath = path.join(dest, fileCategory); //here we are making file categories paths
    if (fs.existsSync(catPath) == false) {  //checking for category folder path
        fs.mkdirSync(catPath)
    }
    let fileName = path.basename(srcFilePath) //we took the names of the files name
    let destFilePath = path.join(catPath, fileName)   //here we created a path for the files in category folder

    fs.copyFileSync(srcFilePath, destFilePath)//copied files from src to destination path
    // console.log(fileName+"is copied to "+fileCategory)  
    fs.unlinkSync(srcFilePath)//deleted the files from src
    console.log(fileName + " is copied to " + fileCategory)
}
// double equale(==) check for value eg.  2 will be equal to '2'
// thriple equale(===) also check for data type 
// Strict Equality and Loose Equality
// The loose equality operator ‘==’ allows us to compare two or more operands by converting their value to a common type first and then checking for the equality between them. 
// strict equality operator ‘===’ allows us to compare two or more operands by checking the equality between the values as well as their types 
// . It returns true only if the values and the type both match with the other operand.

module.exports={
    organizeKey :organizeFn
}