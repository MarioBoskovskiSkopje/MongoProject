var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PackagesSchema = new Schema({
	'botperPack' : Number,
	'Completed' : Number,
	'name' : String,
	'Reserved' : Number,
	'Running' : Number,
	'sku' : String
});

module.exports = mongoose.model('Packages', PackagesSchema);
