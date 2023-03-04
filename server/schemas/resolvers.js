const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

// need to add resolvers for creating and deleting teams

const resolvers = {
  Query: {
    // find all users
    users: async () => {
      return User.find();
    },
    // find one user
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
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
  },
};

module.exports = resolvers;