var express = require('express');
var router = express.Router();
var BrandedTypesController = require('../controllers/BrandedTypesController.js');

/*
 * GET
 */
router.get('/', BrandedTypesController.list);

/*
 * GET
 */
router.get('/:id', BrandedTypesController.show);

/*
 * POST
 */
router.post('/', BrandedTypesController.create);

/*
 * PUT
 */
router.put('/:id', BrandedTypesController.update);

/*
 * DELETE
 */
router.delete('/:id', BrandedTypesController.remove);

module.exports = router;
