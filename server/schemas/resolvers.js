const { AuthenticationError } = require("apollo-server-express");
const { User, Teams } = require("../models");
const { signToken } = require("../utils/auth");
// const  setUserCompatibility = require("../utils/setUserCompatibility");
const { setUserCompatibility } = require('../utils/setUserCompatibility');

const resolvers = {
  Query: {
    // find all users
    users: async () => {
      return await User.find({}).populate("teams").populate({
        path: "teams",
        populate: "members",
      });
    },
    // find one user
    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId }).populate("teams").populate({
        path: "teams",
        populate: "members",
      });
    },
    // find users by email
    searchEmail: async (parent, { email }) => {
      return await User.find({ email: email }).populate("teams").populate({
        path: "teams",
        populate: "members",
      });
    },

    // find users by personality
    searchPersonality: async (parent, { personality }) => {
      return await User.find({ personality: personality }).populate("teams").populate({
        path: "teams",
        populate: "members",
      });
    },

     // find users by username
     searchUsername: async (parent, { username }) => {
      return await User.find({ username: username }).populate("teams").populate({
        path: "teams",
        populate: "members",
      });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // find all teams
    teams: async () => {
      return Teams.find().populate("members");
    },
    // find one team
    team: async (parent, { teamId }) => {
      return Teams.findOne({ _id: teamId }).populate("members");
    },
  },

  Mutation: {
    // add new user
    addUser: async (parent, { username, email, password, personality }) => {
      const user = await User.create({
        username,
        email,
        password,
        personality,
      });
      const token = signToken(user);

      return { token, user };
    },
    // user login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    // update a user
    updateUser: async (
      parent,
      { userId, username, email, password, personality}
    ) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { username, email, password, personality, compatibility: setUserCompatibility(personality) },
        { runValidators: true, new: true }
      );
    },
    // remove a user
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

    // add a team then push that team's id number into the associated user's model
    addTeam: async (parent, { userId, title, description }) => {
      return Teams.create({title, description})
      .then((team) => {
       return User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { teams: team._id }},
            { new: true }
          )
        })
    },

    // update a team
    updateTeam: async (parent, { teamId, title, description, members }) => {
      return Teams.findOneAndUpdate(
        { _id: teamId },
        { title, description, members },
        { runValidators: true, new: true }
      );
    },

    //  remove a team
    removeTeam: async (parent, { teamId }) => {
      return Teams.findOneAndDelete({ _id: teamId });
    },

    // add a member to the member property on team
    addMember: async (parent, { teamId, userId }) => {
      return Teams.findOneAndUpdate(
        { _id: teamId },
        { $addToSet: { members: userId } },
        { new: true }
      );
    },

    // remove a member form a team
    removeMember: async (parent, { teamId, userId }) => {
      return Teams.findOneAndUpdate(
        {_id: teamId}, 
        {$pull: {members: userId}}, 
        {new: true}
        )
    },

    addTeamAndMembers: async (parent, { userId, title, description, members}) => {
      Teams.create({title, description, members })
      .then((team) => {
       return User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { teams: team._id }},
            { new: true }
          )
        })
    }
   
  },
};

module.exports = resolvers;
