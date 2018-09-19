var SchedulesModel = require('../models/SchedulesModel.js');

/**
 * SchedulesController.js
 *
 * @description :: Server-side logic for managing Scheduless.
 */
module.exports = {

    /**
     * SchedulesController.list()
     */
    list: function (req, res) {
        SchedulesModel.find(function (err, Scheduless) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Schedules.',
                    error: err
                });
            }
            return res.json(Scheduless);
        });
    },

    /**
     * SchedulesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        SchedulesModel.findOne({_id: id}, function (err, Schedules) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Schedules.',
                    error: err
                });
            }
            if (!Schedules) {
                return res.status(404).json({
                    message: 'No such Schedules'
                });
            }
            return res.json(Schedules);
        });
    },

    /**
     * SchedulesController.create()
     */
    create: function (req, res) {
        var Schedules = new SchedulesModel({
			Fields : req.body.Fields

        });

        Schedules.save(function (err, Schedules) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Schedules',
                    error: err
                });
            }
            return res.status(201).json(Schedules);
        });
    },

    /**
     * SchedulesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        SchedulesModel.findOne({_id: id}, function (err, Schedules) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Schedules',
                    error: err
                });
            }
            if (!Schedules) {
                return res.status(404).json({
                    message: 'No such Schedules'
                });
            }

            Schedules.Fields = req.body.Fields ? req.body.Fields : Schedules.Fields;
			
            Schedules.save(function (err, Schedules) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Schedules.',
                        error: err
                    });
                }

                return res.json(Schedules);
            });
        });
    },

    /**
     * SchedulesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        SchedulesModel.findByIdAndRemove(id, function (err, Schedules) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Schedules.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
