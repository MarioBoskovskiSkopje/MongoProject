var express = require('express');
var router = express.Router();
var PremixColoringController = require('../controllers/PremixColoringController.js');

/*
 * GET
 */
router.get('/', PremixColoringController.list);

/*
 * GET
 */
router.get('/:id', PremixColoringController.show);

/*
 * POST
 */
router.post('/', PremixColoringController.create);

/*
 * PUT
 */
router.put('/:id', PremixColoringController.update);

/*
 * DELETE
 */
router.delete('/:id', PremixColoringController.remove);

module.exports = router;
