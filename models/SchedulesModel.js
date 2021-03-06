var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SchedulesSchema = new Schema({
  id: String,
  Batches: [
    {
      batch: String,
      bottles: Number,
      machine_ID: String,
      schedule_ID: String,
      slots: String,
      timeTotal: Number
    }
  ],
  Machines: [
    {
      sku: String,
      times: [
        {
          id: String,
          Times: Number
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Schedules", SchedulesSchema);
