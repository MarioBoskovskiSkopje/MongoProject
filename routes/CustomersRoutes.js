var express = require("express");
var router = express.Router();
var CustomersController = require("../controllers/CustomersController.js");

/*
 * GET
 */
router.get("/", CustomersController.list);

/*
 * GET
 */
router.get("/:id", CustomersController.show);

/*
 * POST
 */
router.post("/", CustomersController.create);

/*
 * PUT
 */
router.put("/", CustomersController.update);

/*
 * DELETE
 */
router.delete("/:id", CustomersController.remove);

module.exports = router;
