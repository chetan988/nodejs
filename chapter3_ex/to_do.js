var http = require('http');
var url = require('url');
var list=[];
var server = http.createServer(function  (req,res) {
	
	switch(req.method) {

		case "POST" :
			var list_data='';
			req.setEncoding('utf8');
			req.on('data',function(chunk){
				console.log("data : "+ chunk);
				list_data += chunk;
			})
			req.on('end',function(){
				list.push(list_data);
				console.log("list_data : "+ list_data);
				res.end("OK");
			});

			break;
		case "GET" :

			res.setHeader("content-type",'text/html;charset="utf-8"');
			
			var data = list.map(function(item,i){
				return i + " ) " + item ;
			}).join("\n");
			/*
			for(var i in list) {
				res.write(i + " ) "+ list[i]+ "\n");
			}*/
			res.setHeader("Content-Length",Buffer.byteLength(data));
			res.writeHead(200);
			res.write(data);
			res.end();
			break;
	}
});

server.listen(9000);