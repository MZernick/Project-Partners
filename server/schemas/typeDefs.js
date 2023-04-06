const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    personality: String
    compatibility: [Score]!
    teams: [Teams]
    comments: [Comment]!
  }

  type Score {
    _id: ID
    type: String
    rating: Int
  }

  type Comment {
    _id: ID
    user: [User]
    createdAt: String
    commentBody: String
  }

  type Teams {
    _id: ID
    title: String
    description: String
    createdAt: String
    members: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    teams: [Teams]
    team(teamId: ID!): Teams
    searchEmail(email: String!): [User]!
    searchPersonality(personality: String!): [User]!
    searchUsername(username: String!): [User]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, personality: String!): Auth
    login(email: String!, password: String!): Auth
    addTeam(userId: ID!, title: String!, description: String!) : User
    updateUser(userId: ID!, username: String, email: String, password: String, personality: String) : User
    updateTeam(teamId: ID!, title: String , description: String, members: [ID]) : Teams
    removeUser(userId: ID!): User
    removeTeam(teamId: ID!): Teams
    addMember(teamId: ID!, userId: ID!): Teams
    removeMember(teamId: ID!, userId: ID!): Teams
    addTeamAndMembers(userId: ID!, title: String!, description: String!, members:[ID]) : User
    addComment(userId: ID!, commenterId: ID!, commentBody: String!) : User
    removeComment(userId: ID!, commentId: ID!) : User
  }
`;

module.exports = typeDefs;