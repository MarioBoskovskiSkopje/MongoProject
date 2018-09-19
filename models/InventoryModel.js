var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var InventorySchema = new Schema({
	'addedtoQTY' : String,
	'delivdate' : String,
	'desc' : String,
	'eta' : Number,
	'key' : String,
	'name' : String,
	'note' : String,
	'orderdate' : Number,
	'page' : String,
	'paiddate' : String,
	'quantity' : Number,
	'row' : Number,
	'sku' : String
});

module.exports = mongoose.model('Inventory', InventorySchema);
