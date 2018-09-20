var FillLevelsModel = require("../models/FillLevelsModel.js");

/**
 * FillLevelsController.js
 *
 * @description :: Server-side logic for managing FillLevelss.
 */
module.exports = {
  /**
   * FillLevelsController.list()
   */
  list: function(req, res) {
    FillLevelsModel.find(function(err, FillLevelss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FillLevels.",
          error: err
        });
      }
      return res.json(FillLevelss);
    });
  },

  /**
   * FillLevelsController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.FillLevels] = id;
    FillLevelsModel.findOne(obj, function(err, FillLevels) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FillLevels.",
          error: err
        });
      }
      if (!FillLevels) {
        return res.status(404).json({
          message: "No such FillLevels"
        });
      }
      return res.json(FillLevels);
    });
  },

  /**
   * FillLevelsController.create()
   */
  create: function(req, res) {
    var FillLevels = new FillLevelsModel({
      name: req.body.name,
      time: req.body.time,
      sku: req.body.sku
    });

    FillLevels.save(function(err, FillLevels) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating FillLevels",
          error: err
        });
      }
      return res.status(201).json(FillLevels);
    });
  },

  /**
   * FillLevelsController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.FillLevels] = id;
    FillLevelsModel.findOne(obj, function(err, FillLevels) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FillLevels",
          error: err
        });
      }
      if (!FillLevels) {
        return res.status(404).json({
          message: "No such FillLevels"
        });
      }

      FillLevels.name = req.body.name ? req.body.name : FillLevels.name;
      FillLevels.time = req.body.time ? req.body.time : FillLevels.time;
      FillLevels.sku = req.body.sku ? req.body.sku : FillLevels.sku;

      FillLevels.save(function(err, FillLevels) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating FillLevels.",
            error: err
          });
        }

        return res.json(FillLevels);
      });
    });
  },

  /**
   * FillLevelsController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.FillLevels] = id;
    FillLevelsModel.findOneAndRemove(obj, function(err, FillLevels) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the FillLevels.",
          error: err
        });
      }
      return res.status(204).json();
    });
  },
  find: function(req, res) {
    var sku = req.params.sku;
    BottleTypesModel.findOne({ sku }, function(err, BottleTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting BottleTypes.",
          error: err
        });
      }
      if (!BottleTypes) {
        return res.status(404).json({
          message: "No such BottleTypes"
        });
      }
      return res.json(BottleTypes);
    });
  }
};
