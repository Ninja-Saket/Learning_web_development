const express = require("express");
const router = express.Router();
const DemoController = require("../controllers/demo_controller");

router.get("/", DemoController.contact);
router.get("/phone", DemoController.phone);
module.exports = router;
