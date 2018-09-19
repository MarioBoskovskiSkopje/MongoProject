var MixingTeamModel = require('../models/MixingTeamModel.js');

/**
 * MixingTeamController.js
 *
 * @description :: Server-side logic for managing MixingTeams.
 */
module.exports = {

    /**
     * MixingTeamController.list()
     */
    list: function (req, res) {
        MixingTeamModel.find(function (err, MixingTeams) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MixingTeam.',
                    error: err
                });
            }
            return res.json(MixingTeams);
        });
    },

    /**
     * MixingTeamController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        MixingTeamModel.findOne({_id: id}, function (err, MixingTeam) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MixingTeam.',
                    error: err
                });
            }
            if (!MixingTeam) {
                return res.status(404).json({
                    message: 'No such MixingTeam'
                });
            }
            return res.json(MixingTeam);
        });
    },

    /**
     * MixingTeamController.create()
     */
    create: function (req, res) {
        var MixingTeam = new MixingTeamModel({
			batch : req.body.batch,
			Batches : req.body.Batches,
			CBDvalue : req.body.CBDvalue,
			Completed : req.body.Completed,
			CompletionDate : req.body.CompletionDate,
			customer : req.body.customer,
			flavour : req.body.flavour,
			FLAVOUR : req.body.FLAVOUR,
			flavSupplier : req.body.flavSupplier,
			flavvalue : req.body.flavvalue,
			Location : req.body.Location,
			MIXNAME : req.body.MIXNAME,
			movedtoNext : req.body.movedtoNext,
			Nico : req.body.Nico,
			nicSupplier : req.body.nicSupplier,
			Notes : req.body.Notes,
			orderdate : req.body.orderdate,
			orderID : req.body.orderID,
			pgSupplier : req.body.pgSupplier,
			PGval : req.body.PGval,
			prodDate : req.body.prodDate,
			QTYTOTAL : req.body.QTYTOTAL,
			recipe : req.body.recipe,
			RECIPE : req.body.RECIPE,
			row : req.body.row,
			starttime : req.body.starttime,
			userset : req.body.userset,
			vgSupplier : req.body.vgSupplier,
			VGval : req.body.VGval

        });

        MixingTeam.save(function (err, MixingTeam) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating MixingTeam',
                    error: err
                });
            }
            return res.status(201).json(MixingTeam);
        });
    },

    /**
     * MixingTeamController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        MixingTeamModel.findOne({_id: id}, function (err, MixingTeam) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MixingTeam',
                    error: err
                });
            }
            if (!MixingTeam) {
                return res.status(404).json({
                    message: 'No such MixingTeam'
                });
            }

            MixingTeam.batch = req.body.batch ? req.body.batch : MixingTeam.batch;
			MixingTeam.Batches = req.body.Batches ? req.body.Batches : MixingTeam.Batches;
			MixingTeam.CBDvalue = req.body.CBDvalue ? req.body.CBDvalue : MixingTeam.CBDvalue;
			MixingTeam.Completed = req.body.Completed ? req.body.Completed : MixingTeam.Completed;
			MixingTeam.CompletionDate = req.body.CompletionDate ? req.body.CompletionDate : MixingTeam.CompletionDate;
			MixingTeam.customer = req.body.customer ? req.body.customer : MixingTeam.customer;
			MixingTeam.flavour = req.body.flavour ? req.body.flavour : MixingTeam.flavour;
			MixingTeam.FLAVOUR = req.body.FLAVOUR ? req.body.FLAVOUR : MixingTeam.FLAVOUR;
			MixingTeam.flavSupplier = req.body.flavSupplier ? req.body.flavSupplier : MixingTeam.flavSupplier;
			MixingTeam.flavvalue = req.body.flavvalue ? req.body.flavvalue : MixingTeam.flavvalue;
			MixingTeam.Location = req.body.Location ? req.body.Location : MixingTeam.Location;
			MixingTeam.MIXNAME = req.body.MIXNAME ? req.body.MIXNAME : MixingTeam.MIXNAME;
			MixingTeam.movedtoNext = req.body.movedtoNext ? req.body.movedtoNext : MixingTeam.movedtoNext;
			MixingTeam.Nico = req.body.Nico ? req.body.Nico : MixingTeam.Nico;
			MixingTeam.nicSupplier = req.body.nicSupplier ? req.body.nicSupplier : MixingTeam.nicSupplier;
			MixingTeam.Notes = req.body.Notes ? req.body.Notes : MixingTeam.Notes;
			MixingTeam.orderdate = req.body.orderdate ? req.body.orderdate : MixingTeam.orderdate;
			MixingTeam.orderID = req.body.orderID ? req.body.orderID : MixingTeam.orderID;
			MixingTeam.pgSupplier = req.body.pgSupplier ? req.body.pgSupplier : MixingTeam.pgSupplier;
			MixingTeam.PGval = req.body.PGval ? req.body.PGval : MixingTeam.PGval;
			MixingTeam.prodDate = req.body.prodDate ? req.body.prodDate : MixingTeam.prodDate;
			MixingTeam.QTYTOTAL = req.body.QTYTOTAL ? req.body.QTYTOTAL : MixingTeam.QTYTOTAL;
			MixingTeam.recipe = req.body.recipe ? req.body.recipe : MixingTeam.recipe;
			MixingTeam.RECIPE = req.body.RECIPE ? req.body.RECIPE : MixingTeam.RECIPE;
			MixingTeam.row = req.body.row ? req.body.row : MixingTeam.row;
			MixingTeam.starttime = req.body.starttime ? req.body.starttime : MixingTeam.starttime;
			MixingTeam.userset = req.body.userset ? req.body.userset : MixingTeam.userset;
			MixingTeam.vgSupplier = req.body.vgSupplier ? req.body.vgSupplier : MixingTeam.vgSupplier;
			MixingTeam.VGval = req.body.VGval ? req.body.VGval : MixingTeam.VGval;
			
            MixingTeam.save(function (err, MixingTeam) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating MixingTeam.',
                        error: err
                    });
                }

                return res.json(MixingTeam);
            });
        });
    },

    /**
     * MixingTeamController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        MixingTeamModel.findByIdAndRemove(id, function (err, MixingTeam) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the MixingTeam.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
