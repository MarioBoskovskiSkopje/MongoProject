var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PackagingSchema = new Schema({
  Completed: String,
  CompletionDate: Number,
  Location: String,
  PackagingCompleted: String,
  ProductionCompleted: String,
  backtubed: Number,
  batch: String,
  botSKU: String,
  botlabel: String,
  botlabelsku: String,
  bottles: Number,
  boxname: {
    name: String,
    sku: String
  },
  brand: String,
  brandSKU: String,
  branded: Number,
  bsize: String,
  btype: String,
  customer: String,
  customerSKU: String,
  fill: Number,
  final_status: String,
  flavour: { name: String, sku: String },
  labeling_status: String,
  lid: String,
  lidSKU: String,
  mixing: Number,
  mixing_status: String,
  movedtoNext: String,
  orderID: String,
  orderdate: Number,
  packagingType: { name: String, sku: String },
  packaging_status: String,
  packlabel: String,
  packlabelsku: String,
  premixed: Number,
  printing_status: String,
  productcode: String,
  productdescription: String,
  recipe: {
    name: String,
    id: String
  },
  row: Number,
  starttime: Number,
  unbranded: Number,
  userset: Boolean
});

module.exports = mongoose.model("Packaging", PackagingSchema);
