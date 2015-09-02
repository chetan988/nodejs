var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

function send404(res) {
	res.writeHead(200,{"Content-type" : "text/plain"});
	res.write("Error 404 : resource not found");
	res.end();
}

function loadContent(res,filepath,data) {
	res.writeHead(200,{"Content-type":mime.lookup(path.basename(filepath))});
	res.end(data);
}


function loadPage(res,filepath) {
	
		fs.exists(filepath,function(exists){
			if(exists) {

				fs.readFile(filepath,function(err,data){
					if(err) {
						send404(res);
					}
					else {
						loadContent(res,filepath,data);
					}
				});
			}
			else {
				send404(res);
			}
		});

}

var server = http.createServer(function(req,res){

	var filename = false;
	if(req.url == "/") {
		filename = "../public/index.html";
	}
	else {
		filename = "../public"+req.url;
	}
	loadPage(res,filename);
});
 server.listen(8080);
 console.log("server running at http://localhost:8080");