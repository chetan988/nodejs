var net = require('net');

net.createServer(function(socket){
	socket.on('connect',function(){
		console.log("connected successfully...");
		socket.write("connected successfully...");
	});
	socket.on('end',function(){
		console.log("closing connection....");
		socket.write("closing connection....");
	});
	socket.on('data',function(data){
		console.log("echo: "+ data);
		socket.write("echo: "+ data);
	});
}).listen(8080);
console.log('run : telnet localhost 8080')