
function roundUoToTwo(val) {
	return Math.round((val *100)/100);
}
exchangerate =60;

module.exports = {
"INR_USD" : function(val) {
	
	return roundUoToTwo(val * exchangerate);
},

"USD_INR" : function(val) {
	
	return roundUoToTwo(val / exchangerate);
}

}

//module.exports = Currency_new;