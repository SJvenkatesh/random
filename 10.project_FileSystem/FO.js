const fs = require("fs")
const help = require('./commands/help')
const organize = require('./commands/organize')
const tree = require('./commands/tree')
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

let inputArr = process.argv.slice(2);
console.log(inputArr)
let command = inputArr[0];  //tree,organize,help
switch (command) {
    case 'tree':
        // console.log('Tree Implements')
        tree.treeKey(inputArr[1])
        // treeFn(inputArr[1]);
        break;
    case 'organize':
        console.log('Organize Implements')
        // organizeFn(inputArr[1]);
        organize.organizeKey(inputArr[1])
        break;
    case 'help':
        help.helpKey();
        console.log('Help Implemented')
        break;
    default:
        console.log('Please enter a valid command');
        break;
}




