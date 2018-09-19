var express = require('express');
var router = express.Router();
var LabelsController = require('../controllers/LabelsController.js');

/*
 * GET
 */
router.get('/', LabelsController.list);

/*
 * GET
 */
router.get('/:id', LabelsController.show);

/*
 * POST
 */
router.post('/', LabelsController.create);

/*
 * PUT
 */
router.put('/:id', LabelsController.update);

/*
 * DELETE
 */
router.delete('/:id', LabelsController.remove);

module.exports = router;
