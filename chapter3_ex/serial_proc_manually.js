var print_1_100 = [print_1_25,
				   print_25_50,
				   print_50_75,
				   print_75_100];

function next() {
	current = print_1_100.shift();
	if(current != undefined)
		current();	// execute the current function
}

next(); // call the next to start the serial proc

function print_1_25() {
	for (var i = 1; i <25; i++) {
		console.log("i : " + i);
	}
	next(); // call to process the next function
}

function print_25_50() {
	for (var i = 25; i <50; i++) {
		console.log("i : " + i);
	}
	next(); // call to process the next function	
}

function print_50_75() {
	for (var i = 50; i <75; i++) {
		console.log("i : " + i);
	}
	next(); // call to process the next function
}

function print_75_100() {
	for (var i = 75; i <=100; i++) {
		console.log("i : " + i);
	}
	next(); // call to process the next function	
}
