var express = require('express');
var router = express.Router();
var BrandsController = require('../controllers/BrandsController.js');

/*
 * GET
 */
router.get('/', BrandsController.list);

/*
 * GET
 */
router.get('/:id', BrandsController.show);

/*
 * POST
 */
router.post('/', BrandsController.create);

/*
 * PUT
 */
router.put('/:id', BrandsController.update);

/*
 * DELETE
 */
router.delete('/:id', BrandsController.remove);

module.exports = router;
