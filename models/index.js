const User = require("./User");
const Movie = require("./Movie");
const Comment = require("./Comment");

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Movie.hasMany(Comment, {
  foreignKey: "movie_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Movie, {
  foreignKey: "movie_id",
});

module.exports = { User, Movie, Comment };
