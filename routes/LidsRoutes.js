var express = require('express');
var router = express.Router();
var LidsController = require('../controllers/LidsController.js');

/*
 * GET
 */
router.get('/', LidsController.list);

/*
 * GET
 */
router.get('/:id', LidsController.show);

/*
 * POST
 */
router.post('/', LidsController.create);

/*
 * PUT
 */
router.put('/:id', LidsController.update);

/*
 * DELETE
 */
router.delete('/:id', LidsController.remove);

module.exports = router;
