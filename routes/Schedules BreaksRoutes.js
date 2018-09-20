var express = require("express");
var router = express.Router();
var SchedulesBreaksController = require("../controllers/Schedules BreaksController.js");

/*
 * GET
 */
router.get("/", SchedulesBreaksController.list);

/*
 * GET
 */
router.get("/:id", SchedulesBreaksController.show);

/*
 * POST
 */
router.post("/", SchedulesBreaksController.create);

/*
 * PUT
 */
router.put("/", SchedulesBreaksController.update);

/*
 * DELETE
 */
router.delete("/:id", SchedulesBreaksController.remove);

module.exports = router;
