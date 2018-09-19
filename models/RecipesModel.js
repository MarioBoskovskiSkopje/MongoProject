var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var RecipesSchema = new Schema({
	'AGrec' : Number,
	'cbdrec' : Number,
	'Flavrec' : Number,
	'id' : Number,
	'MCTrecipe' : Number,
	'name' : String,
	'Nicorec' : Number,
	'pg' : Number,
	'PGrec' : Number,
	'strength' : Number,
	'vg' : Number,
	'VGrec' : Number
});

module.exports = mongoose.model('Recipes', RecipesSchema);
