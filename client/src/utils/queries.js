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

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    users(userId: $userId) {
      _id
      username
      teams
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

export const SINGLE_TEAM = gql `
query Teams($teamId: ID!) {
    team(teamId: $teamId) {
      _id
      title
      createdAt
      description
      members {
        username
        personality
        compatibility {
          rating
          type
        }
      }
    }
  }`;

export const MY_TEAMS = gql `
 query User($userId: ID!) {
    users(userId: $userId) {
      teams {
        title
      }
    }
  }`;