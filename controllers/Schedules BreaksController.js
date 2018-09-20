var SchedulesBreaksModel = require("../models/Schedules BreaksModel.js");

/**
 * Schedules BreaksController.js
 *
 * @description :: Server-side logic for managing Schedules Breakss.
 */
module.exports = {
  /**
   * Schedules BreaksController.list()
   */
  list: function(req, res) {
    SchedulesBreaksModel.find(function(err, SchedulesBreakss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Schedules Breaks.",
          error: err
        });
      }
      return res.json(SchedulesBreakss);
    });
  },

  /**
   * Schedules BreaksController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.SchedulesBreaks] = id;
    SchedulesBreaksModel.findOne(obj, function(err, SchedulesBreaks) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Schedules Breaks.",
          error: err
        });
      }
      if (!SchedulesBreaks) {
        return res.status(404).json({
          message: "No such Schedules Breaks"
        });
      }
      return res.json(SchedulesBreaks);
    });
  },

  /**
   * Schedules BreaksController.create()
   */
  create: function(req, res) {
    var SchedulesBreaksModel = new SchedulesBreaksModel({
      breakTimes: req.body.breakTimes,
      shiftTimes: req.body.shiftTimes,
      status: req.body.status,
      day: req.body.day
    });

    SchedulesBreaksModel.save(function(err, SchedulesBreaks) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Schedules Breaks",
          error: err
        });
      }
      return res.status(201).json(SchedulesBreaks);
    });
  },

  /**
   * Schedules BreaksController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.SchedulesBreaks] = id;
    SchedulesBreaksModel.findOne(obj, function(err, SchedulesBreaks) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Schedules Breaks",
          error: err
        });
      }
      if (!SchedulesBreaks) {
        return res.status(404).json({
          message: "No such Schedules Breaks"
        });
      }

      SchedulesBreaks.breakTimes = req.body.breakTimes
        ? req.body.breakTimes
        : SchedulesBreaks.breakTimes;
      SchedulesBreaks.shiftTimes = req.body.shiftTimes
        ? req.body.shiftTimes
        : SchedulesBreaks.shiftTimes;
      SchedulesBreaks.status = req.body.status
        ? req.body.status
        : SchedulesBreaks.status;
      SchedulesBreaks.key = req.body.key ? req.body.key : SchedulesBreaks.key;

      SchedulesBreaks.save(function(err, SchedulesBreaks) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Schedules Breaks.",
            error: err
          });
        }

        return res.json(SchedulesBreaks);
      });
    });
  },

  /**
   * Schedules BreaksController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.SchedulesBreaks] = id;
    SchedulesBreaksModel.findOneAndRemove(obj, function(err, SchedulesBreaks) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Schedules Breaks.",
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
