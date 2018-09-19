var express = require('express');
var router = express.Router();
var BoxesController = require('../controllers/BoxesController.js');

/*
 * GET
 */
router.get('/', BoxesController.list);

/*
 * GET
 */
router.get('/:id', BoxesController.show);

/*
 * POST
 */
router.post('/', BoxesController.create);

/*
 * PUT
 */
router.put('/:id', BoxesController.update);

/*
 * DELETE
 */
router.delete('/:id', BoxesController.remove);

module.exports = router;
