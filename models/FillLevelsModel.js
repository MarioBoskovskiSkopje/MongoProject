var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FillLevelsSchema = new Schema({
	'name' : String,
	'time' : Number,
	'sku' : String
});

module.exports = mongoose.model('FillLevels', FillLevelsSchema);
