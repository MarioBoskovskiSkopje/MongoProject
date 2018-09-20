var express = require("express");
var router = express.Router();
var highestBatchController = require("../controllers/highestBatchController.js");

/*
 * GET
 */
router.get("/", highestBatchController.list);

/*
 * GET
 */
router.get("/:id", highestBatchController.show);

/*
 * POST
 */
router.post("/", highestBatchController.create);

/*
 * PUT
 */
router.put("/", highestBatchController.update);

/*
 * DELETE
 */
router.delete("/:id", highestBatchController.remove);

module.exports = router;
