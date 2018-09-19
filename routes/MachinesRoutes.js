var express = require('express');
var router = express.Router();
var MachinesController = require('../controllers/MachinesController.js');

/*
 * GET
 */
router.get('/', MachinesController.list);

/*
 * GET
 */
router.get('/:id', MachinesController.show);

/*
 * POST
 */
router.post('/', MachinesController.create);

/*
 * PUT
 */
router.put('/:id', MachinesController.update);

/*
 * DELETE
 */
router.delete('/:id', MachinesController.remove);

module.exports = router;
