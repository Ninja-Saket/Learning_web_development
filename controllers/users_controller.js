const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("profile", {
    title: "Profile",
  });
};
// render the signUp page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "User | Sign Up",
  });
};

// renders the signIn page
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "User | Sign In",
  });
};

// get the signup data and create the user in database
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding the user");
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("Error in creating the user while signing up");
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

// get the signin data and create a session for user
module.exports.createSession = function (req, res) {
  //Todo Later
};
