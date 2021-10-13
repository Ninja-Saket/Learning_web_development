const express = require("express");
const PORT = 8000;
const app = express();

app.use("/", require("./routes"));
app.use("/bird", require("./routes/bird"));

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in running the server : ", err);
    return;
  }
  console.log("Server is up and running on port : ", PORT);
});
