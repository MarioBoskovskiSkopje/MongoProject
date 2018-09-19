var MixingModel = require("../models/MixingModel.js");

/**
 * MixingController.js
 *
 * @description :: Server-side logic for managing Mixings.
 */
module.exports = {
  /**
   * MixingController.list()
   */
  list: function(req, res) {
    MixingModel.find(function(err, Mixings) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Mixing.",
          error: err
        });
      }
      return res.json(Mixings);
    });
  },

  /**
   * MixingController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    MixingModel.findOne({ _id: id }, function(err, Mixing) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Mixing.",
          error: err
        });
      }
      if (!Mixing) {
        return res.status(404).json({
          message: "No such Mixing"
        });
      }
      return res.json(Mixing);
    });
  },

  /**
   * MixingController.create()
   */
  create: function(req, res) {
    var Mixing = new MixingModel({
      movedToNext: req.body.movedToNext,
      starttime: req.body.starttime
    });

    Mixing.save(function(err, Mixing) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Mixing",
          error: err
        });
      }
      return res.status(201).json(Mixing);
    });
  },

  /**
   * MixingController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    MixingModel.findOne({ _id: id }, function(err, Mixing) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Mixing",
          error: err
        });
      }
      if (!Mixing) {
        return res.status(404).json({
          message: "No such Mixing"
        });
      }

      Mixing.movedToNext = req.body.movedToNext
        ? req.body.movedToNext
        : Mixing.movedToNext;
      Mixing.starttime = req.body.starttime
        ? req.body.starttime
        : Mixing.starttime;

      Mixing.save(function(err, Mixing) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Mixing.",
            error: err
          });
        }

        return res.json(Mixing);
      });
    });
  },

  /**
   * MixingController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    MixingModel.findByIdAndRemove(id, function(err, Mixing) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Mixing.",
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
