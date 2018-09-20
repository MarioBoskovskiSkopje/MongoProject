var SchedulesReferenceModel = require("../models/Schedules ReferenceModel.js");

/**
 * Schedules ReferenceController.js
 *
 * @description :: Server-side logic for managing Schedules References.
 */
module.exports = {
  /**
   * Schedules ReferenceController.list()
   */
  list: function(req, res) {
    SchedulesReferenceModel.find(function(err, SchedulesReferences) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Schedules Reference.",
          error: err
        });
      }
      return res.json(SchedulesReferences);
    });
  },

  /**
   * Schedules ReferenceController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.SchedulesReference] = id;
    SchedulesReferenceModel.findOne(obj, function(err, SchedulesReference) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Schedules Reference.",
          error: err
        });
      }
      if (!SchedulesReference) {
        return res.status(404).json({
          message: "No such Schedules Reference"
        });
      }
      return res.json(SchedulesReference);
    });
  },

  /**
   * Schedules ReferenceController.create()
   */
  create: function(req, res) {
    var SchedulesReference = new SchedulesReferenceModel({
      date: req.body.date,
      entryDate: req.body.entryDate,
      id: req.body.id,
      name: req.body.name,
      type: req.body.type,
      Batches: {
        batch: req.body.batch,
        bottles: req.body.bottles,
        machine_ID: req.body.machine_ID,
        schedule_ID: req.body.schedule_ID,
        slots: req.body.slots,
        timeTotal: req.body.timeTotal
      }
    });

    SchedulesReference.save(function(err, SchedulesReference) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Schedules Reference",
          error: err
        });
      }
      return res.status(201).json(SchedulesReference);
    });
  },

  /**
   * Schedules ReferenceController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.SchedulesReference] = id;
    SchedulesReferenceModel.findOne(obj, function(err, SchedulesReference) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Schedules Reference",
          error: err
        });
      }
      if (!SchedulesReference) {
        return res.status(404).json({
          message: "No such Schedules Reference"
        });
      }

      SchedulesReference.date = req.body.date
        ? req.body.date
        : SchedulesReference.date;
      SchedulesReference.entryDate = req.body.entryDate
        ? req.body.entryDate
        : SchedulesReference.entryDate;
      SchedulesReference.id = req.body.id ? req.body.id : SchedulesReference.id;
      SchedulesReference.name = req.body.name
        ? req.body.name
        : SchedulesReference.name;
      SchedulesReference.type = req.body.type
        ? req.body.type
        : SchedulesReference.type;

      SchedulesReference.save(function(err, SchedulesReference) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Schedules Reference.",
            error: err
          });
        }

        return res.json(SchedulesReference);
      });
    });
  },

  /**
   * Schedules ReferenceController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.SchedulesReference] = id;
    SchedulesReferenceModel.findOneAndRemove(obj, function(
      err,
      SchedulesReference
    ) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Schedules Reference.",
          error: err
        });
      }
      return res.status(204).json();
    });
  },
  addBatches: function(req, res) {
    const { name, batches } = req.body;
    SchedulesReferenceModel.findOneAndUpdate(
      { name },
      { $push: { batches } },
      function(err, succ) {
        if (err) {
          return res.status(500).json({
            message: "Error when pushing Batches.",
            error: err
          });
        }
        return res.json(succ);
      }
    );
  },
  findBatches: function(req, res) {
    SchedulesReferenceModel.find({ "Batches.name": req.body.name }, function(
      err,
      Batches
    ) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Batches.",
          error: err
        });
      }
      return res.json(Batches);
    });
  }
};
