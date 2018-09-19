var express = require("express");
var router = express.Router();
var FlavourMixesController = require("../controllers/FlavourMixesController.js");

/*
 * GET
 */
router.get("/", FlavourMixesController.list);

/*
 * GET
 */
router.get("/:id", FlavourMixesController.show);

/*
 * POST
 */
router.post("/", FlavourMixesController.create);

router.post("/addFlavoursMixes", FlavourMixesController.addFlavoursMixes);

router.post("/findFlavoursMixes", FlavourMixesController.findFlavoursMixes);

/*
 * PUT
 */
router.put("/:id", FlavourMixesController.update);

/*
 * DELETE
 */
router.delete("/:id", FlavourMixesController.remove);

module.exports = router;
