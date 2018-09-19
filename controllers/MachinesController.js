var MachinesModel = require("../models/MachinesModel.js");

/**
 * MachinesController.js
 *
 * @description :: Server-side logic for managing Machiness.
 */
module.exports = {
  /**
   * MachinesController.list()
   */
  list: function(req, res) {
    MachinesModel.find(function(err, Machiness) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Machines.",
          error: err
        });
      }
      return res.json(Machiness);
    });
  },

  /**
   * MachinesController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    MachinesModel.findOne({ _id: id }, function(err, Machines) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Machines.",
          error: err
        });
      }
      if (!Machines) {
        return res.status(404).json({
          message: "No such Machines"
        });
      }
      return res.json(Machines);
    });
  },

  /**
   * MachinesController.create()
   */
  create: function(req, res) {
    var Machines = new MachinesModel({
      fillLevels: req.body.fillLevels,
      name: req.body.name,
      sku: req.body.sku,
      status: req.body.status
    });

    Machines.save(function(err, Machines) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Machines",
          error: err
        });
      }
      return res.status(201).json(Machines);
    });
  },

  /**
   * MachinesController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    MachinesModel.findOne({ _id: id }, function(err, Machines) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Machines",
          error: err
        });
      }
      if (!Machines) {
        return res.status(404).json({
          message: "No such Machines"
        });
      }

      Machines.fillLevels = req.body.fillLevels
        ? req.body.fillLevels
        : Machines.fillLevels;
      Machines.name = req.body.name ? req.body.name : Machines.name;
      Machines.sku = req.body.sku ? req.body.sku : Machines.sku;
      Machines.status = req.body.status ? req.body.status : Machines.status;

      Machines.save(function(err, Machines) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Machines.",
            error: err
          });
        }

        return res.json(Machines);
      });
    });
  },

  /**
   * MachinesController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    MachinesModel.findByIdAndRemove(id, function(err, Machines) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Machines.",
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
