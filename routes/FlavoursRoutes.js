var express = require('express');
var router = express.Router();
var FlavoursController = require('../controllers/FlavoursController.js');

/*
 * GET
 */
router.get('/', FlavoursController.list);

/*
 * GET
 */
router.get('/:id', FlavoursController.show);

/*
 * POST
 */
router.post('/', FlavoursController.create);

/*
 * PUT
 */
router.put('/:id', FlavoursController.update);

/*
 * DELETE
 */
router.delete('/:id', FlavoursController.remove);

module.exports = router;
