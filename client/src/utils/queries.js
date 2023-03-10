import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER_WITH_COMPATIBILITY= gql`
query User($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    personality
    email
    compatibility {
      type
      rating
    }
    teams{
      _id
      title
      description
      members {
        username
      }
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
    username
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
export const SEARCH_PERSONALITY = gql`
query User($personality: String!) {
  searchPersonality(personality: $personality) {
    _id
    username
    email
    personality
  }
}
`;

export const MY_TEAMS = gql `
query myTeams($userId: ID!) {
  user(userId: $userId) {
    _id
    teams {
      _id
      title
      description
      createdAt
      members {
        _id
        username
        personality
        compatibility {
          type
          rating
        }
      }
    }
  }
}`;

export const SINGLE_TEAM = gql `
query Teams($teamId: ID!) {
    team(teamId: $teamId) {
      _id
      title
      createdAt
      description
      members {
        _id
        username
        personality
        compatibility {
          rating
          type
        }
      }
    }
  }`;
