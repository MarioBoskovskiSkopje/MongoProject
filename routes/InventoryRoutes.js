var express = require("express");
var router = express.Router();
var InventoryController = require("../controllers/InventoryController.js");

/*
 * GET
 */
router.get("/", InventoryController.list);

/*
 * GET
 */
router.get("/:id", InventoryController.show);

/*
 * POST
 */
router.post("/", InventoryController.create);

/*
 * PUT
 */
router.put("/", InventoryController.update);

/*
 * DELETE
 */
router.delete("/:id", InventoryController.remove);

module.exports = router;
