import { gql } from "@apollo/client";

export const SIGN_UP = gql`
mutation SignUp($username:String,$password:String) {
    signUp(username:$username,password:$password) {
        id
        username
        password
    }
}
`;

const SIGN_OUT = gql`

`;

export const GET_USER = gql`
query  GetUser($id:String) {
    user(id:$id) {
        id
        username
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