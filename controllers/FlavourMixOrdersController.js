var FlavourMixOrdersModel = require("../models/FlavourMixOrdersModel.js");

/**
 * FlavourMixOrdersController.js
 *
 * @description :: Server-side logic for managing FlavourMixOrderss.
 */
module.exports = {
  /**
   * FlavourMixOrdersController.list()
   */
  list: function(req, res) {
    FlavourMixOrdersModel.find(function(err, FlavourMixOrderss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FlavourMixOrders.",
          error: err
        });
      }
      return res.json(FlavourMixOrderss);
    });
  },

  /**
   * FlavourMixOrdersController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.FlavourMixOrders] = id;
    FlavourMixOrdersModel.findOne(obj, function(err, FlavourMixOrders) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FlavourMixOrders.",
          error: err
        });
      }
      if (!FlavourMixOrders) {
        return res.status(404).json({
          message: "No such FlavourMixOrders"
        });
      }
      return res.json(FlavourMixOrders);
    });
  },

  /**
   * FlavourMixOrdersController.create()
   */
  create: function(req, res) {
    var FlavourMixOrders = new FlavourMixOrdersModel({
      batch: req.body.batch,
      final_status: req.body.final_status,
      flavourmix: req.body.flavourmix,
      movedtoNext: req.body.movedtoNext,
      orderdate: req.body.orderdate,
      row: req.body.row,
      stocking: req.body.stocking
    });

    FlavourMixOrders.save(function(err, FlavourMixOrders) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating FlavourMixOrders",
          error: err
        });
      }
      return res.status(201).json(FlavourMixOrders);
    });
  },

  /**
   * FlavourMixOrdersController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.FlavourMixOrders] = id;
    FlavourMixOrdersModel.findOne(obj, function(err, FlavourMixOrders) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting FlavourMixOrders",
          error: err
        });
      }
      if (!FlavourMixOrders) {
        return res.status(404).json({
          message: "No such FlavourMixOrders"
        });
      }

      FlavourMixOrders.batch = req.body.batch
        ? req.body.batch
        : FlavourMixOrders.batch;
      FlavourMixOrders.final_status = req.body.final_status
        ? req.body.final_status
        : FlavourMixOrders.final_status;
      FlavourMixOrders.flavourmix = req.body.flavourmix
        ? req.body.flavourmix
        : FlavourMixOrders.flavourmix;
      FlavourMixOrders.movedtoNext = req.body.movedtoNext
        ? req.body.movedtoNext
        : FlavourMixOrders.movedtoNext;
      FlavourMixOrders.orderdate = req.body.orderdate
        ? req.body.orderdate
        : FlavourMixOrders.orderdate;
      FlavourMixOrders.row = req.body.row ? req.body.row : FlavourMixOrders.row;
      FlavourMixOrders.stocking = req.body.stocking
        ? req.body.stocking
        : FlavourMixOrders.stocking;

      FlavourMixOrders.save(function(err, FlavourMixOrders) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating FlavourMixOrders.",
            error: err
          });
        }

        return res.json(FlavourMixOrders);
      });
    });
  },

  /**
   * FlavourMixOrdersController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.FlavourMixOrders] = id;
    FlavourMixOrdersModel.findOneAndRemove(obj, function(
      err,
      FlavourMixOrders
    ) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the FlavourMixOrders.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
