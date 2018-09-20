var express = require("express");
var router = express.Router();
var RecipesController = require("../controllers/RecipesController.js");

/*
 * GET
 */
router.get("/", RecipesController.list);

/*
 * GET
 */
router.get("/:id", RecipesController.show);

/*
 * POST
 */
router.post("/", RecipesController.create);

/*
 * PUT
 */
router.put("/", RecipesController.update);

/*
 * DELETE
 */
router.delete("/:id", RecipesController.remove);

module.exports = router;
