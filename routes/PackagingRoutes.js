var express = require("express");
var router = express.Router();
var PackagingController = require("../controllers/PackagingController.js");

/*
 * GET
 */
router.get("/", PackagingController.list);

/*
 * GET
 */
router.get("/:id", PackagingController.show);

/*
 * POST
 */
router.post("/", PackagingController.create);

/*
 * PUT
 */
router.put("/", PackagingController.update);

/*
 * DELETE
 */
router.delete("/:id", PackagingController.remove);

module.exports = router;
