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
    var obj = {};
    obj[idenifiers.Mixing] = id;
    MixingModel.findOne(obj, function(err, Mixing) {
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
      AGrecipe: req.body.AGrecipe,
      AGval: req.body.AGval,
      CBDrecipe: req.body.CBDrecipe,
      CBDvalue: req.body.CBDvalue,
      Completed: req.body.Completed,
      CompletionDate: req.body.CompletionDate,
      Location: req.body.Location,
      MCTrecipe: req.body.MCTrecipe,
      MCTval: req.body.MCTval,
      Nico: req.body.Nico,
      Nicotrecipe: req.body.Nicotrecipe,
      Nicotrecipesalts: req.body.Nicotrecipesalts,
      Notes: req.body.Notes,
      PGrecipe: req.body.PGrecipe,
      PGval: req.body.PGval,
      QTY: req.body.QTY,
      VGrecipe: req.body.VGrecipe,
      VGval: req.body.VGval,
      backtubed: req.body.backtubed,
      batch: req.body.batch,
      branded: req.body.branded,
      cbd: req.body.cbd,
      customer: req.body.customer,
      final_status: req.body.final_status,
      flavour: req.body.flavour,
      flavrecipe: req.body.flavrecipe,
      flavvalue: req.body.flavvalue,
      haspremix: req.body.haspremix,
      labeling_status: req.body.labeling_status,
      mixing: req.body.mixing,
      mixing_status: req.body.mixing_status,
      movedtoNext: req.body.movedtoNext,
      nic: req.body.nic,
      nicsalts: req.body.nicsalts,
      orderID: req.body.orderID,
      orderdate: req.body.orderdate,
      packaging_status: req.body.packaging_status,
      premixed: req.body.premixed,
      printing_status: req.body.printing_status,
      productcode: req.body.productcode,
      productdescription: req.body.productdescription,
      recipe: req.body.recipe,
      row: req.body.row,
      split: req.body.split,
      starttime: req.body.starttime,
      unbranded: req.body.unbranded,
      userset: req.body.userset
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
    var obj = {};
    obj[idenifiers.Mixing] = id;
    MixingModel.findOne(obj, function(err, Mixing) {
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

      Mixing.AGrecipe = req.body.AGrecipe ? req.body.AGrecipe : Mixing.AGrecipe;
      Mixing.AGval = req.body.AGval ? req.body.AGval : Mixing.AGval;
      Mixing.CBDrecipe = req.body.CBDrecipe
        ? req.body.CBDrecipe
        : Mixing.CBDrecipe;
      Mixing.CBDvalue = req.body.CBDvalue ? req.body.CBDvalue : Mixing.CBDvalue;
      Mixing.Completed = req.body.Completed
        ? req.body.Completed
        : Mixing.Completed;
      Mixing.CompletionDate = req.body.CompletionDate
        ? req.body.CompletionDate
        : Mixing.CompletionDate;
      Mixing.Location = req.body.Location ? req.body.Location : Mixing.Location;
      Mixing.MCTrecipe = req.body.MCTrecipe
        ? req.body.MCTrecipe
        : Mixing.MCTrecipe;
      Mixing.MCTval = req.body.MCTval ? req.body.MCTval : Mixing.MCTval;
      Mixing.Nico = req.body.Nico ? req.body.Nico : Mixing.Nico;
      Mixing.Nicotrecipe = req.body.Nicotrecipe
        ? req.body.Nicotrecipe
        : Mixing.Nicotrecipe;
      Mixing.Nicotrecipesalts = req.body.Nicotrecipesalts
        ? req.body.Nicotrecipesalts
        : Mixing.Nicotrecipesalts;
      Mixing.Notes = req.body.Notes ? req.body.Notes : Mixing.Notes;
      Mixing.PGrecipe = req.body.PGrecipe ? req.body.PGrecipe : Mixing.PGrecipe;
      Mixing.PGval = req.body.PGval ? req.body.PGval : Mixing.PGval;
      Mixing.QTY = req.body.QTY ? req.body.QTY : Mixing.QTY;
      Mixing.VGrecipe = req.body.VGrecipe ? req.body.VGrecipe : Mixing.VGrecipe;
      Mixing.VGval = req.body.VGval ? req.body.VGval : Mixing.VGval;
      Mixing.backtubed = req.body.backtubed
        ? req.body.backtubed
        : Mixing.backtubed;
      Mixing.batch = req.body.batch ? req.body.batch : Mixing.batch;
      Mixing.branded = req.body.branded ? req.body.branded : Mixing.branded;
      Mixing.cbd = req.body.cbd ? req.body.cbd : Mixing.cbd;
      Mixing.customer = req.body.customer ? req.body.customer : Mixing.customer;
      Mixing.final_status = req.body.final_status
        ? req.body.final_status
        : Mixing.final_status;
      Mixing.flavour = req.body.flavour ? req.body.flavour : Mixing.flavour;
      Mixing.flavrecipe = req.body.flavrecipe
        ? req.body.flavrecipe
        : Mixing.flavrecipe;
      Mixing.flavvalue = req.body.flavvalue
        ? req.body.flavvalue
        : Mixing.flavvalue;
      Mixing.haspremix = req.body.haspremix
        ? req.body.haspremix
        : Mixing.haspremix;
      Mixing.labeling_status = req.body.labeling_status
        ? req.body.labeling_status
        : Mixing.labeling_status;
      Mixing.mixing = req.body.mixing ? req.body.mixing : Mixing.mixing;
      Mixing.mixing_status = req.body.mixing_status
        ? req.body.mixing_status
        : Mixing.mixing_status;
      Mixing.movedtoNext = req.body.movedtoNext
        ? req.body.movedtoNext
        : Mixing.movedtoNext;
      Mixing.nic = req.body.nic ? req.body.nic : Mixing.nic;
      Mixing.nicsalts = req.body.nicsalts ? req.body.nicsalts : Mixing.nicsalts;
      Mixing.orderID = req.body.orderID ? req.body.orderID : Mixing.orderID;
      Mixing.orderdate = req.body.orderdate
        ? req.body.orderdate
        : Mixing.orderdate;
      Mixing.packaging_status = req.body.packaging_status
        ? req.body.packaging_status
        : Mixing.packaging_status;
      Mixing.premixed = req.body.premixed ? req.body.premixed : Mixing.premixed;
      Mixing.printing_status = req.body.printing_status
        ? req.body.printing_status
        : Mixing.printing_status;
      Mixing.productcode = req.body.productcode
        ? req.body.productcode
        : Mixing.productcode;
      Mixing.productdescription = req.body.productdescription
        ? req.body.productdescription
        : Mixing.productdescription;
      Mixing.recipe = req.body.recipe ? req.body.recipe : Mixing.recipe;
      Mixing.row = req.body.row ? req.body.row : Mixing.row;
      Mixing.split = req.body.split ? req.body.split : Mixing.split;
      Mixing.starttime = req.body.starttime
        ? req.body.starttime
        : Mixing.starttime;
      Mixing.unbranded = req.body.unbranded
        ? req.body.unbranded
        : Mixing.unbranded;
      Mixing.userset = req.body.userset ? req.body.userset : Mixing.userset;

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
    var obj = {};
    obj[idenifiers.Mixing] = id;
    MixingModel.findOneAndRemove(obj, function(err, Mixing) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Mixing.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
