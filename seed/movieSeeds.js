const Movie = require('../models/Movie');
const fetch = require('node-fetch');
const sequelize = require('../config/connection');

async function seedMovie() {
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated/?api_key=86f7076724c94fafc14a27c7cc8941e0");
  const jsonData = await response.json();
  const movieData = jsonData.results;

  const movieTableData = [];

  for (var x = 0; x < movieData.length; x++) {
    const movieTitle = movieData[x].title;
    const movieOverview = movieData[x].overview;
    const moviePoster = movieData[x].poster_path;
    const movieReleaseDate = movieData[x].release_date; // Convert to Date object
    const rating = movieData[x].vote_average;

    const movie = {
      title: movieTitle,
      movie_info: movieOverview,
      poster: moviePoster,
      star_rating: rating,
      release_date: movieReleaseDate
    };

    movieTableData.push(movie);

    console.log([movieTitle, moviePoster, rating, movieReleaseDate, movieOverview]);
  }

  // await sequelize.sync({ force: true }); // This will sync your models with the database

  await Movie.bulkCreate(movieTableData);
  console.log('Seeding completed.');
}

// seedMovie();

module.exports = seedMovie;