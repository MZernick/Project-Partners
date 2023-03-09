const { AuthenticationError } = require('apollo-server-express');
const { User,  Teams } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // find all users
    users: async () => {
      return await User.find({}).populate('teams').populate({
        path: 'teams', 
        populate: 'members'
      });
    },
    // find one user
    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId }).populate('teams').populate({
        path: 'teams', 
        populate: 'members'
      });
    },
    // find one user by email
    searchEmail: async (parent, { email }) => {
      return await User.find({ email: email }).populate('teams').populate({
        path: 'teams', 
        populate: 'members'
      });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
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
    // update a user 
    updateUser: async (parent, {userId, username, email, password, personality }) => {
     return User.findOneAndUpdate(
        { _id: userId },
        { username, email, password, personality },
        { runValidators: true, new: true}
      )
    },
    // remove a user 
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

    // add a team then push that team's id number into the associated user's model
    addTeam: async (parent, { userId, title, description }) => {
      Teams.create({title, description})
      .then((team) => {
       return User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { teams: team._id }},
            { new: true }
          )
        })
    },

    // update a team 
    updateTeam: async (parent, { teamId, title, description}) => {
      return Teams.findOneAndUpdate(
         { _id: teamId },
         { title, description },
         { runValidators: true, new: true}
       )
     },

    //  remove a team
    removeTeam: async (parent, { teamId }) => {
      return Teams.findOneAndDelete({ _id: teamId });
    },

    // add a member to the member property on team
    addMember: async(parent, {teamId, userId}) => {
      return Teams.findOneAndUpdate(
        {_id: teamId}, 
        {$addToSet: {members: userId}}, 
        {new: true}
        )
    }, 

    // remove a member form a team
    removeMember: async(parent, {teamId, userId}) => {
      return Teams.findOneAndUpdate(
        {_id: teamId}, 
        {$pull: {members: userId}}, 
        {new: true}
        )
    }
  },
};

module.exports = resolvers;