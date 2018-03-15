
var request = require('request');

 request("http://swapi.co/api/people/", function(err, response, body) {
     if (!err && response.statusCode === 200) {
         var data = JSON.parse(body);
         console.log(data);
     }
    //  console.log(response);
    //  console.log(body);
 })
