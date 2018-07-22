require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");

const port = process.env.SERVER_PORT || 3004;

const app = express();

app.listen(port, () => {
  console.log(`I am up and listening on port: ${port}`);
});
