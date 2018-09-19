var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BoxesSchema = new Schema({
	'Completed' : Number,
	'divTubesForBox' : Number,
	'name' : String,
	'Reserved' : Number,
	'Running' : Number,
	'sku' : String,
	'shortname' : String
});

module.exports = mongoose.model('Boxes', BoxesSchema);
