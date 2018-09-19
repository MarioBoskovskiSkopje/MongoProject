var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MixingTeamSchema = new Schema({
  batch: String,
  Batches: [
    {
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
      VGval: Number,
      batch: String,
      customer: String,
      dudpremixCode: String,
      flavour: {
        sku: String,
        name: String
      },
      flavrecipe: Number,
      flavvalue: Number,
      forpremix: Number,
      haspremix: Boolean,
      orderID: String,
      orderdate: Number,
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
      starttime: Number
    }
  ],

  CBDvalue: Number,
  Completed: String,
  CompletionDate: Number,
  customer: String,
  flavour: String,
  FLAVOUR: String,
  flavSupplier: String,
  flavvalue: Number,
  Location: String,
  MIXNAME: String,
  movedtoNext: String,
  Nico: Number,
  nicSupplier: String,
  Notes: String,
  orderdate: Number,
  orderID: String,
  pgSupplier: String,
  PGval: Number,
  prodDate: Number,
  QTYTOTAL: Number,
  recipe: String,
  RECIPE: String,
  row: Number,
  starttime: Number,
  userset: Boolean,
  vgSupplier: String,
  VGval: Number
});

module.exports = mongoose.model("MixingTeam", MixingTeamSchema);
