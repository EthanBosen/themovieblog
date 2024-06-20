const express = require("express"); // import express
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const sequelize = require("./config/connection");

const routes = require("./controllers");
const helpers = require("./utils/helpers.js");

const app = express();
const PORT = 4001 || process.env.PORT;

// set up session
const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sess));

// to make the tables for the first time
const models = require("./models");

// setup public
app.use(express.static("/public"));

// set up handlebars
const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for post requests
// app.use(express.static(path.join(__dirname, "/public")));

// localhost:4001/
app.use("/", routes);

// start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
