var express = require("express");
var router = express.Router();
var SchedulesReferenceController = require("../controllers/Schedules ReferenceController.js");

/*
 * GET
 */
router.get("/", SchedulesReferenceController.list);

/*
 * GET
 */
router.get("/:id", SchedulesReferenceController.show);

/*
 * POST
 */
router.post("/", SchedulesReferenceController.create);

router.post("/addBatches", SchedulesReferenceController.addBatches);

router.post("/findBatches", SchedulesReferenceController.findBatches);

/*
 * PUT
 */
router.put("/:id", SchedulesReferenceController.update);

/*
 * DELETE
 */
router.delete("/:id", SchedulesReferenceController.remove);

module.exports = router;
