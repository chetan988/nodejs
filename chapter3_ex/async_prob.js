function asyncprob(callback) {
	setTimeout(callback,200);
}

var color = 'green';

asyncprob(function(){
	console.log("color is : " +color);
});

color ='blue';

// fixing the problem by making color a local variable
color ='green';
(function (color){
	asyncprob(function(){
		console.log("[inside local fun] color is : " +color);	
	});
})(color);

color = 'blue';