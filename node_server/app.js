//get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!!
var fs = require('fs')
// creating a server using http module:
var server = http.createServer(function(request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this s how we do routing:
    if(request.url === '/'){
        fs.readFile('index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}) // send data about response --//// 200's or 300's is okay ---- but 400's or 500's is bad
            response.write(contents); // send response body
            response.end(); // finsihed!
        });
    }
    // request didn't match anything:
    // else{
    //     response.writeHead(404);
    //     response.end('File not found!!!');
    // }
    else if (request.url === '/dojo.html'){
        fs.readFile('dojo.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            repsonse.write(contents);
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.end("File not Found!!!");
    }
});
// tell your server which part to run on
server.listen(6789);
// print to terminal window
console.log('Running in localhost at port 6789');

// HTML	{'Content-Type': 'text/html'}
// CSS	{'Content-Type': 'text/css'}
// Javascript	{'Content-Type': 'text/javascript'}
// png/jpeg/gif	{'Content-Type': 'image/*'} (* is the image format, ie png or jpeg etc)