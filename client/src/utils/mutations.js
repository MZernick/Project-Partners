import { gql } from '@apollo/client';
//do we need to require more to login?
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
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

export const REMOVE_TEAM = gql`
  mutation removeTeam($team: String!) {
    removeTeam(team: $team) {
      _id
      username
      team {
        title
      }
    }
  }
`;