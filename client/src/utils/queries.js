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
        _id
      }
    }
    comments {
      _id
      commentBody
      createdAt
      user {
        username
        _id
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

export const SEARCH_USERS = gql`
query User($searchValue: String!) {
  searchEmail(email: $searchValue) {
    _id
    username
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
  searchPersonality(personality: $searchValue) {
    _id
    username
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
  searchUsername(username: $searchValue) {
    _id
    username
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
}`;

export const SEARCH_EMAIL = gql`
query User($email: String!) {
  searchEmail(email: $email) {
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
export const SEARCH_PERSONALITY = gql`
query User($personality: String!) {
  searchPersonality(personality: $personality) {
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

export const SEARCH_USERNAME= gql`
query User($username: String!) {
  searchUsername(username: $username) {
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
