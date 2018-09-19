var LabellingModel = require('../models/LabellingModel.js');

/**
 * LabellingController.js
 *
 * @description :: Server-side logic for managing Labellings.
 */
module.exports = {

    /**
     * LabellingController.list()
     */
    list: function (req, res) {
        LabellingModel.find(function (err, Labellings) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Labelling.',
                    error: err
                });
            }
            return res.json(Labellings);
        });
    },

    /**
     * LabellingController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        LabellingModel.findOne({_id: id}, function (err, Labelling) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Labelling.',
                    error: err
                });
            }
            if (!Labelling) {
                return res.status(404).json({
                    message: 'No such Labelling'
                });
            }
            return res.json(Labelling);
        });
    },

    /**
     * LabellingController.create()
     */
    create: function (req, res) {
        var Labelling = new LabellingModel({
			backtubed : req.body.backtubed,
			batch : req.body.batch,
			botlabel : req.body.botlabel,
			botlabelsku : req.body.botlabelsku,
			botSKU : req.body.botSKU,
			bottles : req.body.bottles,
			boxname : req.body.boxname,
			brand : req.body.brand,
			branded : req.body.branded,
			brandSKU : req.body.brandSKU,
			bsize : req.body.bsize,
			btype : req.body.btype,
			Completed : req.body.Completed,
			CompletionDate : req.body.CompletionDate,
			customer : req.body.customer,
			customerSKU : req.body.customerSKU,
			final_status : req.body.final_status,
			flavour : req.body.flavour,
			labeling_status : req.body.labeling_status,
			lid : req.body.lid,
			lidSKU : req.body.lidSKU,
			Location : req.body.Location,
			mixing : req.body.mixing,
			mixing_status : req.body.mixing_status,
			movedtoNext : req.body.movedtoNext,
			numLabelsBottles : req.body.numLabelsBottles,
			numLabelsTubes : req.body.numLabelsTubes,
			orderdate : req.body.orderdate,
			orderID : req.body.orderID,
			packaging_status : req.body.packaging_status,
			packagingType : req.body.packagingType,
			packlabel : req.body.packlabel,
			packlabelsku : req.body.packlabelsku,
			ppb : req.body.ppb,
			ppp : req.body.ppp,
			premixed : req.body.premixed,
			printing_status : req.body.printing_status,
			productcode : req.body.productcode,
			productdescription : req.body.productdescription,
			ProductionCompleted : req.body.ProductionCompleted,
			recipe : req.body.recipe,
			row : req.body.row,
			starttime : req.body.starttime,
			unbranded : req.body.unbranded,
			userset : req.body.userset

        });

        Labelling.save(function (err, Labelling) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Labelling',
                    error: err
                });
            }
            return res.status(201).json(Labelling);
        });
    },

    /**
     * LabellingController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        LabellingModel.findOne({_id: id}, function (err, Labelling) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Labelling',
                    error: err
                });
            }
            if (!Labelling) {
                return res.status(404).json({
                    message: 'No such Labelling'
                });
            }

            Labelling.backtubed = req.body.backtubed ? req.body.backtubed : Labelling.backtubed;
			Labelling.batch = req.body.batch ? req.body.batch : Labelling.batch;
			Labelling.botlabel = req.body.botlabel ? req.body.botlabel : Labelling.botlabel;
			Labelling.botlabelsku = req.body.botlabelsku ? req.body.botlabelsku : Labelling.botlabelsku;
			Labelling.botSKU = req.body.botSKU ? req.body.botSKU : Labelling.botSKU;
			Labelling.bottles = req.body.bottles ? req.body.bottles : Labelling.bottles;
			Labelling.boxname = req.body.boxname ? req.body.boxname : Labelling.boxname;
			Labelling.brand = req.body.brand ? req.body.brand : Labelling.brand;
			Labelling.branded = req.body.branded ? req.body.branded : Labelling.branded;
			Labelling.brandSKU = req.body.brandSKU ? req.body.brandSKU : Labelling.brandSKU;
			Labelling.bsize = req.body.bsize ? req.body.bsize : Labelling.bsize;
			Labelling.btype = req.body.btype ? req.body.btype : Labelling.btype;
			Labelling.Completed = req.body.Completed ? req.body.Completed : Labelling.Completed;
			Labelling.CompletionDate = req.body.CompletionDate ? req.body.CompletionDate : Labelling.CompletionDate;
			Labelling.customer = req.body.customer ? req.body.customer : Labelling.customer;
			Labelling.customerSKU = req.body.customerSKU ? req.body.customerSKU : Labelling.customerSKU;
			Labelling.final_status = req.body.final_status ? req.body.final_status : Labelling.final_status;
			Labelling.flavour = req.body.flavour ? req.body.flavour : Labelling.flavour;
			Labelling.labeling_status = req.body.labeling_status ? req.body.labeling_status : Labelling.labeling_status;
			Labelling.lid = req.body.lid ? req.body.lid : Labelling.lid;
			Labelling.lidSKU = req.body.lidSKU ? req.body.lidSKU : Labelling.lidSKU;
			Labelling.Location = req.body.Location ? req.body.Location : Labelling.Location;
			Labelling.mixing = req.body.mixing ? req.body.mixing : Labelling.mixing;
			Labelling.mixing_status = req.body.mixing_status ? req.body.mixing_status : Labelling.mixing_status;
			Labelling.movedtoNext = req.body.movedtoNext ? req.body.movedtoNext : Labelling.movedtoNext;
			Labelling.numLabelsBottles = req.body.numLabelsBottles ? req.body.numLabelsBottles : Labelling.numLabelsBottles;
			Labelling.numLabelsTubes = req.body.numLabelsTubes ? req.body.numLabelsTubes : Labelling.numLabelsTubes;
			Labelling.orderdate = req.body.orderdate ? req.body.orderdate : Labelling.orderdate;
			Labelling.orderID = req.body.orderID ? req.body.orderID : Labelling.orderID;
			Labelling.packaging_status = req.body.packaging_status ? req.body.packaging_status : Labelling.packaging_status;
			Labelling.packagingType = req.body.packagingType ? req.body.packagingType : Labelling.packagingType;
			Labelling.packlabel = req.body.packlabel ? req.body.packlabel : Labelling.packlabel;
			Labelling.packlabelsku = req.body.packlabelsku ? req.body.packlabelsku : Labelling.packlabelsku;
			Labelling.ppb = req.body.ppb ? req.body.ppb : Labelling.ppb;
			Labelling.ppp = req.body.ppp ? req.body.ppp : Labelling.ppp;
			Labelling.premixed = req.body.premixed ? req.body.premixed : Labelling.premixed;
			Labelling.printing_status = req.body.printing_status ? req.body.printing_status : Labelling.printing_status;
			Labelling.productcode = req.body.productcode ? req.body.productcode : Labelling.productcode;
			Labelling.productdescription = req.body.productdescription ? req.body.productdescription : Labelling.productdescription;
			Labelling.ProductionCompleted = req.body.ProductionCompleted ? req.body.ProductionCompleted : Labelling.ProductionCompleted;
			Labelling.recipe = req.body.recipe ? req.body.recipe : Labelling.recipe;
			Labelling.row = req.body.row ? req.body.row : Labelling.row;
			Labelling.starttime = req.body.starttime ? req.body.starttime : Labelling.starttime;
			Labelling.unbranded = req.body.unbranded ? req.body.unbranded : Labelling.unbranded;
			Labelling.userset = req.body.userset ? req.body.userset : Labelling.userset;
			
            Labelling.save(function (err, Labelling) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Labelling.',
                        error: err
                    });
                }

                return res.json(Labelling);
            });
        });
    },

    /**
     * LabellingController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        LabellingModel.findByIdAndRemove(id, function (err, Labelling) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Labelling.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
