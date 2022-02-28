const request=require('request')
// for request we used https://www.npmjs.com/package/request
// we can also use https://www.npmjs.com/package/jsdom 

const cheerio=require('cheerio')

// link of the web site -  https://www.worldometers.info/coronavirus/

console.log('Before')
request('https://www.worldometers.info/coronavirus/',cb)


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
let contentArr=selTool('.maincounter-number span')
// for(let i=0;i<contentArr.length;i++){
//     let data=selTool(contentArr[i]).text();   //for converting it into text
//     console.log(data);
    
// }
let totalcases=selTool(contentArr[0]).text();
console.log('Total Cases '+totalcases);
let totalDeaths=selTool(contentArr[1]).text();
console.log('Total Deaths '+totalcases);
let totalRecovered=selTool(contentArr[2]).text();
console.log('Total Recovered'+totalRecovered);
}

console.log('After')


