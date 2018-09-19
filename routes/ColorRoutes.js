var express = require('express');
var router = express.Router();
var ColorController = require('../controllers/ColorController.js');

/*
 * GET
 */
router.get('/', ColorController.list);

/*
 * GET
 */
router.get('/:id', ColorController.show);

/*
 * POST
 */
router.post('/', ColorController.create);

/*
 * PUT
 */
router.put('/:id', ColorController.update);

/*
 * DELETE
 */
router.delete('/:id', ColorController.remove);

module.exports = router;
