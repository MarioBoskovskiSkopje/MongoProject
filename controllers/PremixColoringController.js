var PremixColoringModel = require('../models/PremixColoringModel.js');

/**
 * PremixColoringController.js
 *
 * @description :: Server-side logic for managing PremixColorings.
 */
module.exports = {

    /**
     * PremixColoringController.list()
     */
    list: function (req, res) {
        PremixColoringModel.find(function (err, PremixColorings) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PremixColoring.',
                    error: err
                });
            }
            return res.json(PremixColorings);
        });
    },

    /**
     * PremixColoringController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        PremixColoringModel.findOne({_id: id}, function (err, PremixColoring) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PremixColoring.',
                    error: err
                });
            }
            if (!PremixColoring) {
                return res.status(404).json({
                    message: 'No such PremixColoring'
                });
            }
            return res.json(PremixColoring);
        });
    },

    /**
     * PremixColoringController.create()
     */
    create: function (req, res) {
        var PremixColoring = new PremixColoringModel({
			AGrecipe : req.body.AGrecipe,
			AGval : req.body.AGval,
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
			CBDrecipe : req.body.CBDrecipe,
			CBDvalue : req.body.CBDvalue,
			coloredpremix : req.body.coloredpremix,
			Color : req.body.Color,
			CompletionDate : req.body.CompletionDate,
			customer : req.body.customer,
			customerSKU : req.body.customerSKU,
			dateshipped : req.body.dateshipped,
			fill : req.body.fill,
			final_status : req.body.final_status,
			flavour : req.body.flavour,
			flavrecipe : req.body.flavrecipe,
			flavvalue : req.body.flavvalue,
			labeling_status : req.body.labeling_status,
			lid : req.body.lid,
			lidSKU : req.body.lidSKU,
			MCTrecipe : req.body.MCTrecipe,
			MCTval : req.body.MCTval,
			mixing : req.body.mixing,
			mixing_status : req.body.mixing_status,
			NIB : req.body.NIB,
			NICO : req.body.NICO,
			Nicotrecipe : req.body.Nicotrecipe,
			Nicotrecipesalts : req.body.Nicotrecipesalts,
			orderdate : req.body.orderdate,
			orderID : req.body.orderID,
			packaging_status : req.body.packaging_status,
			packagingType : req.body.packagingType,
			packlabel : req.body.packlabel,
			packlabelsku : req.body.packlabelsku,
			partialPackaging : req.body.partialPackaging,
			partialProduction : req.body.partialProduction,
			PGrecipe : req.body.PGrecipe,
			PGval : req.body.PGval,
			ppb : req.body.ppb,
			ppp : req.body.ppp,
			premixed : req.body.premixed,
			printing_status : req.body.printing_status,
			premixSKU : req.body.premixSKU,
			premixSKUColored : req.body.premixSKUColored,
			premixdescr : req.body.premixdescr,
			premixdescrColored : req.body.premixdescrColored,
			priority : req.body.priority,
			productcode : req.body.productcode,
			productdescription : req.body.productdescription,
			production_status : req.body.production_status,
			QTY : req.body.QTY,
			recipe : req.body.recipe,
			removedPackaging : req.body.removedPackaging,
			removedProduction : req.body.removedProduction,
			row : req.body.row,
			runtime : req.body.runtime,
			saved : req.body.saved,
			shipping_status : req.body.shipping_status,
			SHIPPINGCODE : req.body.SHIPPINGCODE,
			stocking : req.body.stocking,
			unbranded : req.body.unbranded,
			userset : req.body.userset,
			VGrecipe : req.body.VGrecipe,
			VGval : req.body.VGval,
			wentNegative : req.body.wentNegative

        });

        PremixColoring.save(function (err, PremixColoring) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating PremixColoring',
                    error: err
                });
            }
            return res.status(201).json(PremixColoring);
        });
    },

    /**
     * PremixColoringController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        PremixColoringModel.findOne({_id: id}, function (err, PremixColoring) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PremixColoring',
                    error: err
                });
            }
            if (!PremixColoring) {
                return res.status(404).json({
                    message: 'No such PremixColoring'
                });
            }

            PremixColoring.AGrecipe = req.body.AGrecipe ? req.body.AGrecipe : PremixColoring.AGrecipe;
			PremixColoring.AGval = req.body.AGval ? req.body.AGval : PremixColoring.AGval;
			PremixColoring.backtubed = req.body.backtubed ? req.body.backtubed : PremixColoring.backtubed;
			PremixColoring.batch = req.body.batch ? req.body.batch : PremixColoring.batch;
			PremixColoring.botlabel = req.body.botlabel ? req.body.botlabel : PremixColoring.botlabel;
			PremixColoring.botlabelsku = req.body.botlabelsku ? req.body.botlabelsku : PremixColoring.botlabelsku;
			PremixColoring.botSKU = req.body.botSKU ? req.body.botSKU : PremixColoring.botSKU;
			PremixColoring.bottles = req.body.bottles ? req.body.bottles : PremixColoring.bottles;
			PremixColoring.boxname = req.body.boxname ? req.body.boxname : PremixColoring.boxname;
			PremixColoring.brand = req.body.brand ? req.body.brand : PremixColoring.brand;
			PremixColoring.branded = req.body.branded ? req.body.branded : PremixColoring.branded;
			PremixColoring.brandSKU = req.body.brandSKU ? req.body.brandSKU : PremixColoring.brandSKU;
			PremixColoring.bsize = req.body.bsize ? req.body.bsize : PremixColoring.bsize;
			PremixColoring.btype = req.body.btype ? req.body.btype : PremixColoring.btype;
			PremixColoring.CBDrecipe = req.body.CBDrecipe ? req.body.CBDrecipe : PremixColoring.CBDrecipe;
			PremixColoring.CBDvalue = req.body.CBDvalue ? req.body.CBDvalue : PremixColoring.CBDvalue;
			PremixColoring.coloredpremix = req.body.coloredpremix ? req.body.coloredpremix : PremixColoring.coloredpremix;
			PremixColoring.Color = req.body.Color ? req.body.Color : PremixColoring.Color;
			PremixColoring.CompletionDate = req.body.CompletionDate ? req.body.CompletionDate : PremixColoring.CompletionDate;
			PremixColoring.customer = req.body.customer ? req.body.customer : PremixColoring.customer;
			PremixColoring.customerSKU = req.body.customerSKU ? req.body.customerSKU : PremixColoring.customerSKU;
			PremixColoring.dateshipped = req.body.dateshipped ? req.body.dateshipped : PremixColoring.dateshipped;
			PremixColoring.fill = req.body.fill ? req.body.fill : PremixColoring.fill;
			PremixColoring.final_status = req.body.final_status ? req.body.final_status : PremixColoring.final_status;
			PremixColoring.flavour = req.body.flavour ? req.body.flavour : PremixColoring.flavour;
			PremixColoring.flavrecipe = req.body.flavrecipe ? req.body.flavrecipe : PremixColoring.flavrecipe;
			PremixColoring.flavvalue = req.body.flavvalue ? req.body.flavvalue : PremixColoring.flavvalue;
			PremixColoring.labeling_status = req.body.labeling_status ? req.body.labeling_status : PremixColoring.labeling_status;
			PremixColoring.lid = req.body.lid ? req.body.lid : PremixColoring.lid;
			PremixColoring.lidSKU = req.body.lidSKU ? req.body.lidSKU : PremixColoring.lidSKU;
			PremixColoring.MCTrecipe = req.body.MCTrecipe ? req.body.MCTrecipe : PremixColoring.MCTrecipe;
			PremixColoring.MCTval = req.body.MCTval ? req.body.MCTval : PremixColoring.MCTval;
			PremixColoring.mixing = req.body.mixing ? req.body.mixing : PremixColoring.mixing;
			PremixColoring.mixing_status = req.body.mixing_status ? req.body.mixing_status : PremixColoring.mixing_status;
			PremixColoring.NIB = req.body.NIB ? req.body.NIB : PremixColoring.NIB;
			PremixColoring.NICO = req.body.NICO ? req.body.NICO : PremixColoring.NICO;
			PremixColoring.Nicotrecipe = req.body.Nicotrecipe ? req.body.Nicotrecipe : PremixColoring.Nicotrecipe;
			PremixColoring.Nicotrecipesalts = req.body.Nicotrecipesalts ? req.body.Nicotrecipesalts : PremixColoring.Nicotrecipesalts;
			PremixColoring.orderdate = req.body.orderdate ? req.body.orderdate : PremixColoring.orderdate;
			PremixColoring.orderID = req.body.orderID ? req.body.orderID : PremixColoring.orderID;
			PremixColoring.packaging_status = req.body.packaging_status ? req.body.packaging_status : PremixColoring.packaging_status;
			PremixColoring.packagingType = req.body.packagingType ? req.body.packagingType : PremixColoring.packagingType;
			PremixColoring.packlabel = req.body.packlabel ? req.body.packlabel : PremixColoring.packlabel;
			PremixColoring.packlabelsku = req.body.packlabelsku ? req.body.packlabelsku : PremixColoring.packlabelsku;
			PremixColoring.partialPackaging = req.body.partialPackaging ? req.body.partialPackaging : PremixColoring.partialPackaging;
			PremixColoring.partialProduction = req.body.partialProduction ? req.body.partialProduction : PremixColoring.partialProduction;
			PremixColoring.PGrecipe = req.body.PGrecipe ? req.body.PGrecipe : PremixColoring.PGrecipe;
			PremixColoring.PGval = req.body.PGval ? req.body.PGval : PremixColoring.PGval;
			PremixColoring.ppb = req.body.ppb ? req.body.ppb : PremixColoring.ppb;
			PremixColoring.ppp = req.body.ppp ? req.body.ppp : PremixColoring.ppp;
			PremixColoring.premixed = req.body.premixed ? req.body.premixed : PremixColoring.premixed;
			PremixColoring.printing_status = req.body.printing_status ? req.body.printing_status : PremixColoring.printing_status;
			PremixColoring.premixSKU = req.body.premixSKU ? req.body.premixSKU : PremixColoring.premixSKU;
			PremixColoring.premixSKUColored = req.body.premixSKUColored ? req.body.premixSKUColored : PremixColoring.premixSKUColored;
			PremixColoring.premixdescr = req.body.premixdescr ? req.body.premixdescr : PremixColoring.premixdescr;
			PremixColoring.premixdescrColored = req.body.premixdescrColored ? req.body.premixdescrColored : PremixColoring.premixdescrColored;
			PremixColoring.priority = req.body.priority ? req.body.priority : PremixColoring.priority;
			PremixColoring.productcode = req.body.productcode ? req.body.productcode : PremixColoring.productcode;
			PremixColoring.productdescription = req.body.productdescription ? req.body.productdescription : PremixColoring.productdescription;
			PremixColoring.production_status = req.body.production_status ? req.body.production_status : PremixColoring.production_status;
			PremixColoring.QTY = req.body.QTY ? req.body.QTY : PremixColoring.QTY;
			PremixColoring.recipe = req.body.recipe ? req.body.recipe : PremixColoring.recipe;
			PremixColoring.removedPackaging = req.body.removedPackaging ? req.body.removedPackaging : PremixColoring.removedPackaging;
			PremixColoring.removedProduction = req.body.removedProduction ? req.body.removedProduction : PremixColoring.removedProduction;
			PremixColoring.row = req.body.row ? req.body.row : PremixColoring.row;
			PremixColoring.runtime = req.body.runtime ? req.body.runtime : PremixColoring.runtime;
			PremixColoring.saved = req.body.saved ? req.body.saved : PremixColoring.saved;
			PremixColoring.shipping_status = req.body.shipping_status ? req.body.shipping_status : PremixColoring.shipping_status;
			PremixColoring.SHIPPINGCODE = req.body.SHIPPINGCODE ? req.body.SHIPPINGCODE : PremixColoring.SHIPPINGCODE;
			PremixColoring.stocking = req.body.stocking ? req.body.stocking : PremixColoring.stocking;
			PremixColoring.unbranded = req.body.unbranded ? req.body.unbranded : PremixColoring.unbranded;
			PremixColoring.userset = req.body.userset ? req.body.userset : PremixColoring.userset;
			PremixColoring.VGrecipe = req.body.VGrecipe ? req.body.VGrecipe : PremixColoring.VGrecipe;
			PremixColoring.VGval = req.body.VGval ? req.body.VGval : PremixColoring.VGval;
			PremixColoring.wentNegative = req.body.wentNegative ? req.body.wentNegative : PremixColoring.wentNegative;
			
            PremixColoring.save(function (err, PremixColoring) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating PremixColoring.',
                        error: err
                    });
                }

                return res.json(PremixColoring);
            });
        });
    },

    /**
     * PremixColoringController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        PremixColoringModel.findByIdAndRemove(id, function (err, PremixColoring) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the PremixColoring.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
