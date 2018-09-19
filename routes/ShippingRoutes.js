var express = require('express');
var router = express.Router();
var ShippingController = require('../controllers/ShippingController.js');

/*
 * GET
 */
router.get('/', ShippingController.list);

/*
 * GET
 */
router.get('/:id', ShippingController.show);

/*
 * POST
 */
router.post('/', ShippingController.create);

/*
 * PUT
 */
router.put('/:id', ShippingController.update);

/*
 * DELETE
 */
router.delete('/:id', ShippingController.remove);

module.exports = router;
