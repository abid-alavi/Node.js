/*
var http = require("http");

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE "html">");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(80);
console.log("Server is listening");
*/

/*
var http1 = require('http');

http1.createServer(function(req,res){
	
	console.log("Req Hit from Browser");

	res.writeHead(200, {'Content-Type': 'text/html'});	
	
	res.write("<html>")
	res.write("<body>")
	res.write("<h1>Hello World</h1>")
	res.write("</body>")
	res.write("</html>")
	res.end();
	
}).listen(3000);
*/

var http = require('http');
var fs = require('fs');

var abc = 1;


http.createServer(function(req,res){
	
	console.log("req.url");
	console.log(req.url);
	
	
	if(req.url == "/jquery.js"){		
		fs.readFile('./jquery.js', function (er, data) {
			console.log(er);
			//console.log(data.toString());
			res.end(data.toString());
		})
	}
	else if(req.url == "/"){
		
		fs.readFile('./index.html', function (er, data) {
			console.log(er);
			//console.log(data.toString());
			res.end(data.toString());
		})
		
		
		
		
		
		//var html = "<html>" + "<body>" + "<h1>Home</h1>" + "</body>" + "</html>";
		
		/*res.write("<html>")
		res.write("<body>")
		res.write("<h1>Home</h1>")
		res.write("</body>")
		res.write("</html>")*/
		//res.end(html);
	} else if(req.url == "/home"){
		
		
		
		res.write("<html>")
		res.write("<body>")
		res.write("<h1>Home</h1>")
		res.write("</body>")
		res.write("</html>")
		res.end();
	} else if(req.url == "/contact"){
		res.write("<html>")
		res.write("<body>")
		res.write("<h1 style='background:red;'>Contact</h1>")
		res.write("<input type='text' name='subject' />")
		res.write("</body>")
		res.write("</html>")
		res.end();
	} else {
		res.end("Invalid Page");
	}
	
	/*
	abc++;	
	res.writeHead(400, {'Content-Type': 'text/html'});	
	
	res.write("<html>")
	res.write("<body>")
	res.write("<script>var a = 1;</script>")
	res.write("<h1>Hello World</h1>")
	res.write("<h1>" + abc + "</h1>")
	res.write("</body>")
	res.write("</html>")
	res.end();
	*/
	
}).listen(3000);

//unknownFN();

/*
http.createServer(function (req, res) {
  
}).listen(1337, '127.0.0.1');
*/