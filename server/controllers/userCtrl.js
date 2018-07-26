const passport = require("passport");

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000");
  });
};

const getUser = (req, res) => {
  if (!req.user) {
    res.status(500).send({ message: "Please Sign in to Continue" });
  } else {
    res.status(200).send(req.user);
  }
};

const login = passport.authenticate("auth0", {
  successRedirect: "http://localhost:3000/#/dashboard/user",
  failureRedirect: "http://localhost:3000/#/login"
});

module.exports = {
  logout,
  login,
  getUser
};
