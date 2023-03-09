import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      teams {
        title
      }
    }
  }
`;

export const SEARCH_USER = gql`
query User {
  users {
    _id
    email
    personality
    compatibility {
      type
      rating
    }
    teams {
      title
      description
    }
  }
}
`;
export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    users(userId: $userId) {
      _id
      username
      teams
    }
  }
`;

export const SEARCH_EMAIL = gql`
query User($email: String!) {
  searchEmail(email: $email) {
    _id
    username
    email
    personality
  }
}
`;

export const ALL_TEAMS = gql `
query Teams {
  teams {
    title
    _id
  }
}`;