var net = require('net');
var event = require('events');
var channel = new event.EventEmitter();
channel.clients = {};
channel.subscription = {};

channel.on('join',function(id,client){
	console.log("join event receive");
	this.clients[id] = client;
	console.log(this.clients[id]);
	this.subscription[id] = function(senderid,message) {
		console.log(sender);
		if(id != senderid) {
			this.clients[id].write(message);
		}
	}
	this.on('broadcast',this.subscription[id]);
});

net.createServer(function(socket){
	var id = socket.remoteAddress+ ":" + socket.remotePort;
	socket.on('connect',function() {
		channel.emit('join',id,socket);
	});
	socket.on('data',function(data){
		channel.emit('broadcast',id,data);
	});
}).listen(8080);