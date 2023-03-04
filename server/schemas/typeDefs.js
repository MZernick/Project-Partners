const { gql } = require('apollo-server-express');


// should query all user data and brings in signup/login and delete user functionality

// need to add query for teams and bring in functions to add and delete teams
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    personality: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, personality: String!): Auth
    login(email: String!, password: String!): Auth

    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;