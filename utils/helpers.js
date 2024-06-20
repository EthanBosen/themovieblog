// If we need helpers in the handlebars files, we can put them here

// to format date for movie release date
// module.exports = {
//   format_time: (date) => {
//     return date.toLocaleTimeString();
//   },
//   format_date: (date) => {
//     return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
//       new Date(date).getFullYear() + 5
//     }`;
//   },
// };

function format_date(release_date) {
  const year = new Date(release_date).getFullYear();
  return year.toString();
}
module.exports = { format_date };
