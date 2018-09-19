var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LabellingSchema = new Schema({
  backtubed: Number,
  batch: String,
  botlabel: String,
  botlabelsku: String,
  botSKU: String,
  bottles: Number,
  boxname: { sku: String, name: String },
  brand: String,
  branded: Number,
  brandSKU: String,
  bsize: String,
  btype: String,
  Completed: String,
  CompletionDate: Number,
  customer: String,
  customerSKU: String,
  final_status: String,
  flavour: { sku: String, name: String },
  labeling_status: String,
  lid: String,
  lidSKU: String,
  Location: String,
  mixing: Number,
  mixing_status: String,
  movedtoNext: String,
  numLabelsBottles: Number,
  numLabelsTubes: Number,
  orderdate: Number,
  orderID: String,
  packaging_status: String,
  packagingType: String,
  packlabel: String,
  packlabelsku: String,
  ppb: Boolean,
  ppp: Boolean,
  premixed: Number,
  printing_status: String,
  productcode: String,
  productdescription: String,
  ProductionCompleted: String,
  recipe: { id: String, name: String },
  row: Number,
  starttime: Number,
  unbranded: Number,
  userset: Boolean
});

module.exports = mongoose.model("Labelling", LabellingSchema);
