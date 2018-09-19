var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductionSchema = new Schema({
  Completed: String,
  CompletionDate: Number,
  Location: String,
  backtubed: Number,
  batch: String,
  botSKU: String,
  botlabel: String,
  botlabelsku: String,
  bottles: Number,
  boxname: { sku: String, name: String },
  brand: String,
  brandSKU: String,
  branded: Number,
  bsize: String,
  btype: String,
  coloredpremix: Number,
  customer: String,
  customerSKU: String,
  fill: Number,
  final_status: String,
  flavour: { name: String, sku: String },
  labeling_status: String,
  lid: String,
  lidSKU: String,
  mixbatch: String,
  mixing: Number,
  mixing_status: String,
  movedToNext: String,
  orderID: String,
  orderdate: Number,
  packagingType: { name: String, sku: String },
  packaging_status: String,
  packlabel: String,
  packlabelsku: String,
  premixed: Number,
  printing_status: String,
  priority: Number,
  prodDate: Number,
  productcode: String,
  productdescription: String,
  recipe: { name: String, id: String },
  row: Number,
  starttime: Number,
  unbranded: Number,
  userset: Boolean
});

module.exports = mongoose.model("Production", ProductionSchema);
