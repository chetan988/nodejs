var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

	res.writeHead(200,{"content-type":"text/html"});


	function error404(err) {
		res.status = 404;
		res.end("Error - 404 : Something went wrong "+ err);
	}

	// NOW READ THE JSON TO GET LATEST CONTENT 
	fs.readFile('./latestcontent.json',function(err,data){
		if(err) {
			error404(err);
		} else {

			// read the html and add the content
			var json_content = JSON.parse(data.toString());
			fs.readFile('./index.html',function(err,data){
				if(err) {
					res.status = 404;
					res.end("Error - 404 : Something went wrong "+ err);
				} else {

					var html = data.toString();
					html = html.replace("%",json_content.join('<li></li>'));
					res.end(html);
				}
			});

		}
	});
}).listen(9000);