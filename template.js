var http = require('http');
var url= require('url');
var fs= require('fs');
http.createServer( function(request, response){
   var q= url.parse(request.url, true);
   var g= q.pathname;
   var m='./views'+g+'.html';
   console.log(m);


     fs.readFile(m, function(err, data) {
       if (err) {
       }
       response.writeHead(200, {'content-Type': 'text/html'});
       response.write(data);
       response.end();
 });




}).listen(8080);
