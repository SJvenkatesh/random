let puppeteer=require('puppeteer')
console.log('Before')
// puppeteer works based on promise

let browserWillbeLauncedPromise=puppeteer.launch({//return promise(pending stage promise)
    // for passing properties
    headless : false,  //for making puppeteer working visible ,bydeafult it workes in hidden way
    defaultViewport:null,  // for opening in fullscreen
    rgs: ['--start-maximized']                   //staring in fullscreen
})  //pending
// **********************************************************************************************

// browserWillbeLauncedPromise.then(function(browserInstance){
// return browserInstance;//opens browser
// })
// **********************************************************************************************

// for opening new tabs
// browserWillbeLauncedPromise.then(function(browserInstance){
//     let newTab=browserInstance.newPage();
//     return newTab;
// })
// **********************************************************************************************
// for opening new tabs and working in that new tab
browserWillbeLauncedPromise.then(function(browserInstance){
    let newTab=browserInstance.newPage();
    return newTab;
}).then(function(newTab){
    console.log('New Tab opened')
    let pageWillbeOpenedPromise=newTab.goto('https://pepcoding.com/')
    return pageWillbeOpenedPromise;
}).then(function(webPage){
    console.log('Website opened');
})

console.log('After')
 