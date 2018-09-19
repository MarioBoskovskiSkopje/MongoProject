var express = require('express');
var router = express.Router();
var LogController = require('../controllers/LogController.js');

/*
 * GET
 */
router.get('/', LogController.list);

/*
 * GET
 */
router.get('/:id', LogController.show);

/*
 * POST
 */
router.post('/', LogController.create);

/*
 * PUT
 */
router.put('/:id', LogController.update);

/*
 * DELETE
 */
router.delete('/:id', LogController.remove);

module.exports = router;
