var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PremixesTypesSchema = new Schema({
	'Completed' : Number,
	'name' : String,
	'Reserved' : Number,
	'Running' : Number,
	'sku' : String
});

module.exports = mongoose.model('PremixesTypes', PremixesTypesSchema);
