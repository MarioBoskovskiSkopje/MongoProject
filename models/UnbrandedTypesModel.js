var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UnbrandedTypesSchema = new Schema({
	'Completed' : Number,
	'name' : String,
	'Reserved' : Number,
	'Running' : Number,
	'sku' : String,
	'Stock' : Number
});

module.exports = mongoose.model('UnbrandedTypes', UnbrandedTypesSchema);
