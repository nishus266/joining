var http = require('http');
var url= require('url');

http.createServer( function(request, response){
   var q= url.parse(request.url, true);
   var g= q.pathname;
   console.log(g);
   if(g=='/dashboard'){
   response.writeHead(200, {'content-type': 'text/html'});
   response.write("<h1>Dashborad</h1>");
 }
 if(g=='/login'){
   response.writeHead(200, {'content-type': 'text/html'});
   response.write("<h1>Login</h1>");
 }
   response.end();


}).listen(8080);
