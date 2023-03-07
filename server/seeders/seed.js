const db = require('../config/connection');
const { User, Teams } = require('../models');
const userSeeds = require('./userSeeds.json');
const teamSeeds = require('./teamSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Teams.deleteMany({});
    const users = await User.insertMany(userSeeds);
    const teams = await Teams.insertMany(teamSeeds);

    for (newUser of users) {
  
      // randomly add a team to each user
      const tempTeam = teams[Math.floor(Math.random() * teams.length)];
      newUser.teams = tempTeam._id;
      await newUser.save();

      //randomly adds a user to members property of teams
      const tempMember = teams[Math.floor(Math.random() * teams.length)];
      tempMember.members.push(newUser._id);
      await tempMember.save()
    }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});