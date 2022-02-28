const request = require('request');
// Request is designed to be the simplest way possible to make http calls
console.log('before')
request('https://www.worldometers.info/coronavirus/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  console.log('body:', body); // Print the HTML for the Google homepage. 
});
console.log('after')