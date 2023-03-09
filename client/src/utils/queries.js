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

// export const QUERY_SINGLE_PROFILE = gql`
//   query singleProfile($profileId: ID!) {
//     profile(profileId: $profileId) {
//       _id
//       username
//       teams
//     }
//   }
// `;

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