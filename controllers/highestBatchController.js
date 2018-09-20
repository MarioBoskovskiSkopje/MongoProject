var highestBatchModel = require("../models/highestBatchModel.js");

/**
 * highestBatchController.js
 *
 * @description :: Server-side logic for managing highestBatchs.
 */
module.exports = {
  /**
   * highestBatchController.list()
   */
  list: function(req, res) {
    highestBatchModel.find(function(err, highestBatchs) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting highestBatch.",
          error: err
        });
      }
      return res.json(highestBatchs);
    });
  },

  /**
   * highestBatchController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.highestBatch] = id;
    highestBatchModel.findOne(obj, function(err, highestBatch) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting highestBatch.",
          error: err
        });
      }
      if (!highestBatch) {
        return res.status(404).json({
          message: "No such highestBatch"
        });
      }
      return res.json(highestBatch);
    });
  },

  /**
   * highestBatchController.create()
   */
  create: function(req, res) {
    var highestBatch = new highestBatchModel({
      batch: req.body.batch
    });

    highestBatch.save(function(err, highestBatch) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating highestBatch",
          error: err
        });
      }
      return res.status(201).json(highestBatch);
    });
  },

  /**
   * highestBatchController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.highestBatch] = id;
    highestBatchModel.findOne(obj, function(err, highestBatch) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting highestBatch",
          error: err
        });
      }
      if (!highestBatch) {
        return res.status(404).json({
          message: "No such highestBatch"
        });
      }

      highestBatch.batch = req.body.batch ? req.body.batch : highestBatch.batch;

      highestBatch.save(function(err, highestBatch) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating highestBatch.",
            error: err
          });
        }

        return res.json(highestBatch);
      });
    });
  },

  /**
   * highestBatchController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.highestBatch] = id;
    highestBatchModel.findOneAndRemove(obj, function(err, highestBatch) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the highestBatch.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
