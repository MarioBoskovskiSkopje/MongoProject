var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MixingSchema = new Schema({
	'movedToNext' : String,
	'starttime' : String
});

module.exports = mongoose.model('Mixing', MixingSchema);
