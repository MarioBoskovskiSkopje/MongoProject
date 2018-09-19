var express = require('express');
var router = express.Router();
var PrintingController = require('../controllers/PrintingController.js');

/*
 * GET
 */
router.get('/', PrintingController.list);

/*
 * GET
 */
router.get('/:id', PrintingController.show);

/*
 * POST
 */
router.post('/', PrintingController.create);

/*
 * PUT
 */
router.put('/:id', PrintingController.update);

/*
 * DELETE
 */
router.delete('/:id', PrintingController.remove);

module.exports = router;
