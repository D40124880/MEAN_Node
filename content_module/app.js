const http = require('http');
const fs = require('fs');
var static_contents = require('./modules/static.js')();
var server = http.createServer(function (request, response){
  console.log('client request URL: ', request.url);
  static_contents.my_contents(request, response);  //this will serve all static files automatically
});
server.listen(8000);
console.log("Running in localhost at port 8000");