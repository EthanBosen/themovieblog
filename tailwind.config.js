/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../views/*.hbs", "../views/*.handlebars"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
