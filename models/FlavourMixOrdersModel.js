var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FlavourMixOrdersSchema = new Schema({
  batch: String,
  final_status: String,
  flavourmix: { name: String, sku: String },
  movedtoNext: String,
  orderdate: Number,
  row: Number,
  stocking: Number
});

module.exports = mongoose.model("FlavourMixOrders", FlavourMixOrdersSchema);
