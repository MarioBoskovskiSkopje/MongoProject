var PackagingModel = require('../models/PackagingModel.js');

/**
 * PackagingController.js
 *
 * @description :: Server-side logic for managing Packagings.
 */
module.exports = {

    /**
     * PackagingController.list()
     */
    list: function (req, res) {
        PackagingModel.find(function (err, Packagings) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Packaging.',
                    error: err
                });
            }
            return res.json(Packagings);
        });
    },

    /**
     * PackagingController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        PackagingModel.findOne({_id: id}, function (err, Packaging) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Packaging.',
                    error: err
                });
            }
            if (!Packaging) {
                return res.status(404).json({
                    message: 'No such Packaging'
                });
            }
            return res.json(Packaging);
        });
    },

    /**
     * PackagingController.create()
     */
    create: function (req, res) {
        var Packaging = new PackagingModel({
			Completed : req.body.Completed,
			CompletionDate : req.body.CompletionDate,
			Location : req.body.Location,
			PackagingCompleted : req.body.PackagingCompleted,
			ProductionCompleted : req.body.ProductionCompleted,
			backtubed : req.body.backtubed,
			batch : req.body.batch,
			botSKU : req.body.botSKU,
			botlabel : req.body.botlabel,
			botlabelsku : req.body.botlabelsku,
			bottles : req.body.bottles,
			boxname : req.body.boxname,
			brand : req.body.brand,
			brandSKU : req.body.brandSKU,
			branded : req.body.branded,
			bsize : req.body.bsize,
			btype : req.body.btype,
			customer : req.body.customer,
			customerSKU : req.body.customerSKU,
			fill : req.body.fill,
			final_status : req.body.final_status,
			flavour : req.body.flavour,
			labeling_status : req.body.labeling_status,
			lid : req.body.lid,
			lidSKU : req.body.lidSKU,
			mixing : req.body.mixing,
			mixing_status : req.body.mixing_status,
			movedtoNext : req.body.movedtoNext,
			orderID : req.body.orderID,
			orderdate : req.body.orderdate,
			packagingType : req.body.packagingType,
			packaging_status : req.body.packaging_status,
			packlabel : req.body.packlabel,
			packlabelsku : req.body.packlabelsku,
			premixed : req.body.premixed,
			printing_status : req.body.printing_status,
			productcode : req.body.productcode,
			productdescription : req.body.productdescription,
			recipe : req.body.recipe,
			row : req.body.row,
			starttime : req.body.starttime,
			unbranded : req.body.unbranded,
			userset : req.body.userset

        });

        Packaging.save(function (err, Packaging) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Packaging',
                    error: err
                });
            }
            return res.status(201).json(Packaging);
        });
    },

    /**
     * PackagingController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        PackagingModel.findOne({_id: id}, function (err, Packaging) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Packaging',
                    error: err
                });
            }
            if (!Packaging) {
                return res.status(404).json({
                    message: 'No such Packaging'
                });
            }

            Packaging.Completed = req.body.Completed ? req.body.Completed : Packaging.Completed;
			Packaging.CompletionDate = req.body.CompletionDate ? req.body.CompletionDate : Packaging.CompletionDate;
			Packaging.Location = req.body.Location ? req.body.Location : Packaging.Location;
			Packaging.PackagingCompleted = req.body.PackagingCompleted ? req.body.PackagingCompleted : Packaging.PackagingCompleted;
			Packaging.ProductionCompleted = req.body.ProductionCompleted ? req.body.ProductionCompleted : Packaging.ProductionCompleted;
			Packaging.backtubed = req.body.backtubed ? req.body.backtubed : Packaging.backtubed;
			Packaging.batch = req.body.batch ? req.body.batch : Packaging.batch;
			Packaging.botSKU = req.body.botSKU ? req.body.botSKU : Packaging.botSKU;
			Packaging.botlabel = req.body.botlabel ? req.body.botlabel : Packaging.botlabel;
			Packaging.botlabelsku = req.body.botlabelsku ? req.body.botlabelsku : Packaging.botlabelsku;
			Packaging.bottles = req.body.bottles ? req.body.bottles : Packaging.bottles;
			Packaging.boxname = req.body.boxname ? req.body.boxname : Packaging.boxname;
			Packaging.brand = req.body.brand ? req.body.brand : Packaging.brand;
			Packaging.brandSKU = req.body.brandSKU ? req.body.brandSKU : Packaging.brandSKU;
			Packaging.branded = req.body.branded ? req.body.branded : Packaging.branded;
			Packaging.bsize = req.body.bsize ? req.body.bsize : Packaging.bsize;
			Packaging.btype = req.body.btype ? req.body.btype : Packaging.btype;
			Packaging.customer = req.body.customer ? req.body.customer : Packaging.customer;
			Packaging.customerSKU = req.body.customerSKU ? req.body.customerSKU : Packaging.customerSKU;
			Packaging.fill = req.body.fill ? req.body.fill : Packaging.fill;
			Packaging.final_status = req.body.final_status ? req.body.final_status : Packaging.final_status;
			Packaging.flavour = req.body.flavour ? req.body.flavour : Packaging.flavour;
			Packaging.labeling_status = req.body.labeling_status ? req.body.labeling_status : Packaging.labeling_status;
			Packaging.lid = req.body.lid ? req.body.lid : Packaging.lid;
			Packaging.lidSKU = req.body.lidSKU ? req.body.lidSKU : Packaging.lidSKU;
			Packaging.mixing = req.body.mixing ? req.body.mixing : Packaging.mixing;
			Packaging.mixing_status = req.body.mixing_status ? req.body.mixing_status : Packaging.mixing_status;
			Packaging.movedtoNext = req.body.movedtoNext ? req.body.movedtoNext : Packaging.movedtoNext;
			Packaging.orderID = req.body.orderID ? req.body.orderID : Packaging.orderID;
			Packaging.orderdate = req.body.orderdate ? req.body.orderdate : Packaging.orderdate;
			Packaging.packagingType = req.body.packagingType ? req.body.packagingType : Packaging.packagingType;
			Packaging.packaging_status = req.body.packaging_status ? req.body.packaging_status : Packaging.packaging_status;
			Packaging.packlabel = req.body.packlabel ? req.body.packlabel : Packaging.packlabel;
			Packaging.packlabelsku = req.body.packlabelsku ? req.body.packlabelsku : Packaging.packlabelsku;
			Packaging.premixed = req.body.premixed ? req.body.premixed : Packaging.premixed;
			Packaging.printing_status = req.body.printing_status ? req.body.printing_status : Packaging.printing_status;
			Packaging.productcode = req.body.productcode ? req.body.productcode : Packaging.productcode;
			Packaging.productdescription = req.body.productdescription ? req.body.productdescription : Packaging.productdescription;
			Packaging.recipe = req.body.recipe ? req.body.recipe : Packaging.recipe;
			Packaging.row = req.body.row ? req.body.row : Packaging.row;
			Packaging.starttime = req.body.starttime ? req.body.starttime : Packaging.starttime;
			Packaging.unbranded = req.body.unbranded ? req.body.unbranded : Packaging.unbranded;
			Packaging.userset = req.body.userset ? req.body.userset : Packaging.userset;
			
            Packaging.save(function (err, Packaging) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Packaging.',
                        error: err
                    });
                }

                return res.json(Packaging);
            });
        });
    },

    /**
     * PackagingController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        PackagingModel.findByIdAndRemove(id, function (err, Packaging) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Packaging.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
