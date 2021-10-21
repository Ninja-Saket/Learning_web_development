const express = require("express");
const PORT = 8000;
const app = express();
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose");
app.use(express.static("./assets"));
app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(express.urlencoded());
app.use(cookieParser());
//For any route go to "./routes/index"
app.use("/", require("./routes"));

//setting up views
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in running the server : ", err);
    return;
  }
  console.log("Server is up and running on port : ", PORT);
});
