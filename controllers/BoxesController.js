var BoxesModel = require("../models/BoxesModel.js");

/**
 * BoxesController.js
 *
 * @description :: Server-side logic for managing Boxess.
 */
module.exports = {
  /**
   * BoxesController.list()
   */
  list: function(req, res) {
    BoxesModel.find(function(err, Boxess) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Boxes.",
          error: err
        });
      }
      return res.json(Boxess);
    });
  },

  /**
   * BoxesController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Boxes] = id;

    BoxesModel.findOne(obj, function(err, Boxes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Boxes.",
          error: err
        });
      }
      if (!Boxes) {
        return res.status(404).json({
          message: "No such Boxes"
        });
      }
      return res.json(Boxes);
    });
  },

  /**
   * BoxesController.create()
   */
  create: function(req, res) {
    var Boxes = new BoxesModel({
      Completed: req.body.Completed,
      divTubesForBox: req.body.divTubesForBox,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku,
      shortname: req.body.shortname
    });

    Boxes.save(function(err, Boxes) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Boxes",
          error: err
        });
      }
      return res.status(201).json(Boxes);
    });
  },

  /**
   * BoxesController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Boxes] = id;

    BoxesModel.findOne(obj, function(err, Boxes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Boxes",
          error: err
        });
      }
      if (!Boxes) {
        return res.status(404).json({
          message: "No such Boxes"
        });
      }

      Boxes.Completed = req.body.Completed
        ? req.body.Completed
        : Boxes.Completed;
      Boxes.divTubesForBox = req.body.divTubesForBox
        ? req.body.divTubesForBox
        : Boxes.divTubesForBox;
      Boxes.name = req.body.name ? req.body.name : Boxes.name;
      Boxes.Reserved = req.body.Reserved ? req.body.Reserved : Boxes.Reserved;
      Boxes.Running = req.body.Running ? req.body.Running : Boxes.Running;
      Boxes.sku = req.body.sku ? req.body.sku : Boxes.sku;
      Boxes.shortname = req.body.shortname
        ? req.body.shortname
        : Boxes.shortname;

      Boxes.save(function(err, Boxes) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Boxes.",
            error: err
          });
        }

        return res.json(Boxes);
      });
    });
  },

  /**
   * BoxesController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Boxes] = id;

    BoxesModel.findOneAndRemove(obj, function(err, Boxes) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Boxes.",
          error: err
        });
      }
      return res.status(204).json();
    });
  },
  find: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Boxes] = id;
    BoxesModel.findOne(obj, function(err, Boxes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Boxes.",
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
