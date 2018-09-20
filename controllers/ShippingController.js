var ShippingModel = require("../models/ShippingModel.js");

/**
 * ShippingController.js
 *
 * @description :: Server-side logic for managing Shippings.
 */
module.exports = {
  /**
   * ShippingController.list()
   */
  list: function(req, res) {
    ShippingModel.find(function(err, Shippings) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Shipping.",
          error: err
        });
      }
      return res.json(Shippings);
    });
  },

  /**
   * ShippingController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Shipping] = id;
    ShippingModel.findOne(obj, function(err, Shipping) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Shipping.",
          error: err
        });
      }
      if (!Shipping) {
        return res.status(404).json({
          message: "No such Shipping"
        });
      }
      return res.json(Shipping);
    });
  },

  /**
   * ShippingController.create()
   */
  create: function(req, res) {
    var Shipping = new ShippingModel({
      AGrecipe: req.body.AGrecipe,
      AGval: req.body.AGval,
      backtubed: req.body.backtubed,
      batch: req.body.batch,
      botlabel: req.body.botlabel,
      botlabelsku: req.body.botlabelsku,
      botSKU: req.body.botSKU,
      bottles: req.body.bottles,
      boxname: req.body.boxname,
      brand: req.body.brand,
      branded: req.body.branded,
      brandSKU: req.body.brandSKU,
      bsize: req.body.bsize,
      btype: req.body.btype,
      CBDrecipe: req.body.CBDrecipe,
      CBDvalue: req.body.CBDvalue,
      coloredpremix: req.body.coloredpremix,
      CompletionDate: req.body.CompletionDate,
      customer: req.body.customer,
      customerSKU: req.body.customerSKU,
      dateshipped: req.body.dateshipped,
      fill: req.body.fill,
      final_status: req.body.final_status,
      flavour: req.body.flavour,
      flavrecipe: req.body.flavrecipe,
      flavvalue: req.body.flavvalue,
      labeling_status: req.body.labeling_status,
      lid: req.body.lid,
      lidSKU: req.body.lidSKU,
      MCTrecipe: req.body.MCTrecipe,
      MCTval: req.body.MCTval,
      mixing: req.body.mixing,
      mixing_status: req.body.mixing_status,
      NIB: req.body.NIB,
      Nico: req.body.Nico,
      Nicotrecipe: req.body.Nicotrecipe,
      Nicotrecipesalts: req.body.Nicotrecipesalts,
      orderdate: req.body.orderdate,
      orderID: req.body.orderID,
      packaging_status: req.body.packaging_status,
      packagingType: req.body.packagingType,
      packlabel: req.body.packlabel,
      packlabelsku: req.body.packlabelsku,
      partialPackaging: req.body.partialPackaging,
      partialProduction: req.body.partialProduction,
      PGrecipe: req.body.PGrecipe,
      PGval: req.body.PGval,
      ppb: req.body.ppb,
      ppp: req.body.ppp,
      premixed: req.body.premixed,
      PRINTCODE: req.body.PRINTCODE,
      printing_status: req.body.printing_status,
      priority: req.body.priority,
      productcode: req.body.productcode,
      productdescription: req.body.productdescription,
      production_status: req.body.production_status,
      QTY: req.body.QTY,
      recipe: req.body.recipe,
      removedPackaging: req.body.removedPackaging,
      removeProduction: req.body.removeProduction,
      row: req.body.row,
      runtime: req.body.runtime,
      saved: req.body.saved,
      shipping_status: req.body.shipping_status,
      SHIPPINGCODE: req.body.SHIPPINGCODE,
      stocking: req.body.stocking,
      unbranded: req.body.unbranded,
      userset: req.body.userset,
      VGrecipe: req.body.VGrecipe,
      VGval: req.body.VGval,
      wentNegative: req.body.wentNegative
    });

    Shipping.save(function(err, Shipping) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Shipping",
          error: err
        });
      }
      return res.status(201).json(Shipping);
    });
  },

  /**
   * ShippingController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Shipping] = id;
    ShippingModel.findOne(obj, function(err, Shipping) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Shipping",
          error: err
        });
      }
      if (!Shipping) {
        return res.status(404).json({
          message: "No such Shipping"
        });
      }

      Shipping.AGrecipe = req.body.AGrecipe
        ? req.body.AGrecipe
        : Shipping.AGrecipe;
      Shipping.AGval = req.body.AGval ? req.body.AGval : Shipping.AGval;
      Shipping.backtubed = req.body.backtubed
        ? req.body.backtubed
        : Shipping.backtubed;
      Shipping.batch = req.body.batch ? req.body.batch : Shipping.batch;
      Shipping.botlabel = req.body.botlabel
        ? req.body.botlabel
        : Shipping.botlabel;
      Shipping.botlabelsku = req.body.botlabelsku
        ? req.body.botlabelsku
        : Shipping.botlabelsku;
      Shipping.botSKU = req.body.botSKU ? req.body.botSKU : Shipping.botSKU;
      Shipping.bottles = req.body.bottles ? req.body.bottles : Shipping.bottles;
      Shipping.boxname = req.body.boxname ? req.body.boxname : Shipping.boxname;
      Shipping.brand = req.body.brand ? req.body.brand : Shipping.brand;
      Shipping.branded = req.body.branded ? req.body.branded : Shipping.branded;
      Shipping.brandSKU = req.body.brandSKU
        ? req.body.brandSKU
        : Shipping.brandSKU;
      Shipping.bsize = req.body.bsize ? req.body.bsize : Shipping.bsize;
      Shipping.btype = req.body.btype ? req.body.btype : Shipping.btype;
      Shipping.CBDrecipe = req.body.CBDrecipe
        ? req.body.CBDrecipe
        : Shipping.CBDrecipe;
      Shipping.CBDvalue = req.body.CBDvalue
        ? req.body.CBDvalue
        : Shipping.CBDvalue;
      Shipping.coloredpremix = req.body.coloredpremix
        ? req.body.coloredpremix
        : Shipping.coloredpremix;
      Shipping.CompletionDate = req.body.CompletionDate
        ? req.body.CompletionDate
        : Shipping.CompletionDate;
      Shipping.customer = req.body.customer
        ? req.body.customer
        : Shipping.customer;
      Shipping.customerSKU = req.body.customerSKU
        ? req.body.customerSKU
        : Shipping.customerSKU;
      Shipping.dateshipped = req.body.dateshipped
        ? req.body.dateshipped
        : Shipping.dateshipped;
      Shipping.fill = req.body.fill ? req.body.fill : Shipping.fill;
      Shipping.final_status = req.body.final_status
        ? req.body.final_status
        : Shipping.final_status;
      Shipping.flavour = req.body.flavour ? req.body.flavour : Shipping.flavour;
      Shipping.flavrecipe = req.body.flavrecipe
        ? req.body.flavrecipe
        : Shipping.flavrecipe;
      Shipping.flavvalue = req.body.flavvalue
        ? req.body.flavvalue
        : Shipping.flavvalue;
      Shipping.labeling_status = req.body.labeling_status
        ? req.body.labeling_status
        : Shipping.labeling_status;
      Shipping.lid = req.body.lid ? req.body.lid : Shipping.lid;
      Shipping.lidSKU = req.body.lidSKU ? req.body.lidSKU : Shipping.lidSKU;
      Shipping.MCTrecipe = req.body.MCTrecipe
        ? req.body.MCTrecipe
        : Shipping.MCTrecipe;
      Shipping.MCTval = req.body.MCTval ? req.body.MCTval : Shipping.MCTval;
      Shipping.mixing = req.body.mixing ? req.body.mixing : Shipping.mixing;
      Shipping.mixing_status = req.body.mixing_status
        ? req.body.mixing_status
        : Shipping.mixing_status;
      Shipping.NIB = req.body.NIB ? req.body.NIB : Shipping.NIB;
      Shipping.Nico = req.body.Nico ? req.body.Nico : Shipping.Nico;
      Shipping.Nicotrecipe = req.body.Nicotrecipe
        ? req.body.Nicotrecipe
        : Shipping.Nicotrecipe;
      Shipping.Nicotrecipesalts = req.body.Nicotrecipesalts
        ? req.body.Nicotrecipesalts
        : Shipping.Nicotrecipesalts;
      Shipping.orderdate = req.body.orderdate
        ? req.body.orderdate
        : Shipping.orderdate;
      Shipping.orderID = req.body.orderID ? req.body.orderID : Shipping.orderID;
      Shipping.packaging_status = req.body.packaging_status
        ? req.body.packaging_status
        : Shipping.packaging_status;
      Shipping.packagingType = req.body.packagingType
        ? req.body.packagingType
        : Shipping.packagingType;
      Shipping.packlabel = req.body.packlabel
        ? req.body.packlabel
        : Shipping.packlabel;
      Shipping.packlabelsku = req.body.packlabelsku
        ? req.body.packlabelsku
        : Shipping.packlabelsku;
      Shipping.partialPackaging = req.body.partialPackaging
        ? req.body.partialPackaging
        : Shipping.partialPackaging;
      Shipping.partialProduction = req.body.partialProduction
        ? req.body.partialProduction
        : Shipping.partialProduction;
      Shipping.PGrecipe = req.body.PGrecipe
        ? req.body.PGrecipe
        : Shipping.PGrecipe;
      Shipping.PGval = req.body.PGval ? req.body.PGval : Shipping.PGval;
      Shipping.ppb = req.body.ppb ? req.body.ppb : Shipping.ppb;
      Shipping.ppp = req.body.ppp ? req.body.ppp : Shipping.ppp;
      Shipping.premixed = req.body.premixed
        ? req.body.premixed
        : Shipping.premixed;
      Shipping.PRINTCODE = req.body.PRINTCODE
        ? req.body.PRINTCODE
        : Shipping.PRINTCODE;
      Shipping.printing_status = req.body.printing_status
        ? req.body.printing_status
        : Shipping.printing_status;
      Shipping.priority = req.body.priority
        ? req.body.priority
        : Shipping.priority;
      Shipping.productcode = req.body.productcode
        ? req.body.productcode
        : Shipping.productcode;
      Shipping.productdescription = req.body.productdescription
        ? req.body.productdescription
        : Shipping.productdescription;
      Shipping.production_status = req.body.production_status
        ? req.body.production_status
        : Shipping.production_status;
      Shipping.QTY = req.body.QTY ? req.body.QTY : Shipping.QTY;
      Shipping.recipe = req.body.recipe ? req.body.recipe : Shipping.recipe;
      Shipping.removedPackaging = req.body.removedPackaging
        ? req.body.removedPackaging
        : Shipping.removedPackaging;
      Shipping.removeProduction = req.body.removeProduction
        ? req.body.removeProduction
        : Shipping.removeProduction;
      Shipping.row = req.body.row ? req.body.row : Shipping.row;
      Shipping.runtime = req.body.runtime ? req.body.runtime : Shipping.runtime;
      Shipping.saved = req.body.saved ? req.body.saved : Shipping.saved;
      Shipping.shipping_status = req.body.shipping_status
        ? req.body.shipping_status
        : Shipping.shipping_status;
      Shipping.SHIPPINGCODE = req.body.SHIPPINGCODE
        ? req.body.SHIPPINGCODE
        : Shipping.SHIPPINGCODE;
      Shipping.stocking = req.body.stocking
        ? req.body.stocking
        : Shipping.stocking;
      Shipping.unbranded = req.body.unbranded
        ? req.body.unbranded
        : Shipping.unbranded;
      Shipping.userset = req.body.userset ? req.body.userset : Shipping.userset;
      Shipping.VGrecipe = req.body.VGrecipe
        ? req.body.VGrecipe
        : Shipping.VGrecipe;
      Shipping.VGval = req.body.VGval ? req.body.VGval : Shipping.VGval;
      Shipping.wentNegative = req.body.wentNegative
        ? req.body.wentNegative
        : Shipping.wentNegative;

      Shipping.save(function(err, Shipping) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Shipping.",
            error: err
          });
        }

        return res.json(Shipping);
      });
    });
  },

  /**
   * ShippingController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Shipping] = id;
    ShippingModel.findOneAndRemove(obj, function(err, Shipping) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Shipping.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
