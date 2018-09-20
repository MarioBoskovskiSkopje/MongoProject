var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LogSchema = new Schema({
  id: String,
  action: String,
  batch: Number,
  data: String,
  msg: String,
  page: String,
  status: Boolean,
  time: String,
  type: String,
  user: String
});

module.exports = mongoose.model("Log", LogSchema);
