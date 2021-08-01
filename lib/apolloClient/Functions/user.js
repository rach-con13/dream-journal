import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp(
    $authID: String
    $username: String
    $password: String
    $email: String
  ) {
    signUp(
      authID: $authID
      username: $username
      password: $password
      email: $email
    ) {
     
        id
        username
        email
        password
      
    
    }
  }
`;

export const GET_USER = gql`
  query GetUser($authID: String) {
    user(id: $id) {
      id
      username
      email
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
    }
  }
`;

export const GET_USER_CHANNELS = gql`
  query GetUser($authID: String) {
    user(authID: $authID) {
      channels {
        id
        title
        pinned
      }
    }
  }
`;
