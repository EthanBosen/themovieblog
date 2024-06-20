const seedUser = require('./userSeeds')
const seedMovie = require('./movieSeeds');
const seedComment = require('./commentSeeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedMovie();
  console.log('\n----- MOVIES SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
