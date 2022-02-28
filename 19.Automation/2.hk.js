const loginLink = "https://www.hackerrank.com/auth/login";
let email = 'danosa6541@naluzotan.com'
let password = '123456'
let puppeteer = require('puppeteer')
const codeFile=require('./code')
console.log('Before')
// Puppeteer works on promises
let browserWillbeLauncedPromise = puppeteer.launch({//return promise(pending stage promise)
    // for passing properties
    headless: false,  //for making puppeteer working visible ,bydeafult it workes in hidden way
    defaultViewport: null,  // for opening in fullscreen
    args: ['--start-maximized'],                 //staring in fullscreen
})

// *************************************************************************
// FOR creating temporary email address
// https://temp-mail.org/en/


let page;

// for opening new tabs and working in that new tab
browserWillbeLauncedPromise.then(function (browserInstance) {
    let newTab = browserInstance.newPage();
    return newTab;
}).then(function (newTab) {
    console.log('New Tab opened')
    page = newTab
    let pageWillbeOpenedPromise = newTab.goto(loginLink)
    return pageWillbeOpenedPromise;
}).then(function () {
    // console.log('Website opened');
    let typeEmailPromise = page.type("input[id='input-1']", email, { delay: 100 })
    return typeEmailPromise;

}).then(function () {
    let typePasswordPromise = page.type("input[id='input-2']", password, { delay: 100 });
    return typePasswordPromise;
}).then(function () {
    // for click specific button
    let loginPromise=page.click('button[data-analytics="LoginPassword"]',{ delay: 100 });
    return loginPromise;
}).then(function(){
    // let algoWillBeclickedPromise=page.click('.topic-card a[data-attr1="algorithms"]',{delay :100})//it will not work as we dont know when the page will come

    // waiting for next page to come after that page come it will click on button which we want
    let algoWillBeclickedPromise=waitAndClick('.topic-card a[data-attr1="algorithms"]',page);
    return algoWillBeclickedPromise;
}).then(function(){
    // console.log('Algo Section Clicked')
    let getToWarmupPromise=waitAndClick('input[value="warmup"]',page)
    return getToWarmupPromise;
}).then(function(){
    // query selector(atrribute selector, id selector ,etc....) - $$
// query selector all(selects all the attribute,id selector etc) - $$ 
    let ChallengesArrPromise=page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay : 100});
    return ChallengesArrPromise;
}).then(function(questionArr){
    console.log("No of Questions " + questionArr.length);
    // let questionWillBeSolvedPromise=questionSolver(page,questionArr[0],codeFile.answers[0]);
});


function waitAndClick(selector ,cPage){

return new Promise(function(resolve,reject){
    // WAITING FOR SELECTOR UNTIL IT FINDS SELECTOR
    let waitForModalPromise=cPage.waitForSelector(selector);
    waitForModalPromise.then(function(){
        let clickModalPromise=cPage.click(selector,{delay :100});
        return clickModalPromise;
    }).then(function(){
        resolve();
    }).catch(function(){
        reject();
    })
})
}
 
function questionSolver(page,question,answer){
     return new Promise(function(resolve,reject){
         let questionWillBeClickedPromise=question.click();
         questionWillBeClickedPromise.then(function(){
             console.log('question Clicked')
         })
     });
}

console.log('After') 