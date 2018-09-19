var express = require('express');
var router = express.Router();
var MixingController = require('../controllers/MixingController.js');

/*
 * GET
 */
router.get('/', MixingController.list);

/*
 * GET
 */
router.get('/:id', MixingController.show);

/*
 * POST
 */
router.post('/', MixingController.create);

/*
 * PUT
 */
router.put('/:id', MixingController.update);

/*
 * DELETE
 */
router.delete('/:id', MixingController.remove);

module.exports = router;
