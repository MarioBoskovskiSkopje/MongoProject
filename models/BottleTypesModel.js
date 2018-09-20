var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BottleTypesSchema = new Schema({
  Completed: Number,
  name: String,
  Reserved: Number,
  Running: Number,
  sku: String,
  shortname: String
});

module.exports = mongoose.model("BottleTypes", BottleTypesSchema);
