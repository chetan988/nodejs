var print_1_100 = [print_1_25,
				   print_25_50,
				   print_50_75,
				   print_75_100];

for(var task in print_1_100) 
	print_1_100[task]();

function print_1_25() {
	setTimeout(function(){
		for (var i = 1; i <25; i++) {
			console.log("i : " + i);
		}
	},1000);
}

function print_25_50() {
	setTimeout(function() {
		for (var i = 25; i <50; i++) {
			console.log("i : " + i);
		}
	},100);
}

function print_50_75() {
	setTimeout(function(){
		for (var i = 50; i <75; i++) {
			console.log("i : " + i);
		}
	},10);
}

function print_75_100() {
	setTimeout(function(){
		for (var i = 75; i <=100; i++) {
			console.log("i : " + i);
		}
	},10);
}
