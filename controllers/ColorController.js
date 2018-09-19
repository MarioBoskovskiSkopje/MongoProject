var ColorModel = require("../models/ColorModel.js");

/**
 * ColorController.js
 *
 * @description :: Server-side logic for managing Colors.
 */
module.exports = {
  /**
   * ColorController.list()
   */
  list: function(req, res) {
    ColorModel.find(function(err, Colors) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Color.",
          error: err
        });
      }
      return res.json(Colors);
    });
  },

  /**
   * ColorController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    ColorModel.findOne({ _id: id }, function(err, Color) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Color.",
          error: err
        });
      }
      if (!Color) {
        return res.status(404).json({
          message: "No such Color"
        });
      }
      return res.json(Color);
    });
  },

  /**
   * ColorController.create()
   */
  create: function(req, res) {
    var Color = new ColorModel({
      Completed: req.body.Completed,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku,
      shortname: req.body.shortname
    });

    Color.save(function(err, Color) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Color",
          error: err
        });
      }
      return res.status(201).json(Color);
    });
  },

  /**
   * ColorController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    ColorModel.findOne({ _id: id }, function(err, Color) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Color",
          error: err
        });
      }
      if (!Color) {
        return res.status(404).json({
          message: "No such Color"
        });
      }

      Color.Completed = req.body.Completed
        ? req.body.Completed
        : Color.Completed;
      Color.name = req.body.name ? req.body.name : Color.name;
      Color.Reserved = req.body.Reserved ? req.body.Reserved : Color.Reserved;
      Color.Running = req.body.Running ? req.body.Running : Color.Running;
      Color.sku = req.body.sku ? req.body.sku : Color.sku;
      Color.shortname = req.body.shortname
        ? req.body.shortname
        : Color.shortname;

      Color.save(function(err, Color) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Color.",
            error: err
          });
        }

        return res.json(Color);
      });
    });
  },

  /**
   * ColorController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    ColorModel.findByIdAndRemove(id, function(err, Color) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Color.",
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
