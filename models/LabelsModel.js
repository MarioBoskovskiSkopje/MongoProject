var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var LabelsSchema = new Schema({
	'Completed' : Number,
	'name' : String,
	'Reserved' : Number,
	'Running' : Number,
	'sku' : String
});

module.exports = mongoose.model('Labels', LabelsSchema);
