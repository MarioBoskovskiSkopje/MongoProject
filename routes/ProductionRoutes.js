var express = require('express');
var router = express.Router();
var ProductionController = require('../controllers/ProductionController.js');

/*
 * GET
 */
router.get('/', ProductionController.list);

/*
 * GET
 */
router.get('/:id', ProductionController.show);

/*
 * POST
 */
router.post('/', ProductionController.create);

/*
 * PUT
 */
router.put('/:id', ProductionController.update);

/*
 * DELETE
 */
router.delete('/:id', ProductionController.remove);

module.exports = router;
