var exchangerate = JSON.parse(require('fs').readFileSync(__dirname +'/exchangerate.json'));

function roundUoToTwo(val) {
	return Math.round((val *100)/100);
}

exports.INR_USD = function(val) {
	var inr_usd_er = exchangerate.inrTousd;
	return roundUoToTwo(val * inr_usd_er);
} 

exports.USD_INR = function(val) {
	
	var inr_usd_er = exchangerate.inrTousd;
	return roundUoToTwo(val / inr_usd_er);
}