const express = require("express");
const PORT = 8000;
const app = express();
app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in running the server : ", err);
    return;
  }
  console.log("Server is up and running on port : ", PORT);
});
