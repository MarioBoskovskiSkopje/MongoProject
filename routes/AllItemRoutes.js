var express = require("express");
var router = express.Router();
var AllItemController = require("../controllers/AllItemController");

/*
 * GET
 */
router.get("/", AllItemController.list);

/*
 * POST
 */
router.post("/", AllItemController.create);

/*
 * PUT
 */
router.put("/", AllItemController.update);

/*
 * DELETE
 */
router.delete("/", AllItemController.remove);

module.exports = router;
