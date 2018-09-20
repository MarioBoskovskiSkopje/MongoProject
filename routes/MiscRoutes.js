var express = require("express");
var router = express.Router();
var MiscController = require("../controllers/MiscController.js");

/*
 * GET
 */
router.get("/", MiscController.list);

/*
 * GET
 */
router.get("/:id", MiscController.show);

/*
 * POST
 */
router.post("/", MiscController.create);

/*
 * PUT
 */
router.put("/", MiscController.update);

/*
 * DELETE
 */
router.delete("/:id", MiscController.remove);

module.exports = router;
