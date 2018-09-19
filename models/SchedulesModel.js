var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SchedulesSchema = new Schema({
  Fields: [
    {
      Batches: [
        {
          batch: String,
          bottles: Number,
          machine_ID: String,
          schedule_ID: String,
          slots: String,
          timeTotal: NUmber
        }
      ],
      Machines: [
        {
          id: String,
          times: [
            {
              id: String,
              Times: Number
            }
          ]
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Schedules", SchedulesSchema);
