var RecipesModel = require("../models/RecipesModel.js");

/**
 * RecipesController.js
 *
 * @description :: Server-side logic for managing Recipess.
 */
module.exports = {
  /**
   * RecipesController.list()
   */
  list: function(req, res) {
    RecipesModel.find(function(err, Recipess) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Recipes.",
          error: err
        });
      }
      return res.json(Recipess);
    });
  },

  /**
   * RecipesController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    RecipesModel.findOne({ _id: id }, function(err, Recipes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Recipes.",
          error: err
        });
      }
      if (!Recipes) {
        return res.status(404).json({
          message: "No such Recipes"
        });
      }
      return res.json(Recipes);
    });
  },

  /**
   * RecipesController.create()
   */
  create: function(req, res) {
    var Recipes = new RecipesModel({
      AGrec: req.body.AGrec,
      cbdrec: req.body.cbdrec,
      Flavrec: req.body.Flavrec,
      id: req.body.id,
      MCTrecipe: req.body.MCTrecipe,
      name: req.body.name,
      Nicorec: req.body.Nicorec,
      pg: req.body.pg,
      PGrec: req.body.PGrec,
      strength: req.body.strength,
      vg: req.body.vg,
      VGrec: req.body.VGrec
    });

    Recipes.save(function(err, Recipes) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Recipes",
          error: err
        });
      }
      return res.status(201).json(Recipes);
    });
  },

  /**
   * RecipesController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    RecipesModel.findOne({ _id: id }, function(err, Recipes) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Recipes",
          error: err
        });
      }
      if (!Recipes) {
        return res.status(404).json({
          message: "No such Recipes"
        });
      }

      Recipes.AGrec = req.body.AGrec ? req.body.AGrec : Recipes.AGrec;
      Recipes.cbdrec = req.body.cbdrec ? req.body.cbdrec : Recipes.cbdrec;
      Recipes.Flavrec = req.body.Flavrec ? req.body.Flavrec : Recipes.Flavrec;
      Recipes.id = req.body.id ? req.body.id : Recipes.id;
      Recipes.MCTrecipe = req.body.MCTrecipe
        ? req.body.MCTrecipe
        : Recipes.MCTrecipe;
      Recipes.name = req.body.name ? req.body.name : Recipes.name;
      Recipes.Nicorec = req.body.Nicorec ? req.body.Nicorec : Recipes.Nicorec;
      Recipes.pg = req.body.pg ? req.body.pg : Recipes.pg;
      Recipes.PGrec = req.body.PGrec ? req.body.PGrec : Recipes.PGrec;
      Recipes.strength = req.body.strength
        ? req.body.strength
        : Recipes.strength;
      Recipes.vg = req.body.vg ? req.body.vg : Recipes.vg;
      Recipes.VGrec = req.body.VGrec ? req.body.VGrec : Recipes.VGrec;

      Recipes.save(function(err, Recipes) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Recipes.",
            error: err
          });
        }

        return res.json(Recipes);
      });
    });
  },

  /**
   * RecipesController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    RecipesModel.findByIdAndRemove(id, function(err, Recipes) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Recipes.",
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
