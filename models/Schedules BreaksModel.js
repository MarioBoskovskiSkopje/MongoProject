var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SchedulesBreaksSchema = new Schema({
  breakTimes: String,
  shiftTimes: String,
  status: Boolean,
  day: String
});

module.exports = mongoose.model("Schedules Breaks", SchedulesBreaksSchema);
