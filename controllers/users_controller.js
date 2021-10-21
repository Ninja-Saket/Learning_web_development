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
  // Todo Later
};

// get the signin data and create a session for user
module.exports.createSession = function (req, res) {
  //Todo Later
};
