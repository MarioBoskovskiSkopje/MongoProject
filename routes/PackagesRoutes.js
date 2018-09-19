var express = require('express');
var router = express.Router();
var PackagesController = require('../controllers/PackagesController.js');

/*
 * GET
 */
router.get('/', PackagesController.list);

/*
 * GET
 */
router.get('/:id', PackagesController.show);

/*
 * POST
 */
router.post('/', PackagesController.create);

/*
 * PUT
 */
router.put('/:id', PackagesController.update);

/*
 * DELETE
 */
router.delete('/:id', PackagesController.remove);

module.exports = router;
