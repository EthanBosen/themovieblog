const router = require("express").Router();
// const { User, Movie, Comment } = require("../models");
const { User } = require("../../models");

// localhost:4001/signup
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// post for signup: localhost:4001/signup
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // checks if the username already exists (for being unique)
  const existingUser = await User.findOne({
    where: {
      username: username,
    },
  });
  if (existingUser) {
    res.render("signup", {
      message: "Username already exists. Please choose another username.",
    });
    return;
  }
  //if username does not exist:
  const userData = await User.create({
    username: username,
    password: password,
  });
  //sets the session for the posted username:
  if (userData.username) {
    req.session.fullName = userData.username; //fullName is the name of new variable
  }
  res.redirect("/movies");
});

// localhost:4001/logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

//localhost:4001/login
router.get("/login", (req, res) => {
  res.render("login");
});

//post for login:
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const userData = await User.findOne({
    where: {
      username: username,
    },
  });

  //sets session for the posted username
  if (!userData) {
    res.render("login", {
      message: "Invalid username/password. Please try again.",
    });
    return;
  }
  const validPassword = await userData.checkPassword(req.body.password);
  if (!validPassword) {
    res.render("login", {
      message: "Invalid username/password. Please try again.",
    });
    return;
  }
  req.session.fullName = userData.username;
  req.session.userId = userData.id;
  console.log('hi');
  res.redirect(`/movies?userId=${userData.id}`);
});

// checks if the user is logged in or not
router.get("/checkUser", (req, res) => {
  const user = req.session.fullName;
  console.log(user);
  res.json({ userName: user });
});

module.exports = router;
