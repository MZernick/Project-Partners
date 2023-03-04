const { AuthenticationError } = require('apollo-server-express');
const { User,  Teams } = require('../models');
const { signToken } = require('../utils/auth');

// need to add resolvers for creating and deleting teams

const resolvers = {
  Query: {
    // find all users
    users: async () => {
      return User.find().populate('teams').populate({
        path: 'teams', 
        populate: 'members'
      });
    },
    // find one user
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('teams').populate({
        path: 'teams', 
        populate: 'members'
      });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // find all teams
    teams: async () => {
      return Teams.find().populate('members');
    },
    // find one team
    team: async (parent, { teamId }) => {
      return Teams.findOne({ _id: teamId }).populate('members');
    },
  },

  Mutation: {
    // add new user
    addUser: async (parent, { username, email, password, personality }) => {
      const user = await User.create({ username, email, password, personality });
      const token = signToken(user);

      return { token, user };
    },
    // user login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    addTeam: async (parent, { title, description }) => {
      const team = await Teams.create({ title, description });
      const token = signToken(team);

      return { token, team };
    },
  },
};

module.exports = resolvers;