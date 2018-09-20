var express = require("express");
var router = express.Router();
var SchedulesController = require("../controllers/SchedulesController.js");

/*
 * GET
 */
router.get("/", SchedulesController.list);

/*
 * GET
 */
router.get("/:id", SchedulesController.show);

/*
 * POST
 */
router.post("/", SchedulesController.create);

/*
 * PUT
 */
router.put("/", SchedulesController.update);

/*
 * DELETE
 */
router.delete("/:id", SchedulesController.remove);

module.exports = router;
