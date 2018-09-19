var PrintingModel = require('../models/PrintingModel.js');

/**
 * PrintingController.js
 *
 * @description :: Server-side logic for managing Printings.
 */
module.exports = {

    /**
     * PrintingController.list()
     */
    list: function (req, res) {
        PrintingModel.find(function (err, Printings) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Printing.',
                    error: err
                });
            }
            return res.json(Printings);
        });
    },

    /**
     * PrintingController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        PrintingModel.findOne({_id: id}, function (err, Printing) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Printing.',
                    error: err
                });
            }
            if (!Printing) {
                return res.status(404).json({
                    message: 'No such Printing'
                });
            }
            return res.json(Printing);
        });
    },

    /**
     * PrintingController.create()
     */
    create: function (req, res) {
        var Printing = new PrintingModel({
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
			premxed : req.body.premxed,
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

        Printing.save(function (err, Printing) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Printing',
                    error: err
                });
            }
            return res.status(201).json(Printing);
        });
    },

    /**
     * PrintingController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        PrintingModel.findOne({_id: id}, function (err, Printing) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Printing',
                    error: err
                });
            }
            if (!Printing) {
                return res.status(404).json({
                    message: 'No such Printing'
                });
            }

            Printing.backtubed = req.body.backtubed ? req.body.backtubed : Printing.backtubed;
			Printing.batch = req.body.batch ? req.body.batch : Printing.batch;
			Printing.botlabel = req.body.botlabel ? req.body.botlabel : Printing.botlabel;
			Printing.botlabelsku = req.body.botlabelsku ? req.body.botlabelsku : Printing.botlabelsku;
			Printing.botSKU = req.body.botSKU ? req.body.botSKU : Printing.botSKU;
			Printing.bottles = req.body.bottles ? req.body.bottles : Printing.bottles;
			Printing.boxname = req.body.boxname ? req.body.boxname : Printing.boxname;
			Printing.brand = req.body.brand ? req.body.brand : Printing.brand;
			Printing.branded = req.body.branded ? req.body.branded : Printing.branded;
			Printing.brandSKU = req.body.brandSKU ? req.body.brandSKU : Printing.brandSKU;
			Printing.bsize = req.body.bsize ? req.body.bsize : Printing.bsize;
			Printing.btype = req.body.btype ? req.body.btype : Printing.btype;
			Printing.Completed = req.body.Completed ? req.body.Completed : Printing.Completed;
			Printing.CompletionDate = req.body.CompletionDate ? req.body.CompletionDate : Printing.CompletionDate;
			Printing.customer = req.body.customer ? req.body.customer : Printing.customer;
			Printing.customerSKU = req.body.customerSKU ? req.body.customerSKU : Printing.customerSKU;
			Printing.final_status = req.body.final_status ? req.body.final_status : Printing.final_status;
			Printing.flavour = req.body.flavour ? req.body.flavour : Printing.flavour;
			Printing.labeling_status = req.body.labeling_status ? req.body.labeling_status : Printing.labeling_status;
			Printing.lid = req.body.lid ? req.body.lid : Printing.lid;
			Printing.lidSKU = req.body.lidSKU ? req.body.lidSKU : Printing.lidSKU;
			Printing.Location = req.body.Location ? req.body.Location : Printing.Location;
			Printing.mixing = req.body.mixing ? req.body.mixing : Printing.mixing;
			Printing.mixing_status = req.body.mixing_status ? req.body.mixing_status : Printing.mixing_status;
			Printing.movedtoNext = req.body.movedtoNext ? req.body.movedtoNext : Printing.movedtoNext;
			Printing.numLabelsBottles = req.body.numLabelsBottles ? req.body.numLabelsBottles : Printing.numLabelsBottles;
			Printing.numLabelsTubes = req.body.numLabelsTubes ? req.body.numLabelsTubes : Printing.numLabelsTubes;
			Printing.orderdate = req.body.orderdate ? req.body.orderdate : Printing.orderdate;
			Printing.orderID = req.body.orderID ? req.body.orderID : Printing.orderID;
			Printing.packaging_status = req.body.packaging_status ? req.body.packaging_status : Printing.packaging_status;
			Printing.packagingType = req.body.packagingType ? req.body.packagingType : Printing.packagingType;
			Printing.packlabel = req.body.packlabel ? req.body.packlabel : Printing.packlabel;
			Printing.packlabelsku = req.body.packlabelsku ? req.body.packlabelsku : Printing.packlabelsku;
			Printing.ppb = req.body.ppb ? req.body.ppb : Printing.ppb;
			Printing.ppp = req.body.ppp ? req.body.ppp : Printing.ppp;
			Printing.premxed = req.body.premxed ? req.body.premxed : Printing.premxed;
			Printing.printing_status = req.body.printing_status ? req.body.printing_status : Printing.printing_status;
			Printing.productcode = req.body.productcode ? req.body.productcode : Printing.productcode;
			Printing.productdescription = req.body.productdescription ? req.body.productdescription : Printing.productdescription;
			Printing.ProductionCompleted = req.body.ProductionCompleted ? req.body.ProductionCompleted : Printing.ProductionCompleted;
			Printing.recipe = req.body.recipe ? req.body.recipe : Printing.recipe;
			Printing.row = req.body.row ? req.body.row : Printing.row;
			Printing.starttime = req.body.starttime ? req.body.starttime : Printing.starttime;
			Printing.unbranded = req.body.unbranded ? req.body.unbranded : Printing.unbranded;
			Printing.userset = req.body.userset ? req.body.userset : Printing.userset;
			
            Printing.save(function (err, Printing) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Printing.',
                        error: err
                    });
                }

                return res.json(Printing);
            });
        });
    },

    /**
     * PrintingController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        PrintingModel.findByIdAndRemove(id, function (err, Printing) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Printing.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
