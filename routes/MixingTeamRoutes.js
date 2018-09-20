var express = require("express");
var router = express.Router();
var MixingTeamController = require("../controllers/MixingTeamController.js");

/*
 * GET
 */
router.get("/", MixingTeamController.list);

/*
 * GET
 */
router.get("/:id", MixingTeamController.show);

/*
 * POST
 */
router.post("/", MixingTeamController.create);

/*
 * PUT
 */
router.put("/", MixingTeamController.update);

/*
 * DELETE
 */
router.delete("/:id", MixingTeamController.remove);

module.exports = router;
