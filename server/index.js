require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const path = require("path");

const strategy = require("./strategy");
const { logout, login, getUser } = require("./controllers/userCtrl");

const port = process.env.SERVER_PORT || 3004;
const {
  read,
  create,
  update,
  deleteForm,
  updateField
} = require("./controllers/formCtrl");

const {
  readSpecs,
  createProduct,
  createSpec
} = require("./controllers/specificationsCtrl");

const { emailForm } = require("./controllers/emailCtrl");
const { smsMessage } = require("./controllers/smsCtrl");

const {
  readRejects,
  readHrUsersFacility
} = require("./controllers/chartsCtrl");

const app = express();

app.use(express.static(__dirname + "/../build"));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    // console.log(db);
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
  const db = app.get("db");
  // console.log(user);
  db.users
    .get_user_authid(user.id)
    .then(response => {
      // console.log(response);
      if (!response[0]) {
        db.users
          .add_user_authid([user.displayName, user.id])
          .then(res => console.log(res), done(null, res[0]))
          .catch(err => done(err, null));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => done(err, null));
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/login", login);

app.get("/logout", logout);

// Get User will give access to the user Object
app.get("/api/get-user", getUser);

app.get("/api/forms", read);

app.post("/api/form/create", create);

app.put("/api/form/:formid", update);

app.delete("/api/form/:formid", deleteForm);

app.patch("/api/form/field/:id", updateField);

// Product Specifications
app.get("/api/products/specifications", readSpecs);

app.post("/api/product/create", createProduct);

app.post("/api/product/specification/create", createSpec);

//Email & SMS functionality end Point
app.post("/api/email", emailForm);

app.post("/api/sms", smsMessage);

app.get("/api/charts/rejects", readRejects);

app.get("/api/charts/users/facility", readHrUsersFacility);

app.listen(port, () => {
  console.log(`I am up and listening on port: ${port}`);
});
