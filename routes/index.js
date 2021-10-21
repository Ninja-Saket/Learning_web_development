const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/home_controller");

router.get("/", HomeController.home);

//For any route with "/bird" as starting point , go to "./bird"
router.use("/bird", require("./bird"));
//For any route with "/user" as starting point , go to "./user"
router.use("/users", require("./users"));
module.exports = router;
