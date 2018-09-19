var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SchedulesReferenceSchema = new Schema({
  date: String,
  entryDate: String,
  id: String,
  name: String,
  type: String,
  Batches: [
    {
      batch: String,
      bottles: Number,
      machine_ID: String,
      schedule_ID: String,
      slots: Number,
      timeTotal: Number
    }
  ]
});

module.exports = mongoose.model(
  "Schedules Reference",
  SchedulesReferenceSchema
);
