const router = require("express").Router();
const movies = require("./movies.js");
const users = require("./users");
const home = require("./home.js");
const movielist = require("./movie-list.js");

// homepage route
router.use("/", home);

// localhost:4001/movies / movie info page
router.use("/movies", movies);

// movie list pae 
//localhost:4001/movie-list
router.use('/movie-list', movielist);

//localhost:4001/
router.use("/", users);

// users route

module.exports = router;
