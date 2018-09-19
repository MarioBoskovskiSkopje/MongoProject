var express = require('express');
var router = express.Router();
var PremixesTypesController = require('../controllers/PremixesTypesController.js');

/*
 * GET
 */
router.get('/', PremixesTypesController.list);

/*
 * GET
 */
router.get('/:id', PremixesTypesController.show);

/*
 * POST
 */
router.post('/', PremixesTypesController.create);

/*
 * PUT
 */
router.put('/:id', PremixesTypesController.update);

/*
 * DELETE
 */
router.delete('/:id', PremixesTypesController.remove);

module.exports = router;
