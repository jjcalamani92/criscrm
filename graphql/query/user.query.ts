import { gql } from "graphql-request";

export const GET_USER = gql`
  query GetUser($_id: ID!) {
    getUser(_id: $_id) {
      _id
      data {
        name
        role
        image
        status
        google
      }
      email
      password
      site
    }
  }
`;
export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      _id
      data {
        name
        role
        image
        status
        google
      }
      email
      password
      site
    }
  }
`;
