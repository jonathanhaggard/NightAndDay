console.log('test')

var http = require('http');
var reader = require("buffered-reader");
var BinaryReader = reader.BinaryReader;
var BufferedReader = reader.DataReader;

var server = http.createServer(function(request, response) {
    new BufferedReader ("color.txt", { encoding: "utf8" })
    .on ("error", function (error){
        console.log ("error: " + error);
    })
    .on ("line", function (line){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        console.log ("w: " + line);
        response.end(line);
    })
    .on ("end", function (){
        console.log ("error: " + error);
    })
    .on ("line", function (line){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        console.log ("w: " + line);
        response.end(line);
    })
    .on ("end", function (){
        console.log ("EOF");
    })
    .read ();

});

server.listen(8000);

console.log('started');
