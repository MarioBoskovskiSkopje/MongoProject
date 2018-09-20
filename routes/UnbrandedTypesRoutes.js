var express = require("express");
var router = express.Router();
var UnbrandedTypesController = require("../controllers/UnbrandedTypesController.js");

/*
 * GET
 */
router.get("/", UnbrandedTypesController.list);

/*
 * GET
 */
router.get("/:id", UnbrandedTypesController.show);

/*
 * POST
 */
router.post("/", UnbrandedTypesController.create);

/*
 * PUT
 */
router.put("/", UnbrandedTypesController.update);

/*
 * DELETE
 */
router.delete("/:id", UnbrandedTypesController.remove);

module.exports = router;
