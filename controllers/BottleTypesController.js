var BottleTypesModel = require("../models/BottleTypesModel.js");
var idenifiers = require("../identifiers.js");
/**
 * BottleTypesController.js
 *
 * @description :: Server-side logic for managing BottleTypess.
 */
module.exports = {
  /**
   * BottleTypesController.list()
   */
  list: function(req, res) {
    BottleTypesModel.find(function(err, BottleTypess) {
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
   * BottleTypesController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.BottleTypes] = id;

    BottleTypesModel.findOne(obj, function(err, BottleTypes) {
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
  },

  /**
   * BottleTypesController.create()
   */
  create: function(req, res) {
    var obj = {};
    obj[idenifiers.BottleTypes] = req.body[idenifiers.BottleTypes];
    BottleTypesModel.findOne(obj, (err, BottleTypesRes) => {
      if (err) {
        return res.status(500).json({
          message: "Error when creating BottleTypes",
          error: err
        });
      }
      if (BottleTypesRes == null) {
        var BottleTypes = new BottleTypesModel({
          Completed: req.body.Completed,
          name: req.body.name,
          Reserved: req.body.Reserved,
          Running: req.body.Running,
          sku: req.body.sku
        });
        BottleTypes.save();
        return res.status(201).send("created");
      }
      (BottleTypesRes.name = req.body.name
        ? req.body.name
        : BottleTypesRes.name),
        (BottleTypesRes.Reserved = req.body.Reserved
          ? req.body.Reserved
          : BottleTypesRes.Reserved),
        (BottleTypesRes.Running = req.body.Running
          ? req.body.Running
          : BottleTypesRes.Running),
        (BottleTypesRes.Completed = req.body.Completed
          ? req.body.Completed
          : BottleTypesRes.Running),
        (BottleTypesRes.sku = req.body.sku ? req.body.sku : BottleTypesRes.sku);

      BottleTypesRes.save();
      return res.status(201).send("updated");
    });
  },

  /**
   * BottleTypesController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.BottleTypes] = id;
    BottleTypesModel.findOne(obj, function(err, BottleTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting BottleTypes",
          error: err
        });
      }
      if (!BottleTypes) {
        return res.status(404).json({
          message: "No such BottleTypes"
        });
      }

      BottleTypes.Completed = req.body.Completed
        ? req.body.Completed
        : BottleTypes.Completed;
      BottleTypes.name = req.body.name ? req.body.name : BottleTypes.name;
      BottleTypes.Reserved = req.body.Reserved
        ? req.body.Reserved
        : BottleTypes.Reserved;
      BottleTypes.Running = req.body.Running
        ? req.body.Running
        : BottleTypes.Running;
      BottleTypes.sku = req.body.sku ? req.body.sku : BottleTypes.sku;
      BottleTypes.shortname = req.body.shortname
        ? req.body.shortname
        : BottleTypes.shortname;

      BottleTypes.save(function(err, BottleTypes) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating BottleTypes.",
            error: err
          });
        }

        return res.json(BottleTypes);
      });
    });
  },

  /**
   * BottleTypesController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.BottleTypes] = id;
    BottleTypesModel.findOneAndRemove(obj, function(err, BottleTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the BottleTypes.",
          error: err
        });
      }
      return res.status(204).json();
    });
  },

  find: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.BottleTypes] = id;
    BottleTypesModel.findOne(obj, function(err, BottleTypes) {
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
