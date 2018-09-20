var ProductionModel = require("../models/ProductionModel.js");

/**
 * ProductionController.js
 *
 * @description :: Server-side logic for managing Productions.
 */
module.exports = {
  /**
   * ProductionController.list()
   */
  list: function(req, res) {
    ProductionModel.find(function(err, Productions) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Production.",
          error: err
        });
      }
      return res.json(Productions);
    });
  },

  /**
   * ProductionController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Production] = id;
    ProductionModel.findOne(obj, function(err, Production) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Production.",
          error: err
        });
      }
      if (!Production) {
        return res.status(404).json({
          message: "No such Production"
        });
      }
      return res.json(Production);
    });
  },

  /**
   * ProductionController.create()
   */
  create: function(req, res) {
    var Production = new ProductionModel({
      Completed: req.body.Completed,
      CompletionDate: req.body.CompletionDate,
      Location: req.body.Location,
      backtubed: req.body.backtubed,
      batch: req.body.batch,
      botSKU: req.body.botSKU,
      botlabel: req.body.botlabel,
      botlabelsku: req.body.botlabelsku,
      bottles: req.body.bottles,
      boxname: req.body.boxname,
      brand: req.body.brand,
      brandSKU: req.body.brandSKU,
      branded: req.body.branded,
      bsize: req.body.bsize,
      btype: req.body.btype,
      coloredpremix: req.body.coloredpremix,
      customer: req.body.customer,
      customerSKU: req.body.customerSKU,
      fill: req.body.fill,
      final_status: req.body.final_status,
      flavour: req.body.flavour,
      labeling_status: req.body.labeling_status,
      lid: req.body.lid,
      lidSKU: req.body.lidSKU,
      mixbatch: req.body.mixbatch,
      mixing: req.body.mixing,
      mixing_status: req.body.mixing_status,
      movedToNext: req.body.movedToNext,
      orderID: req.body.orderID,
      orderdate: req.body.orderdate,
      packagingType: req.body.packagingType,
      packaging_status: req.body.packaging_status,
      packlabel: req.body.packlabel,
      packlabelsku: req.body.packlabelsku,
      premixed: req.body.premixed,
      printing_status: req.body.printing_status,
      priority: req.body.priority,
      prodDate: req.body.prodDate,
      productcode: req.body.productcode,
      productdescription: req.body.productdescription,
      recipe: req.body.recipe,
      row: req.body.row,
      starttime: req.body.starttime,
      unbranded: req.body.unbranded,
      userset: req.body.userset
    });

    Production.save(function(err, Production) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Production",
          error: err
        });
      }
      return res.status(201).json(Production);
    });
  },

  /**
   * ProductionController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Production] = id;
    ProductionModel.findOne(obj, function(err, Production) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Production",
          error: err
        });
      }
      if (!Production) {
        return res.status(404).json({
          message: "No such Production"
        });
      }

      Production.Completed = req.body.Completed
        ? req.body.Completed
        : Production.Completed;
      Production.CompletionDate = req.body.CompletionDate
        ? req.body.CompletionDate
        : Production.CompletionDate;
      Production.Location = req.body.Location
        ? req.body.Location
        : Production.Location;
      Production.backtubed = req.body.backtubed
        ? req.body.backtubed
        : Production.backtubed;
      Production.batch = req.body.batch ? req.body.batch : Production.batch;
      Production.botSKU = req.body.botSKU ? req.body.botSKU : Production.botSKU;
      Production.botlabel = req.body.botlabel
        ? req.body.botlabel
        : Production.botlabel;
      Production.botlabelsku = req.body.botlabelsku
        ? req.body.botlabelsku
        : Production.botlabelsku;
      Production.bottles = req.body.bottles
        ? req.body.bottles
        : Production.bottles;
      Production.boxname = req.body.boxname
        ? req.body.boxname
        : Production.boxname;
      Production.brand = req.body.brand ? req.body.brand : Production.brand;
      Production.brandSKU = req.body.brandSKU
        ? req.body.brandSKU
        : Production.brandSKU;
      Production.branded = req.body.branded
        ? req.body.branded
        : Production.branded;
      Production.bsize = req.body.bsize ? req.body.bsize : Production.bsize;
      Production.btype = req.body.btype ? req.body.btype : Production.btype;
      Production.coloredpremix = req.body.coloredpremix
        ? req.body.coloredpremix
        : Production.coloredpremix;
      Production.customer = req.body.customer
        ? req.body.customer
        : Production.customer;
      Production.customerSKU = req.body.customerSKU
        ? req.body.customerSKU
        : Production.customerSKU;
      Production.fill = req.body.fill ? req.body.fill : Production.fill;
      Production.final_status = req.body.final_status
        ? req.body.final_status
        : Production.final_status;
      Production.flavour = req.body.flavour
        ? req.body.flavour
        : Production.flavour;
      Production.labeling_status = req.body.labeling_status
        ? req.body.labeling_status
        : Production.labeling_status;
      Production.lid = req.body.lid ? req.body.lid : Production.lid;
      Production.lidSKU = req.body.lidSKU ? req.body.lidSKU : Production.lidSKU;
      Production.mixbatch = req.body.mixbatch
        ? req.body.mixbatch
        : Production.mixbatch;
      Production.mixing = req.body.mixing ? req.body.mixing : Production.mixing;
      Production.mixing_status = req.body.mixing_status
        ? req.body.mixing_status
        : Production.mixing_status;
      Production.movedToNext = req.body.movedToNext
        ? req.body.movedToNext
        : Production.movedToNext;
      Production.orderID = req.body.orderID
        ? req.body.orderID
        : Production.orderID;
      Production.orderdate = req.body.orderdate
        ? req.body.orderdate
        : Production.orderdate;
      Production.packagingType = req.body.packagingType
        ? req.body.packagingType
        : Production.packagingType;
      Production.packaging_status = req.body.packaging_status
        ? req.body.packaging_status
        : Production.packaging_status;
      Production.packlabel = req.body.packlabel
        ? req.body.packlabel
        : Production.packlabel;
      Production.packlabelsku = req.body.packlabelsku
        ? req.body.packlabelsku
        : Production.packlabelsku;
      Production.premixed = req.body.premixed
        ? req.body.premixed
        : Production.premixed;
      Production.printing_status = req.body.printing_status
        ? req.body.printing_status
        : Production.printing_status;
      Production.priority = req.body.priority
        ? req.body.priority
        : Production.priority;
      Production.prodDate = req.body.prodDate
        ? req.body.prodDate
        : Production.prodDate;
      Production.productcode = req.body.productcode
        ? req.body.productcode
        : Production.productcode;
      Production.productdescription = req.body.productdescription
        ? req.body.productdescription
        : Production.productdescription;
      Production.recipe = req.body.recipe ? req.body.recipe : Production.recipe;
      Production.row = req.body.row ? req.body.row : Production.row;
      Production.starttime = req.body.starttime
        ? req.body.starttime
        : Production.starttime;
      Production.unbranded = req.body.unbranded
        ? req.body.unbranded
        : Production.unbranded;
      Production.userset = req.body.userset
        ? req.body.userset
        : Production.userset;

      Production.save(function(err, Production) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Production.",
            error: err
          });
        }

        return res.json(Production);
      });
    });
  },

  /**
   * ProductionController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Production] = id;
    ProductionModel.findOneAndRemove(obj, function(err, Production) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Production.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
