var UnbrandedTypesModel = require("../models/UnbrandedTypesModel.js");

/**
 * UnbrandedTypesController.js
 *
 * @description :: Server-side logic for managing UnbrandedTypess.
 */
module.exports = {
  /**
   * UnbrandedTypesController.list()
   */
  list: function(req, res) {
    UnbrandedTypesModel.find(function(err, UnbrandedTypess) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting UnbrandedTypes.",
          error: err
        });
      }
      return res.json(UnbrandedTypess);
    });
  },

  /**
   * UnbrandedTypesController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    UnbrandedTypesModel.findOne({ _id: id }, function(err, UnbrandedTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting UnbrandedTypes.",
          error: err
        });
      }
      if (!UnbrandedTypes) {
        return res.status(404).json({
          message: "No such UnbrandedTypes"
        });
      }
      return res.json(UnbrandedTypes);
    });
  },

  /**
   * UnbrandedTypesController.create()
   */
  create: function(req, res) {
    var UnbrandedTypes = new UnbrandedTypesModel({
      Completed: req.body.Completed,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku,
      Stock: req.body.Stock
    });

    UnbrandedTypes.save(function(err, UnbrandedTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating UnbrandedTypes",
          error: err
        });
      }
      return res.status(201).json(UnbrandedTypes);
    });
  },

  /**
   * UnbrandedTypesController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    UnbrandedTypesModel.findOne({ _id: id }, function(err, UnbrandedTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting UnbrandedTypes",
          error: err
        });
      }
      if (!UnbrandedTypes) {
        return res.status(404).json({
          message: "No such UnbrandedTypes"
        });
      }

      UnbrandedTypes.Completed = req.body.Completed
        ? req.body.Completed
        : UnbrandedTypes.Completed;
      UnbrandedTypes.name = req.body.name ? req.body.name : UnbrandedTypes.name;
      UnbrandedTypes.Reserved = req.body.Reserved
        ? req.body.Reserved
        : UnbrandedTypes.Reserved;
      UnbrandedTypes.Running = req.body.Running
        ? req.body.Running
        : UnbrandedTypes.Running;
      UnbrandedTypes.sku = req.body.sku ? req.body.sku : UnbrandedTypes.sku;
      UnbrandedTypes.Stock = req.body.Stock
        ? req.body.Stock
        : UnbrandedTypes.Stock;

      UnbrandedTypes.save(function(err, UnbrandedTypes) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating UnbrandedTypes.",
            error: err
          });
        }

        return res.json(UnbrandedTypes);
      });
    });
  },

  /**
   * UnbrandedTypesController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    UnbrandedTypesModel.findByIdAndRemove(id, function(err, UnbrandedTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the UnbrandedTypes.",
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
