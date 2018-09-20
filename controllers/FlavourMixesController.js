var FlavourMixesModel = require("../models/FlavourMixesModel.js");

/**
 * FlavourMixesController.js
 *
 * @description :: Server-side logic for managing FlavourMixess.
 */
module.exports = {
  /**
   * FlavourMixesController.list()
   */
  list: function(req, res) {
    FlavourMixesModel.find(function(err, FlavourMixess) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FlavourMixes.",
          error: err
        });
      }
      return res.json(FlavourMixess);
    });
  },

  /**
   * FlavourMixesController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.FlavourMixes] = id;
    FlavourMixesModel.findOne(obj, function(err, FlavourMixes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FlavourMixes.",
          error: err
        });
      }
      if (!FlavourMixes) {
        return res.status(404).json({
          message: "No such FlavourMixes"
        });
      }
      return res.json(FlavourMixes);
    });
  },

  /**
   * FlavourMixesController.create()
   */
  create: function(req, res) {
    var FlavourMixes = new FlavourMixesModel({
      name: req.body.name,
      sku: req.body.sku,
      flavours: {
        name: req.body.name,
        sku: req.body.sku,
        val: req.body.val
      }
    });

    FlavourMixes.save(function(err, FlavourMixes) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating FlavourMixes",
          error: err
        });
      }
      return res.status(201).json(FlavourMixes);
    });
  },

  /**
   * FlavourMixesController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.FlavourMixes] = id;
    FlavourMixesModel.findOne(obj, function(err, FlavourMixes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FlavourMixes",
          error: err
        });
      }
      if (!FlavourMixes) {
        return res.status(404).json({
          message: "No such FlavourMixes"
        });
      }

      FlavourMixes.name = req.body.name ? req.body.name : FlavourMixes.name;
      FlavourMixes.sku = req.body.sku ? req.body.sku : FlavourMixes.sku;

      FlavourMixes.save(function(err, FlavourMixes) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating FlavourMixes.",
            error: err
          });
        }

        return res.json(FlavourMixes);
      });
    });
  },

  /**
   * FlavourMixesController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.FlavourMixes] = id;
    FlavourMixesModel.findOneAndRemove(obj, function(err, FlavourMixes) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the FlavourMixes.",
          error: err
        });
      }
      return res.status(204).json();
    });
  },
  addFlavoursMixes: function(req, res) {
    const { name, flavours } = req.body;
    FlavourMixesModel.findOneAndUpdate(
      { name },
      { $push: { flavours } },
      function(err, succ) {
        if (err) {
          return res.status(500).json({
            message: "Error when pushing Flavours.",
            error: err
          });
        }
        return res.json(succ);
      }
    );
  },
  findFlavoursMixes: function(req, res) {
    FlavourMixesModel.find({ "flavours.name": req.body.name }, function(
      err,
      FlavourMixes
    ) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FlavourMixes.",
          error: err
        });
      }
      return res.json(FlavourMixes);
    });
  }
};
