var CustomersModel = require("../models/CustomersModel.js");

/**
 * CustomersController.js
 *
 * @description :: Server-side logic for managing Customerss.
 */
module.exports = {
  /**
   * CustomersController.list()
   */
  list: function(req, res) {
    CustomersModel.find(function(err, Customerss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Customers.",
          error: err
        });
      }
      return res.json(Customerss);
    });
  },

  /**
   * CustomersController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Customers] = id;
    CustomersModel.findOne(obj, function(err, Customers) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Customers.",
          error: err
        });
      }
      if (!Customers) {
        return res.status(404).json({
          message: "No such Customers"
        });
      }
      return res.json(Customers);
    });
  },

  /**
   * CustomersController.create()
   */
  create: function(req, res) {
    var Customers = new CustomersModel({
      address: req.body.address,
      name: req.body.name,
      sku: req.body.sku
    });

    Customers.save(function(err, Customers) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Customers",
          error: err
        });
      }
      return res.status(201).json(Customers);
    });
  },

  /**
   * CustomersController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Customers] = id;
    CustomersModel.findOne(obj, function(err, Customers) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Customers",
          error: err
        });
      }
      if (!Customers) {
        return res.status(404).json({
          message: "No such Customers"
        });
      }

      Customers.address = req.body.address
        ? req.body.address
        : Customers.address;
      Customers.name = req.body.name ? req.body.name : Customers.name;
      Customers.sku = req.body.sku ? req.body.sku : Customers.sku;

      Customers.save(function(err, Customers) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Customers.",
            error: err
          });
        }

        return res.json(Customers);
      });
    });
  },

  /**
   * CustomersController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    var obj = {};
    obj[idenifiers.Customers] = id;
    CustomersModel.findOneAndRemove(obj, function(err, Customers) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Customers.",
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
