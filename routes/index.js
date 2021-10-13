const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/home_controller");

router.get("/", HomeController.home);

//For any route with "/bird" as starting point , go to "./bird"
router.use("/bird", require("./bird"));

module.exports = router;
