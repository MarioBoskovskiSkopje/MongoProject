var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var highestBatchSchema = new Schema({
	'batch' : Number
});

module.exports = mongoose.model('highestBatch', highestBatchSchema);
