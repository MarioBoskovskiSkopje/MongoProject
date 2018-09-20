var InventoryModel = require("../models/InventoryModel.js");

/**
 * InventoryController.js
 *
 * @description :: Server-side logic for managing Inventorys.
 */
module.exports = {
  /**
   * InventoryController.list()
   */
  list: function(req, res) {
    InventoryModel.find(function(err, Inventorys) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Inventory.",
          error: err
        });
      }
      return res.json(Inventorys);
    });
  },

  /**
   * InventoryController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Inventory] = id;
    InventoryModel.findOne(obj, function(err, Inventory) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Inventory.",
          error: err
        });
      }
      if (!Inventory) {
        return res.status(404).json({
          message: "No such Inventory"
        });
      }
      return res.json(Inventory);
    });
  },

  /**
   * InventoryController.create()
   */
  create: function(req, res) {
    var Inventory = new InventoryModel({
      addedtoQTY: req.body.addedtoQTY,
      delivdate: req.body.delivdate,
      desc: req.body.desc,
      eta: req.body.eta,
      key: req.body.key,
      name: req.body.name,
      note: req.body.note,
      orderdate: req.body.orderdate,
      page: req.body.page,
      paiddate: req.body.paiddate,
      quantity: req.body.quantity,
      row: req.body.row,
      sku: req.body.sku
    });

    Inventory.save(function(err, Inventory) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Inventory",
          error: err
        });
      }
      return res.status(201).json(Inventory);
    });
  },

  /**
   * InventoryController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Inventory] = id;
    InventoryModel.findOne(obj, function(err, Inventory) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Inventory",
          error: err
        });
      }
      if (!Inventory) {
        return res.status(404).json({
          message: "No such Inventory"
        });
      }

      Inventory.addedtoQTY = req.body.addedtoQTY
        ? req.body.addedtoQTY
        : Inventory.addedtoQTY;
      Inventory.delivdate = req.body.delivdate
        ? req.body.delivdate
        : Inventory.delivdate;
      Inventory.desc = req.body.desc ? req.body.desc : Inventory.desc;
      Inventory.eta = req.body.eta ? req.body.eta : Inventory.eta;
      Inventory.key = req.body.key ? req.body.key : Inventory.key;
      Inventory.name = req.body.name ? req.body.name : Inventory.name;
      Inventory.note = req.body.note ? req.body.note : Inventory.note;
      Inventory.orderdate = req.body.orderdate
        ? req.body.orderdate
        : Inventory.orderdate;
      Inventory.page = req.body.page ? req.body.page : Inventory.page;
      Inventory.paiddate = req.body.paiddate
        ? req.body.paiddate
        : Inventory.paiddate;
      Inventory.quantity = req.body.quantity
        ? req.body.quantity
        : Inventory.quantity;
      Inventory.row = req.body.row ? req.body.row : Inventory.row;
      Inventory.sku = req.body.sku ? req.body.sku : Inventory.sku;

      Inventory.save(function(err, Inventory) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Inventory.",
            error: err
          });
        }

        return res.json(Inventory);
      });
    });
  },

  /**
   * InventoryController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Inventory] = id;
    InventoryModel.findOneAndRemove(obj, function(err, Inventory) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Inventory.",
          error: err
        });
      }
      return res.status(204).json();
    });
  },
  find: function(req, res) {
    var key = req.params.key;
    BottleTypesModel.findOne({ key }, function(err, BottleTypes) {
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
