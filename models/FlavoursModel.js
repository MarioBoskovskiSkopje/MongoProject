var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FlavoursSchema = new Schema({
	'Completed' : Number,
	'name' : String,
	'Reserved' : Number,
	'Running' : Number,
	'sku' : String,
	'Type' : String
});

module.exports = mongoose.model('Flavours', FlavoursSchema);
