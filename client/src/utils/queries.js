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

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
      teams
    }
  }
`;

export const SEARCH_USER = gql`
query Query($email: String!) {
  searchEmail(email: $email) {
    _id
    username
    email
    personality
  }
}
`;