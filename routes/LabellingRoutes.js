var express = require('express');
var router = express.Router();
var LabellingController = require('../controllers/LabellingController.js');

/*
 * GET
 */
router.get('/', LabellingController.list);

/*
 * GET
 */
router.get('/:id', LabellingController.show);

/*
 * POST
 */
router.post('/', LabellingController.create);

/*
 * PUT
 */
router.put('/:id', LabellingController.update);

/*
 * DELETE
 */
router.delete('/:id', LabellingController.remove);

module.exports = router;
