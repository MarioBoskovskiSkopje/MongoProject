var LidsModel = require("../models/LidsModel.js");

/**
 * LidsController.js
 *
 * @description :: Server-side logic for managing Lidss.
 */
module.exports = {
  /**
   * LidsController.list()
   */
  list: function(req, res) {
    LidsModel.find(function(err, Lidss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Lids.",
          error: err
        });
      }
      return res.json(Lidss);
    });
  },

  /**
   * LidsController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    LidsModel.findOne({ _id: id }, function(err, Lids) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Lids.",
          error: err
        });
      }
      if (!Lids) {
        return res.status(404).json({
          message: "No such Lids"
        });
      }
      return res.json(Lids);
    });
  },

  /**
   * LidsController.create()
   */
  create: function(req, res) {
    var Lids = new LidsModel({
      Completed: req.body.Completed,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku
    });

    Lids.save(function(err, Lids) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Lids",
          error: err
        });
      }
      return res.status(201).json(Lids);
    });
  },

  /**
   * LidsController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    LidsModel.findOne({ _id: id }, function(err, Lids) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Lids",
          error: err
        });
      }
      if (!Lids) {
        return res.status(404).json({
          message: "No such Lids"
        });
      }

      Lids.Completed = req.body.Completed ? req.body.Completed : Lids.Completed;
      Lids.name = req.body.name ? req.body.name : Lids.name;
      Lids.Reserved = req.body.Reserved ? req.body.Reserved : Lids.Reserved;
      Lids.Running = req.body.Running ? req.body.Running : Lids.Running;
      Lids.sku = req.body.sku ? req.body.sku : Lids.sku;

      Lids.save(function(err, Lids) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Lids.",
            error: err
          });
        }

        return res.json(Lids);
      });
    });
  },

  /**
   * LidsController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    LidsModel.findByIdAndRemove(id, function(err, Lids) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Lids.",
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
