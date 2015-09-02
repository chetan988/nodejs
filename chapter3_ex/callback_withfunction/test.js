var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	
	res.writeHead(200,{"content-type": "text/html"});
	createHtmlPage(req,res);
}).listen(9000);

function createHtmlPage(req,res) {
	fs.readFile('./latestcontent.json',function(err,data){

		if(err) {
			return error404(err,res);
		} else {
			getHtml(JSON.parse(data.toString()),res);
		}
	});
}

function getHtml(json_content,res) {
	fs.readFile('./index.html',function(err,data){
		if(err) {
			return error404(err,res);
		}
		else {
			data = data.toString().replace('%',json_content.join('<li></li>'));
			res.end(data);
		}
	});
}

function error404(err,res) {
		res.status = 404;
		res.end("Error - 404 : Something went wrong "+ err);
}