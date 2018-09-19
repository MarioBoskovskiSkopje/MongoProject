var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BrandsSchema = new Schema({
	'name' : String,
	'sku' : String
});

module.exports = mongoose.model('Brands', BrandsSchema);
