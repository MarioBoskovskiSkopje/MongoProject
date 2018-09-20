var express = require("express");
var router = express.Router();
var ReferencesController = require("../controllers/ReferencesController.js");

/*
 * GET
 */
router.get("/", ReferencesController.list);

/*
 * GET
 */
router.get("/:id", ReferencesController.show);

/*
 * POST
 */
router.post("/", ReferencesController.create);

/*
 * PUT
 */
router.put("/", ReferencesController.update);

/*
 * DELETE
 */
router.delete("/:id", ReferencesController.remove);

module.exports = router;
