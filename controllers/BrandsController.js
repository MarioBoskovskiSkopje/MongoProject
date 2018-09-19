var BrandsModel = require("../models/BrandsModel.js");

/**
 * BrandsController.js
 *
 * @description :: Server-side logic for managing Brandss.
 */
module.exports = {
  /**
   * BrandsController.list()
   */
  list: function(req, res) {
    BrandsModel.find(function(err, Brandss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Brands.",
          error: err
        });
      }
      return res.json(Brandss);
    });
  },

  /**
   * BrandsController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    BrandsModel.findOne({ _id: id }, function(err, Brands) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Brands.",
          error: err
        });
      }
      if (!Brands) {
        return res.status(404).json({
          message: "No such Brands"
        });
      }
      return res.json(Brands);
    });
  },

  /**
   * BrandsController.create()
   */
  create: function(req, res) {
    var Brands = new BrandsModel({
      name: req.body.name,
      sku: req.body.sku
    });

    Brands.save(function(err, Brands) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Brands",
          error: err
        });
      }
      return res.status(201).json(Brands);
    });
  },

  /**
   * BrandsController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    BrandsModel.findOne({ _id: id }, function(err, Brands) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Brands",
          error: err
        });
      }
      if (!Brands) {
        return res.status(404).json({
          message: "No such Brands"
        });
      }

      Brands.name = req.body.name ? req.body.name : Brands.name;
      Brands.sku = req.body.sku ? req.body.sku : Brands.sku;

      Brands.save(function(err, Brands) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Brands.",
            error: err
          });
        }

        return res.json(Brands);
      });
    });
  },

  /**
   * BrandsController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    BrandsModel.findByIdAndRemove(id, function(err, Brands) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Brands.",
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
