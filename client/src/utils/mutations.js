import { gql } from '@apollo/client';
//do we need to require more to login?
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $personality: String!) {
    addUser(username: $username, email: $email, password: $password, personality: $personality) {
      token
      user {
        _id
        username
        email
        password
        personality
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TEAM = gql`
mutation addTeam($userId: ID!, $title: String!, $description: String!) {
  addTeam(userId: $userId, title: $title, description: $description) {
    title
    description
    members {
      username
    }
  }
}
`

export const REMOVE_TEAM = gql`
mutation removeTeam($teamId: ID!) {
  removeTeam(teamId: $teamId) {
    title
    description
    _id
  }
}
`;

export const ADD_TEAM_AND_MEMBERS = gql`
mutation addTeamAndMembers($userId: ID!, $title: String!, $description: String!, $members: [ID]) {
  addTeamAndMembers(userId: $userId, title: $title, description: $description, members: $members) {
    _id
    teams{
      _id
      title
      description
      createdAt
    }
  }
}
`
export const REMOVE_USER = gql`
mutation removeUser($userId: ID!) {
  removeUser(userId: $userId) {
    _id
  }
}
`;

export const UPDATE_TEAM = gql`
mutation AddTeamAndMembers($teamId: ID!, $title: String, $description: String, $members: [ID]) {
  updateTeam(teamId: $teamId, title: $title, description: $description, members: $members) {
    title
    description
    members {
      _id
      username
    }
  }
}`;

export const UPDATE_USER = gql`
mutation updateUser($userId: ID!, $username: String, $email: String, $personality: String) {
  updateUser(userId: $userId, username: $username, email: $email, personality: $personality) {
    username
    personality
    email
  }
}`

export const ADD_COMMENT = gql`
mutation addComment($userId: ID!, $commenterId: ID!, $commentBody: String!) {
  addComment(userId: $userId, commenterId: $commenterId, commentBody: $commentBody) {
    username
    _id
    comments {
      user {
        username
      }
      _id
      commentBody
      createdAt
    }
  }
} `

export const REMOVE_COMMENT = gql`
mutation removeComment($userId: ID!, $commentId: ID!) {
  removeComment(userId: $userId, commentId: $commentId) {
    username
    _id
    comments {
      _id
      commentBody
      createdAt
    }
  }
}`