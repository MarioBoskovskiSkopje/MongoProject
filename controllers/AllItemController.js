var idenifiers = require("../identifiers.js");
var models = require("../models/index.js");
const { JSONtoARR } = require("../helper_functions");
/**
 * BottleTypesController.js
 *
 * @description :: Server-side logic for managing BottleTypess.
 */
module.exports = {
  /**
   * BottleTypesController.list()
   */
  list: async function(req, res) {
    var path = req.query.path;
    var id = req.query.id;
    var orderBy = req.query.orderBy;

    var Model = models[path];
    if (id === undefined) {
      if (orderBy === undefined) {
        Model.find(function(err, items) {
          if (err) {
            return res.send(null);
          }

          return res.json(items);
        });
      } else {
        var obj = {};
        obj[orderBy] = req.query.equalTo;
        var obj2 = {};
        obj2[orderBy] = "descending";
        var results = await Model.find(obj, function(err, items) {
          if (err) {
            return res.send(null);
          }

          return items;
        }).sort(obj2);
        res.json(results);
      }
    } else {
      var obj = {};
      obj[idenifiers[path]] = id;
      Model.findOne(obj, function(err, item) {
        if (err) {
          return res.send(null);
        }
        if (!item) {
          return res.send(null);
        }
        return res.json(item);
      });
    }
  },

  /**
   * BottleTypesController.create()
   */
  create: function(req, res) {
    var path = req.query.path;
    var Model = models[path];
    var obj = {};
    obj[idenifiers[path]] = req.body[idenifiers[path]];
    Model.findOne(obj, (err, itemRes) => {
      if (err) {
        return res.status(500).json({
          message: "Error when creating " + path,
          error: err
        });
      }
      if (itemRes == null) {
        var CreateModel = new Model(req.body);
        CreateModel.save();
        return res.status(201).send("created");
      }
      var keys = Object.keys(req.body);
      keys.map(function(key) {
        itemRes[key] = req.body[key] ? req.body[key] : itemRes[key];
      });

      itemRes.save();
      return res.status(201).send("updated");
    });
  },

  /**
   * BottleTypesController.update()
   */
  update: async function(req, res) {
    var path = req.query.path;
    var Model = models[path];
    var items = JSONtoARR(req.body);

    var statusGlobal = {};

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var obj = {};
      obj[idenifiers[path]] = item[idenifiers[path]];
      await Model.findOne(obj, (err, itemRes) => {
        if (err) {
          statusGlobal[item[idenifiers[path]]] = err;
        }
        if (itemRes == null) {
          var CreateModel = new Model(item);
          CreateModel.save();
          statusGlobal[item[idenifiers[path]]] = "Created";
        }
        var keys = Object.keys(item);
        keys.map(function(key) {
          itemRes[key] = item[key] ? item[key] : itemRes[key];
        });

        itemRes.save();
        statusGlobal[item[idenifiers[path]]] = "Updated";
      });
    }

    res.send(statusGlobal);
  },

  /**
   * BottleTypesController.remove()
   */
  remove: function(req, res) {
    var path = req.query.path;
    var id = req.query.id;
    var obj = {};
    obj[idenifiers[path]] = id;
    var Model = models[path];
    Model.findOneAndRemove(obj, function(err, item) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the " + path,
          error: err
        });
      }
      return res.status(204).json();
    });
  }

  //   find: function(req, res) {
  //     var id = req.params.id;
  //     var obj = {};
  //     obj[idenifiers.BottleTypes] = id;
  //     BottleTypesModel.findOne(obj, function(err, BottleTypes) {
  //       if (err) {
  //         return res.status(500).json({
  //           message: "Error when getting BottleTypes.",
  //           error: err
  //         });
  //       }
  //       if (!BottleTypes) {
  //         return res.status(404).json({
  //           message: "No such BottleTypes"
  //         });
  //       }
  //       return res.json(BottleTypes);
  //     });
  //   }
};
