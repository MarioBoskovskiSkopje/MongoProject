var OrdersModel = require("../models/OrdersModel.js");

/**
 * OrdersController.js
 *
 * @description :: Server-side logic for managing Orderss.
 */
module.exports = {
  /**
   * OrdersController.list()
   */
  list: function(req, res) {
    OrdersModel.find(function(err, Orderss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Orders.",
          error: err
        });
      }
      return res.json(Orderss);
    });
  },

  /**
   * OrdersController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Orders] = id;
    OrdersModel.findOne(obj, function(err, Orders) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Orders.",
          error: err
        });
      }
      if (!Orders) {
        return res.status(404).json({
          message: "No such Orders"
        });
      }
      return res.json(Orders);
    });
  },

  /**
   * OrdersController.create()
   */
  create: function(req, res) {
    var Orders = new OrdersModel({
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
      removedProduction: req.body.removedProduction,
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

    Orders.save(function(err, Orders) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Orders",
          error: err
        });
      }
      return res.status(201).json(Orders);
    });
  },

  /**
   * OrdersController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Orders] = id;
    OrdersModel.findOne(obj, function(err, Orders) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Orders",
          error: err
        });
      }
      if (!Orders) {
        return res.status(404).json({
          message: "No such Orders"
        });
      }

      Orders.AGrecipe = req.body.AGrecipe ? req.body.AGrecipe : Orders.AGrecipe;
      Orders.AGval = req.body.AGval ? req.body.AGval : Orders.AGval;
      Orders.backtubed = req.body.backtubed
        ? req.body.backtubed
        : Orders.backtubed;
      Orders.batch = req.body.batch ? req.body.batch : Orders.batch;
      Orders.botlabel = req.body.botlabel ? req.body.botlabel : Orders.botlabel;
      Orders.botlabelsku = req.body.botlabelsku
        ? req.body.botlabelsku
        : Orders.botlabelsku;
      Orders.botSKU = req.body.botSKU ? req.body.botSKU : Orders.botSKU;
      Orders.bottles = req.body.bottles ? req.body.bottles : Orders.bottles;
      Orders.boxname = req.body.boxname ? req.body.boxname : Orders.boxname;
      Orders.brand = req.body.brand ? req.body.brand : Orders.brand;
      Orders.branded = req.body.branded ? req.body.branded : Orders.branded;
      Orders.brandSKU = req.body.brandSKU ? req.body.brandSKU : Orders.brandSKU;
      Orders.bsize = req.body.bsize ? req.body.bsize : Orders.bsize;
      Orders.btype = req.body.btype ? req.body.btype : Orders.btype;
      Orders.CBDrecipe = req.body.CBDrecipe
        ? req.body.CBDrecipe
        : Orders.CBDrecipe;
      Orders.CBDvalue = req.body.CBDvalue ? req.body.CBDvalue : Orders.CBDvalue;
      Orders.coloredpremix = req.body.coloredpremix
        ? req.body.coloredpremix
        : Orders.coloredpremix;
      Orders.CompletionDate = req.body.CompletionDate
        ? req.body.CompletionDate
        : Orders.CompletionDate;
      Orders.customer = req.body.customer ? req.body.customer : Orders.customer;
      Orders.customerSKU = req.body.customerSKU
        ? req.body.customerSKU
        : Orders.customerSKU;
      Orders.dateshipped = req.body.dateshipped
        ? req.body.dateshipped
        : Orders.dateshipped;
      Orders.fill = req.body.fill ? req.body.fill : Orders.fill;
      Orders.final_status = req.body.final_status
        ? req.body.final_status
        : Orders.final_status;
      Orders.flavour = req.body.flavour ? req.body.flavour : Orders.flavour;
      Orders.flavrecipe = req.body.flavrecipe
        ? req.body.flavrecipe
        : Orders.flavrecipe;
      Orders.flavvalue = req.body.flavvalue
        ? req.body.flavvalue
        : Orders.flavvalue;
      Orders.labeling_status = req.body.labeling_status
        ? req.body.labeling_status
        : Orders.labeling_status;
      Orders.lid = req.body.lid ? req.body.lid : Orders.lid;
      Orders.lidSKU = req.body.lidSKU ? req.body.lidSKU : Orders.lidSKU;
      Orders.MCTrecipe = req.body.MCTrecipe
        ? req.body.MCTrecipe
        : Orders.MCTrecipe;
      Orders.MCTval = req.body.MCTval ? req.body.MCTval : Orders.MCTval;
      Orders.mixing = req.body.mixing ? req.body.mixing : Orders.mixing;
      Orders.mixing_status = req.body.mixing_status
        ? req.body.mixing_status
        : Orders.mixing_status;
      Orders.NIB = req.body.NIB ? req.body.NIB : Orders.NIB;
      Orders.Nico = req.body.Nico ? req.body.Nico : Orders.Nico;
      Orders.Nicotrecipe = req.body.Nicotrecipe
        ? req.body.Nicotrecipe
        : Orders.Nicotrecipe;
      Orders.Nicotrecipesalts = req.body.Nicotrecipesalts
        ? req.body.Nicotrecipesalts
        : Orders.Nicotrecipesalts;
      Orders.orderdate = req.body.orderdate
        ? req.body.orderdate
        : Orders.orderdate;
      Orders.orderID = req.body.orderID ? req.body.orderID : Orders.orderID;
      Orders.packaging_status = req.body.packaging_status
        ? req.body.packaging_status
        : Orders.packaging_status;
      Orders.packagingType = req.body.packagingType
        ? req.body.packagingType
        : Orders.packagingType;
      Orders.packlabel = req.body.packlabel
        ? req.body.packlabel
        : Orders.packlabel;
      Orders.packlabelsku = req.body.packlabelsku
        ? req.body.packlabelsku
        : Orders.packlabelsku;
      Orders.partialPackaging = req.body.partialPackaging
        ? req.body.partialPackaging
        : Orders.partialPackaging;
      Orders.partialProduction = req.body.partialProduction
        ? req.body.partialProduction
        : Orders.partialProduction;
      Orders.PGrecipe = req.body.PGrecipe ? req.body.PGrecipe : Orders.PGrecipe;
      Orders.PGval = req.body.PGval ? req.body.PGval : Orders.PGval;
      Orders.ppb = req.body.ppb ? req.body.ppb : Orders.ppb;
      Orders.ppp = req.body.ppp ? req.body.ppp : Orders.ppp;
      Orders.premixed = req.body.premixed ? req.body.premixed : Orders.premixed;
      Orders.PRINTCODE = req.body.PRINTCODE
        ? req.body.PRINTCODE
        : Orders.PRINTCODE;
      Orders.printing_status = req.body.printing_status
        ? req.body.printing_status
        : Orders.printing_status;
      Orders.priority = req.body.priority ? req.body.priority : Orders.priority;
      Orders.productcode = req.body.productcode
        ? req.body.productcode
        : Orders.productcode;
      Orders.productdescription = req.body.productdescription
        ? req.body.productdescription
        : Orders.productdescription;
      Orders.production_status = req.body.production_status
        ? req.body.production_status
        : Orders.production_status;
      Orders.QTY = req.body.QTY ? req.body.QTY : Orders.QTY;
      Orders.recipe = req.body.recipe ? req.body.recipe : Orders.recipe;
      Orders.removedPackaging = req.body.removedPackaging
        ? req.body.removedPackaging
        : Orders.removedPackaging;
      Orders.removedProduction = req.body.removedProduction
        ? req.body.removedProduction
        : Orders.removedProduction;
      Orders.row = req.body.row ? req.body.row : Orders.row;
      Orders.runtime = req.body.runtime ? req.body.runtime : Orders.runtime;
      Orders.saved = req.body.saved ? req.body.saved : Orders.saved;
      Orders.shipping_status = req.body.shipping_status
        ? req.body.shipping_status
        : Orders.shipping_status;
      Orders.SHIPPINGCODE = req.body.SHIPPINGCODE
        ? req.body.SHIPPINGCODE
        : Orders.SHIPPINGCODE;
      Orders.stocking = req.body.stocking ? req.body.stocking : Orders.stocking;
      Orders.unbranded = req.body.unbranded
        ? req.body.unbranded
        : Orders.unbranded;
      Orders.userset = req.body.userset ? req.body.userset : Orders.userset;
      Orders.VGrecipe = req.body.VGrecipe ? req.body.VGrecipe : Orders.VGrecipe;
      Orders.VGval = req.body.VGval ? req.body.VGval : Orders.VGval;
      Orders.wentNegative = req.body.wentNegative
        ? req.body.wentNegative
        : Orders.wentNegative;

      Orders.save(function(err, Orders) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Orders.",
            error: err
          });
        }

        return res.json(Orders);
      });
    });
  },

  /**
   * OrdersController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Orders] = id;
    OrdersModel.findOneAndRemove(obj, function(err, Orders) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Orders.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
