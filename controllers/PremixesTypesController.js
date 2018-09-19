var PremixesTypesModel = require("../models/PremixesTypesModel.js");

/**
 * PremixesTypesController.js
 *
 * @description :: Server-side logic for managing PremixesTypess.
 */
module.exports = {
  /**
   * PremixesTypesController.list()
   */
  list: function(req, res) {
    PremixesTypesModel.find(function(err, PremixesTypess) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting PremixesTypes.",
          error: err
        });
      }
      return res.json(PremixesTypess);
    });
  },

  /**
   * PremixesTypesController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    PremixesTypesModel.findOne({ _id: id }, function(err, PremixesTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting PremixesTypes.",
          error: err
        });
      }
      if (!PremixesTypes) {
        return res.status(404).json({
          message: "No such PremixesTypes"
        });
      }
      return res.json(PremixesTypes);
    });
  },

  /**
   * PremixesTypesController.create()
   */
  create: function(req, res) {
    var PremixesTypes = new PremixesTypesModel({
      Completed: req.body.Completed,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku
    });

    PremixesTypes.save(function(err, PremixesTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating PremixesTypes",
          error: err
        });
      }
      return res.status(201).json(PremixesTypes);
    });
  },

  /**
   * PremixesTypesController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    PremixesTypesModel.findOne({ _id: id }, function(err, PremixesTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting PremixesTypes",
          error: err
        });
      }
      if (!PremixesTypes) {
        return res.status(404).json({
          message: "No such PremixesTypes"
        });
      }

      PremixesTypes.Completed = req.body.Completed
        ? req.body.Completed
        : PremixesTypes.Completed;
      PremixesTypes.name = req.body.name ? req.body.name : PremixesTypes.name;
      PremixesTypes.Reserved = req.body.Reserved
        ? req.body.Reserved
        : PremixesTypes.Reserved;
      PremixesTypes.Running = req.body.Running
        ? req.body.Running
        : PremixesTypes.Running;
      PremixesTypes.sku = req.body.sku ? req.body.sku : PremixesTypes.sku;

      PremixesTypes.save(function(err, PremixesTypes) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating PremixesTypes.",
            error: err
          });
        }

        return res.json(PremixesTypes);
      });
    });
  },

  /**
   * PremixesTypesController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    PremixesTypesModel.findByIdAndRemove(id, function(err, PremixesTypes) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the PremixesTypes.",
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
