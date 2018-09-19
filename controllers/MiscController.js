var MiscModel = require("../models/MiscModel.js");

/**
 * MiscController.js
 *
 * @description :: Server-side logic for managing Miscs.
 */
module.exports = {
  /**
   * MiscController.list()
   */
  list: function(req, res) {
    MiscModel.find(function(err, Miscs) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Misc.",
          error: err
        });
      }
      return res.json(Miscs);
    });
  },

  /**
   * MiscController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    MiscModel.findOne({ _id: id }, function(err, Misc) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Misc.",
          error: err
        });
      }
      if (!Misc) {
        return res.status(404).json({
          message: "No such Misc"
        });
      }
      return res.json(Misc);
    });
  },

  /**
   * MiscController.create()
   */
  create: function(req, res) {
    var Misc = new MiscModel({
      Completed: req.body.Completed,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku
    });

    Misc.save(function(err, Misc) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Misc",
          error: err
        });
      }
      return res.status(201).json(Misc);
    });
  },

  /**
   * MiscController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    MiscModel.findOne({ _id: id }, function(err, Misc) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Misc",
          error: err
        });
      }
      if (!Misc) {
        return res.status(404).json({
          message: "No such Misc"
        });
      }

      Misc.Completed = req.body.Completed ? req.body.Completed : Misc.Completed;
      Misc.name = req.body.name ? req.body.name : Misc.name;
      Misc.Reserved = req.body.Reserved ? req.body.Reserved : Misc.Reserved;
      Misc.Running = req.body.Running ? req.body.Running : Misc.Running;
      Misc.sku = req.body.sku ? req.body.sku : Misc.sku;

      Misc.save(function(err, Misc) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Misc.",
            error: err
          });
        }

        return res.json(Misc);
      });
    });
  },

  /**
   * MiscController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    MiscModel.findByIdAndRemove(id, function(err, Misc) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Misc.",
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
