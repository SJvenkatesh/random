const request=require('request')
// for request we used https://www.npmjs.com/package/request
// we can also use https://www.npmjs.com/package/jsdom 

const cheerio=require('cheerio')

// link of the web site -  https://www.worldometers.info/coronavirus/

console.log('Before')
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"
request(url,cb)

function cb(error, response, html){
    if(error){
        console.error(error)
    }else{
            // console.log('body',body)  
             handleHtml(html)//for taking useful data from this function
    }
}
function handleHtml(html){
   let selTool =cheerio.load(html) //selector tool for 
//    console.log(selTool);
//    ctrl+f for finding
let elemArr=selTool('.d-flex.match-comment-padder.align-items-center .match-comment-long-text p')
// for(let i=0;i<contentArr.length;i++){
//     let data=selTool(contentArr[i]).text();   //for converting it into text
//     console.log(data);
// }
let lbc=selTool(elemArr[0]).text();
console.log(lbc);
}
console.log('After')


