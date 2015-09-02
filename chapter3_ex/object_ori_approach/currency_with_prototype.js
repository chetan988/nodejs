var currency_wp = function(exchangerate) {
	this.exchangerate = exchangerate;
}

currency_wp.prototype.ustoinr = function(val) {
	return (val* this.exchangerate);
}

currency_wp.prototype.inrtous = function  (val) {
	return (val/this.exchangerate);
}

module.exports = currency_wp;
