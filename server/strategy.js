const AUTH0Strategy = require("passport-auth0");

module.exports = new AUTH0Strategy(
  {
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/login",
    scope: "openid profile"
  },
  (accessToken, refreshToken, etxraParams, profile, done) => {
    done(null, profile);
  }
);
