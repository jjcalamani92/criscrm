import { gql } from "graphql-request";

export const GET_PRODUCTS = gql`
  query GetPages2($type: String!) {
    getPages2 {
      _id
      slug
      product(type: $type) {
        _id
        article {
          name
        }
      }
    }
  }
`;
export const GET_PRODUCT = gql`
  query GetPage2($_id: ID!, $type: String!) {
    getPage2(_id: $_id) {
      _id
      slug
      product(type: $type) {
        _id
        article {
          name
        }
      }
    }
  }
`;
