var PackagesModel = require("../models/PackagesModel.js");

/**
 * PackagesController.js
 *
 * @description :: Server-side logic for managing Packagess.
 */
module.exports = {
  /**
   * PackagesController.list()
   */
  list: function(req, res) {
    PackagesModel.find(function(err, Packagess) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Packages.",
          error: err
        });
      }
      return res.json(Packagess);
    });
  },

  /**
   * PackagesController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Packages] = id;
    PackagesModel.findOne(obj, function(err, Packages) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Packages.",
          error: err
        });
      }
      if (!Packages) {
        return res.status(404).json({
          message: "No such Packages"
        });
      }
      return res.json(Packages);
    });
  },

  /**
   * PackagesController.create()
   */
  create: function(req, res) {
    var Packages = new PackagesModel({
      botperPack: req.body.botperPack,
      Completed: req.body.Completed,
      name: req.body.name,
      Reserved: req.body.Reserved,
      Running: req.body.Running,
      sku: req.body.sku
    });

    Packages.save(function(err, Packages) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Packages",
          error: err
        });
      }
      return res.status(201).json(Packages);
    });
  },

  /**
   * PackagesController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Packages] = id;
    PackagesModel.findOne(obj, function(err, Packages) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Packages",
          error: err
        });
      }
      if (!Packages) {
        return res.status(404).json({
          message: "No such Packages"
        });
      }

      Packages.botperPack = req.body.botperPack
        ? req.body.botperPack
        : Packages.botperPack;
      Packages.Completed = req.body.Completed
        ? req.body.Completed
        : Packages.Completed;
      Packages.name = req.body.name ? req.body.name : Packages.name;
      Packages.Reserved = req.body.Reserved
        ? req.body.Reserved
        : Packages.Reserved;
      Packages.Running = req.body.Running ? req.body.Running : Packages.Running;
      Packages.sku = req.body.sku ? req.body.sku : Packages.sku;

      Packages.save(function(err, Packages) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Packages.",
            error: err
          });
        }

        return res.json(Packages);
      });
    });
  },

  /**
   * PackagesController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Packages] = id;
    PackagesModel.findOneAndRemove(obj, function(err, Packages) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Packages.",
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
