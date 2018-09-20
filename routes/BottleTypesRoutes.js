var express = require("express");
var router = express.Router();
var BottleTypesController = require("../controllers/BottleTypesController.js");

/*
 * GET
 */
router.get("/", BottleTypesController.list);

/*
 * GET
 */
router.get("/:id", BottleTypesController.show);

/*
 * POST
 */
router.post("/", BottleTypesController.create);

/*
 * PUT
 */
router.put("/", BottleTypesController.update);

/*
 * DELETE
 */
router.delete("/:id", BottleTypesController.remove);

module.exports = router;
