import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      team {
        title
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const SEARCH_USER = gql`
query SearchUser($search: String!) {
  searchUser(search: $search) {
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
      name
    }
  }
}
`;