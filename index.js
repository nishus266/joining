var http = require('http');
var url= require('url');
var fs= require('fs');
http.createServer( function(request, response){
   var q= url.parse(request.url, true);
   var g= q.pathname;
   console.log(q);
   var m='./views'+g+'.html';
   console.log(m);
   if(g=='/'){

     fs.readFile(m, function(err, data) {
       if (err) {
       }
       console.log(data);
       response.writeHead(200, {'content-Type': 'text/html'});
       response.write(data);
       response.end();
 });
}

 if(g=='/login'){
   fs.readFile(m, function(err, data) {
     if (err) {
     }
     console.log(data);
     response.writeHead(200, {'content-Type': 'text/html'});
     response.write(data);
     response.end();
});
 }



}).listen(8080);
