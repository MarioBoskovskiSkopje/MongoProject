var LabelsModel = require("../models/LabelsModel.js");

/**
 * LabelsController.js
 *
 * @description :: Server-side logic for managing Labelss.
 */
module.exports = {
  /**
   * LabelsController.list()
   */
  list: function(req, res) {
    LabelsModel.find(function(err, Labelss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Labels.",
          error: err
        });
      }
      return res.json(Labelss);
    });
  },

  /**
   * LabelsController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    LabelsModel.findOne({ _id: id }, function(err, Labels) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Labels.",
          error: err
        });
      }
      if (!Labels) {
        return res.status(404).json({
          message: "No such Labels"
        });
      }
      return res.json(Labels);
    });
  },

  /**
   * LabelsController.create()
   */
  create: function(req, res) {
    var Labels = new LabelsModel({
      Completed: req.body.Completed,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku
    });

    Labels.save(function(err, Labels) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Labels",
          error: err
        });
      }
      return res.status(201).json(Labels);
    });
  },

  /**
   * LabelsController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    LabelsModel.findOne({ _id: id }, function(err, Labels) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Labels",
          error: err
        });
      }
      if (!Labels) {
        return res.status(404).json({
          message: "No such Labels"
        });
      }

      Labels.Completed = req.body.Completed
        ? req.body.Completed
        : Labels.Completed;
      Labels.name = req.body.name ? req.body.name : Labels.name;
      Labels.Reserved = req.body.Reserved ? req.body.Reserved : Labels.Reserved;
      Labels.Running = req.body.Running ? req.body.Running : Labels.Running;
      Labels.sku = req.body.sku ? req.body.sku : Labels.sku;

      Labels.save(function(err, Labels) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Labels.",
            error: err
          });
        }

        return res.json(Labels);
      });
    });
  },

  /**
   * LabelsController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    LabelsModel.findByIdAndRemove(id, function(err, Labels) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Labels.",
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
