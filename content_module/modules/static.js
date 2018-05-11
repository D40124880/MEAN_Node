const http = require('http');
const fs   = require('fs');
//creating a server
module.exports = function(){
    return {
        my_contents: function(request, response){
            if(request.url === '/'){
                fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
                    response.writeHead(200, {'Content-Type': 'text/html'})
                    response.write(contents); 
                    response.end();
                });
            } 
            else if(request.url === '/images/car4.jpg'){
                console.log('helloooo');
                fs.readFile('./images/car4.jpg', 'utf8', function (errors, contents) {
                    console.log(errors)
                    response.writeHead(200, {'Content-type': 'image/jpg'});
                    response.write(contents);
                    response.end();
                });
            }
            else if(request.url === '/stylesheets/style.css'){
                fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
                    response.writeHead(200, {'Content-Type': 'text/css'});
                    response.write(contents);
                    response.end();
                });
            } 
            else {
                response.end('File not found!!!');
            }
        }
    }
}
