var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CustomersSchema = new Schema({
	'address' : String,
	'name' : String,
	'sku' : String
});

module.exports = mongoose.model('Customers', CustomersSchema);
