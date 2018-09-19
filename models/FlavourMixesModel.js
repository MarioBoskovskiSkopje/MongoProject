var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FlavourMixesSchema = new Schema({
  name: String,
  sku: String,
  flavours: [
    {
      name: String,
      sku: String,
      val: String
    }
  ]
});

module.exports = mongoose.model("FlavourMixes", FlavourMixesSchema);
