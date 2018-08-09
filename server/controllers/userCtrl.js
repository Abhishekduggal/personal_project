const passport = require("passport");

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect(process.env.REACT_APP_CLIENT);
  });
};

const getUser = (req, res) => {
  const db = req.app.get("db");

  // console.log("ctrl line 12", req.user);

  if (!req.user) {
    res.status(401).send({ message: "Please Sign in to Continue" });
  } else {
    db.users.get_user_authid(req.user.authid).then(user => {
      res.status(200).send(user[0]);
    });
  }
};

const login = passport.authenticate("auth0", {
  successRedirect: process.env.REACT_APP_CLIENT + "/#/dashboard",
  failureRedirect: process.env.REACT_APP_CLIENT + "/#/login"
});

module.exports = {
  logout,
  login,
  getUser
};
