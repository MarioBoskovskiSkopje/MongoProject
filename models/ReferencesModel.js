var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReferencesSchema = new Schema({
  NIB: String,
  barcode: Number,
  botSKY: String,
  botlabel: String,
  botlabelsku: String,
  boxname: Object,
  brand: String,
  brandSKU: String,
  btype: String,
  descr: String,
  ecid: String,
  flavour: {
    sku: String,
    name: String
  },
  lid: String,
  lidSKU: String,
  linkedBB: String,
  packagingType: {
    sky: String,
    name: String
  },
  packlabel: String,
  packlabelsku: String,
  ppbotlabel: String,
  ppbotlabelsku: String,
  pppacklabel: String,
  pppacklabelsku: String,
  premixSKU: String,
  premixSKUColored: String,
  premixdescr: String,
  premixdescrColored: String,
  prod: String,
  productcode: String,
  productdescription: String,
  recipe: {
    id: String,
    name: String
  },
  unbrandSKU: String,
  unbranddescr: String
});

module.exports = mongoose.model("References", ReferencesSchema);
