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

// export const QUERY_SINGLE_USER = gql`
//   query singleUser($userId: ID!) {
//     users(userId: $userId) {
//       _id
//       username
//       teams
//     }
//   }
// `;

export const QUERY_SINGLE_USER = gql`
query User($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    personality
    compatibility {
      type
      rating
    }
  }
}
`;

export const SEARCH_USER = gql`
query User {
  users {
    _id
    username
    email
    personality
    compatibility {
      type
      rating
    }
    teams {
      _id
      title
    }
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