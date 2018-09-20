var BrandedTypesModel = require("../models/BrandedTypesModel.js");

/**
 * BrandedTypesController.js
 *
 * @description :: Server-side logic for managing BrandedTypess.
 */
module.exports = {
  /**
   * BrandedTypesController.list()
   */
  list: function(req, res) {
    BrandedTypesModel.find(function(err, BrandedTypess) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting BrandedTypes.",
          error: err
        });
      }
      return res.json(BrandedTypess);
    });
  },

  /**
   * BrandedTypesController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.BrandedTypes] = id;
    BrandedTypesModel.findOne(obj, function(err, BrandedTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting BrandedTypes.",
          error: err
        });
      }
      if (!BrandedTypes) {
        return res.status(404).json({
          message: "No such BrandedTypes"
        });
      }
      return res.json(BrandedTypes);
    });
  },

  /**
   * BrandedTypesController.create()
   */
  create: function(req, res) {
    var BrandedTypes = new BrandedTypesModel({
      Completed: req.body.Completed,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku,
      shortname: req.body.shortname
    });

    BrandedTypes.save(function(err, BrandedTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating BrandedTypes",
          error: err
        });
      }
      return res.status(201).json(BrandedTypes);
    });
  },

  /**
   * BrandedTypesController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.BrandedTypes] = id;
    BrandedTypesModel.findOne(obj, function(err, BrandedTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting BrandedTypes",
          error: err
        });
      }
      if (!BrandedTypes) {
        return res.status(404).json({
          message: "No such BrandedTypes"
        });
      }

      BrandedTypes.Completed = req.body.Completed
        ? req.body.Completed
        : BrandedTypes.Completed;
      BrandedTypes.name = req.body.name ? req.body.name : BrandedTypes.name;
      BrandedTypes.Reserved = req.body.Reserved
        ? req.body.Reserved
        : BrandedTypes.Reserved;
      BrandedTypes.Running = req.body.Running
        ? req.body.Running
        : BrandedTypes.Running;
      BrandedTypes.sku = req.body.sku ? req.body.sku : BrandedTypes.sku;
      BrandedTypes.shortname = req.body.shortname
        ? req.body.shortname
        : BrandedTypes.shortname;

      BrandedTypes.save(function(err, BrandedTypes) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating BrandedTypes.",
            error: err
          });
        }

        return res.json(BrandedTypes);
      });
    });
  },

  /**
   * BrandedTypesController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.BrandedTypes] = id;
    BrandedTypesModel.findOneAndRemove(obj, function(err, BrandedTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the BrandedTypes.",
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
