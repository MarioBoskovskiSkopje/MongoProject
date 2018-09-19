var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MixingSchema = new Schema({
  AGrecipe: Number,
  AGval: Number,
  CBDrecipe: Number,
  CBDvalue: Number,
  Completed: String,
  CompletionDate: Number,
  Location: String,
  MCTrecipe: Number,
  MCTval: Number,
  Nico: Number,
  Nicotrecipe: Number,
  Nicotrecipesalts: Number,
  Notes: String,
  PGrecipe: Number,
  PGval: Number,
  QTY: Number,
  VGrecipe: Number,
  VGval: String,
  backtubed: Number,
  batch: String,
  branded: Number,
  cbd: Number,
  customer: String,
  final_status: String,
  flavour: {
    name: String,
    sku: String
  },
  flavrecipe: Number,
  flavvalue: String,
  haspremix: Boolean,
  labeling_status: String,
  mixing: Number,
  mixing_status: String,
  movedtoNext: String,
  nic: Number,
  nicsalts: Number,
  orderID: String,
  orderdate: Number,
  packaging_status: String,
  premixed: Number,
  printing_status: String,
  productcode: String,
  productdescription: String,
  recipe: {
    AGrec: Number,
    cbdrec: Number,
    Flavrec: Number,
    id: Number,
    MCTrecipe: Number,
    name: String,
    Nicorec: Number,
    pg: Number,
    PGrec: Number,
    strength: Number,
    vg: Number,
    VGrec: Number,
    Color: {
      name: String,
      sku: String,
      val: Number
    }
  },

  row: Number,
  split: Number,
  starttime: Number,
  unbranded: Number,
  userset: Boolean
});

module.exports = mongoose.model("Mixing", MixingSchema);
