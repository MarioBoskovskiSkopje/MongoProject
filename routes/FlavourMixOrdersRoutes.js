var express = require('express');
var router = express.Router();
var FlavourMixOrdersController = require('../controllers/FlavourMixOrdersController.js');

/*
 * GET
 */
router.get('/', FlavourMixOrdersController.list);

/*
 * GET
 */
router.get('/:id', FlavourMixOrdersController.show);

/*
 * POST
 */
router.post('/', FlavourMixOrdersController.create);

/*
 * PUT
 */
router.put('/:id', FlavourMixOrdersController.update);

/*
 * DELETE
 */
router.delete('/:id', FlavourMixOrdersController.remove);

module.exports = router;
