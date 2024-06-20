const router = require('express').Router();
const {User, Movie, Comment } = require('../models');


router.get('/', async(req,res) => {
  try{
  const movieData = await Movie.findAll({attributes:['id', 'title', 'movie_info', 'poster', 'star_rating' ],
    include:[ 
      {
        model: Comment,
        attributes:['user_id', 'content']
      }
    ]
  });

  const movies = movieData.map((movie) => 
  movie.get({ plain: true})
  
);
  res.render('home', { movies
  })
  console.log(movies);
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  


// router.get('/', async (req, res) => {
//   const movieData = await Movie.findAll().catch((err) => { 
//       res.json(err);
//     });
//       const movies= movieData.map((movie) => movie.get({ plain: true }));
//       res.render('home', { movies });
//     });


module.exports = router; 
