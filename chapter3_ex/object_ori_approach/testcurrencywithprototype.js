var currency_wp = require('./currency_with_prototype.js');
var cur = new currency_wp(64);
console.log("inr to usd = " +cur.ustoinr(50));
console.log("usd to inr = " +cur.inrtous(5000));
