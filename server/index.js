require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");

const port = process.env.SERVER_PORT || 3004;

const { read, create, deleteForm } = require("./controllers/formCtrl");

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    // console.log(db);
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(json());

app.get("/api/forms", read);

app.post("/api/forms/create", create);

app.delete("/api/form/:formid", deleteForm);

app.listen(port, () => {
  console.log(`I am up and listening on port: ${port}`);
});
