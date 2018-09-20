var express = require("express");
var router = express.Router();
var FillLevelsController = require("../controllers/FillLevelsController.js");

/*
 * GET
 */
router.get("/", FillLevelsController.list);

/*
 * GET
 */
router.get("/:id", FillLevelsController.show);

/*
 * POST
 */
router.post("/", FillLevelsController.create);

/*
 * PUT
 */
router.put("/", FillLevelsController.update);

/*
 * DELETE
 */
router.delete("/:id", FillLevelsController.remove);

module.exports = router;
