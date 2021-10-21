const express = require("express");
const router = express.Router();
const BirdController = require("../controllers/bird_controller");

router.get("/", BirdController.home);
router.get("/color", BirdController.color);
router.get("/weight", BirdController.weight);
//For any route with "/user/contact" goto "./contact"
router.use("/contact", require("./contact"));
module.exports = router;
