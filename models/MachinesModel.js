var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MachinesSchema = new Schema({
	'fillLevels' : String,
	'name' : String,
	'sku' : String,
	'status' : Boolean
});

module.exports = mongoose.model('Machines', MachinesSchema);
