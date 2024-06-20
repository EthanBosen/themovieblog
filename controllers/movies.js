const router = require("express").Router();
const { Movie, Comment } = require("../models");

//my second attempt (parisa)
//localhost:4001/movies
router.get("/", async (req, res) => {
  const user = req.session.fullName;
  const movieData = await Movie.findAll();
  let moviePosts = movieData.map((post) => post.get({ plain: true }));
  res.render("movielist", { moviePosts, user });
});

// parisa's attempt
// localhost:4001/movies/:id
router.get("/:id", async (req, res) => {
  // get movie and comments from db
  console.log("req.params.id:", req.params.id);
  const dbMovieAndCommentData = await Movie.findByPk(req.params.id, {
    include: [{ model: Comment }],
  });
  // console.log(dbMovieAndCommentData);
  let movieAndCommentData = dbMovieAndCommentData.get({ plain: true });
  console.log("movieAndCommentData :>> ", movieAndCommentData);

  if (!movieAndCommentData) {
    res.status(404).json("Cannot find movie by that id!");
  }

  res.render("movie-info", movieAndCommentData);
});

// localhost:4001/movies/:id
// router.get("/:id", async (req, res) => {
//   // get comments from db
//   const commentData = await Movie.findByPk(req.params.id, {
//     include: [{ model: Comment }],
//   });

//   if (!commentData) {
//     res.status(404).json("Cannot find movie by that id!");
//   }

//   console.log(commentData);
//   res.render("movie-info", commentData);
// });

// post request for comments
// POST localhost:4001/movies/:id
router.post("/:id", async (req, res) => {
  const { movieId, commentBox } = req.body;
  let userId = req.session.userId;
  console.log(movieId);
  console.log(userId);
  const commentData = await Comment.create({
    content: commentBox,
    user_id: userId,
    movie_id: movieId,
  });

  console.log("commentData :>> ", commentData);
  res.status(200).json(commentData);
});

module.exports = router;
