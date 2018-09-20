var FlavoursModel = require("../models/FlavoursModel.js");

/**
 * FlavoursController.js
 *
 * @description :: Server-side logic for managing Flavourss.
 */
module.exports = {
  /**
   * FlavoursController.list()
   */
  list: function(req, res) {
    FlavoursModel.find(function(err, Flavourss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Flavours.",
          error: err
        });
      }
      return res.json(Flavourss);
    });
  },

  /**
   * FlavoursController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Flavours] = id;
    FlavoursModel.findOne(obj, function(err, Flavours) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Flavours.",
          error: err
        });
      }
      if (!Flavours) {
        return res.status(404).json({
          message: "No such Flavours"
        });
      }
      return res.json(Flavours);
    });
  },

  /**
   * FlavoursController.create()
   */
  create: function(req, res) {
    var Flavours = new FlavoursModel({
      Completed: req.body.Completed,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku,
      Type: req.body.Type
    });

    Flavours.save(function(err, Flavours) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Flavours",
          error: err
        });
      }
      return res.status(201).json(Flavours);
    });
  },

  /**
   * FlavoursController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Flavours] = id;
    FlavoursModel.findOne(obj, function(err, Flavours) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Flavours",
          error: err
        });
      }
      if (!Flavours) {
        return res.status(404).json({
          message: "No such Flavours"
        });
      }

      Flavours.Completed = req.body.Completed
        ? req.body.Completed
        : Flavours.Completed;
      Flavours.name = req.body.name ? req.body.name : Flavours.name;
      Flavours.Reserved = req.body.Reserved
        ? req.body.Reserved
        : Flavours.Reserved;
      Flavours.Running = req.body.Running ? req.body.Running : Flavours.Running;
      Flavours.sku = req.body.sku ? req.body.sku : Flavours.sku;
      Flavours.Type = req.body.Type ? req.body.Type : Flavours.Type;

      Flavours.save(function(err, Flavours) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Flavours.",
            error: err
          });
        }

        return res.json(Flavours);
      });
    });
  },

  /**
   * FlavoursController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Flavours] = id;
    FlavoursModel.findOneAndRemove(obj, function(err, Flavours) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Flavours.",
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
