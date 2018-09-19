var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TestModelSchema = new Schema({
  name: String,
  meta: {
    votes: Number,
    date: String
  },
  people: [
    {
      name: String,
      age: Number
    }
  ]
});

module.exports = mongoose.model("TestModel", TestModelSchema);
