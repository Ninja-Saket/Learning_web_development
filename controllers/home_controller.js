module.exports.home = function (req, res) {
  console.log(req.cookies);
  res.cookie("user_id", Math.random());
  res.cookie("name", "Saket");
  res.cookie("branch", "CSE");
  return res.render("home", {
    title: "Home",
  });
};
