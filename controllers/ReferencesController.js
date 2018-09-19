var ReferencesModel = require('../models/ReferencesModel.js');

/**
 * ReferencesController.js
 *
 * @description :: Server-side logic for managing Referencess.
 */
module.exports = {

    /**
     * ReferencesController.list()
     */
    list: function (req, res) {
        ReferencesModel.find(function (err, Referencess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting References.',
                    error: err
                });
            }
            return res.json(Referencess);
        });
    },

    /**
     * ReferencesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ReferencesModel.findOne({_id: id}, function (err, References) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting References.',
                    error: err
                });
            }
            if (!References) {
                return res.status(404).json({
                    message: 'No such References'
                });
            }
            return res.json(References);
        });
    },

    /**
     * ReferencesController.create()
     */
    create: function (req, res) {
        var References = new ReferencesModel({
			ProductCodes : req.body.ProductCodes

        });

        References.save(function (err, References) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating References',
                    error: err
                });
            }
            return res.status(201).json(References);
        });
    },

    /**
     * ReferencesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ReferencesModel.findOne({_id: id}, function (err, References) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting References',
                    error: err
                });
            }
            if (!References) {
                return res.status(404).json({
                    message: 'No such References'
                });
            }

            References.ProductCodes = req.body.ProductCodes ? req.body.ProductCodes : References.ProductCodes;
			
            References.save(function (err, References) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating References.',
                        error: err
                    });
                }

                return res.json(References);
            });
        });
    },

    /**
     * ReferencesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ReferencesModel.findByIdAndRemove(id, function (err, References) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the References.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
