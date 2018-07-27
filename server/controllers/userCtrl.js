const passport = require("passport");

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000");
  });
};

const getUser = (req, res) => {
  const db = req.app.get("db");

  // console.log("ctrl line 12", req.user);

  if (!req.user) {
    res.status(500).send({ message: "Please Sign in to Continue" });
  } else {
    db.users.get_user_authid(req.user.authid).then(user => {
      res.status(200).send(user[0]);
    });
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
