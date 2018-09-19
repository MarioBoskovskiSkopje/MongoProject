var TestModel = require("../models/TestModel.js");

module.exports = {
  /**
   * BottleTypesController.list()
   */
  list: function(req, res) {
    TestModel.find(function(err, BottleTypess) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting BottleTypes.",
          error: err
        });
      }
      return res.json(BottleTypess);
    });
  },

  /**
   * BottleTypesController.create()
   */
  create: function(req, res) {
    var BottleTypes = new TestModel({
      name: req.body.name,
      meta: {
        votes: req.body.votes,
        date: req.body.date
      }
    });

    BottleTypes.save(function(err, BottleTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating BottleTypes",
          error: err
        });
      }
      return res.status(201).json(BottleTypes);
    });
  },

  findMeta: function(req, res) {
    TestModel.find({ "meta.date": req.body.date }, function(err, BottleTypess) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting BottleTypes.",
          error: err
        });
      }
      return res.json(BottleTypess);
    });
  },
  addPeople: function(req, res) {
    const { name, people } = req.body;
    TestModel.findOneAndUpdate({ name }, { $push: { people } }, function(
      err,
      succ
    ) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting BottleTypes.",
          error: err
        });
      }
      return res.json(succ);
    });
  },
  findPeople: function(req, res) {
    TestModel.find({ "people.name": req.body.name }, function(
      err,
      BottleTypess
    ) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting BottleTypes.",
          error: err
        });
      }
      return res.json(BottleTypess);
    });
  }
};
