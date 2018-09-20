var LogModel = require("../models/LogModel.js");

/**
 * LogController.js
 *
 * @description :: Server-side logic for managing Logs.
 */
module.exports = {
  /**
   * LogController.list()
   */
  list: function(req, res) {
    LogModel.find(function(err, Logs) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Log.",
          error: err
        });
      }
      return res.json(Logs);
    });
  },

  /**
   * LogController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Log] = id;
    LogModel.findOne(obj, function(err, Log) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Log.",
          error: err
        });
      }
      if (!Log) {
        return res.status(404).json({
          message: "No such Log"
        });
      }
      return res.json(Log);
    });
  },

  /**
   * LogController.create()
   */
  create: function(req, res) {
    var Log = new LogModel({
      action: req.body.action,
      batch: req.body.batch,
      data: req.body.data,
      msg: req.body.msg,
      page: req.body.page,
      status: req.body.status,
      time: req.body.time,
      type: req.body.type,
      user: req.body.user
    });

    Log.save(function(err, Log) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Log",
          error: err
        });
      }
      return res.status(201).json(Log);
    });
  },

  /**
   * LogController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Log] = id;
    LogModel.findOne(obj, function(err, Log) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Log",
          error: err
        });
      }
      if (!Log) {
        return res.status(404).json({
          message: "No such Log"
        });
      }

      Log.action = req.body.action ? req.body.action : Log.action;
      Log.batch = req.body.batch ? req.body.batch : Log.batch;
      Log.data = req.body.data ? req.body.data : Log.data;
      Log.msg = req.body.msg ? req.body.msg : Log.msg;
      Log.page = req.body.page ? req.body.page : Log.page;
      Log.status = req.body.status ? req.body.status : Log.status;
      Log.time = req.body.time ? req.body.time : Log.time;
      Log.type = req.body.type ? req.body.type : Log.type;
      Log.user = req.body.user ? req.body.user : Log.user;

      Log.save(function(err, Log) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Log.",
            error: err
          });
        }

        return res.json(Log);
      });
    });
  },

  /**
   * LogController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Log] = id;
    LogModel.findOneAndRemove(obj, function(err, Log) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Log.",
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
