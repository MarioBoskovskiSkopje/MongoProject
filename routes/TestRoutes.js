var express = require("express");
var router = express.Router();
var TestController = require("../controllers/TestController");

/*
 * GET
 */
router.get("/", TestController.list);

router.post("/find", TestController.findMeta);

router.post("/people", TestController.addPeople);

router.post("/findPeople", TestController.findPeople);

/*
 * POST
 */
router.post("/", TestController.create);

module.exports = router;
