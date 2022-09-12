import { gql } from "graphql-request";

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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
