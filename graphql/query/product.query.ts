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
export const FIND_PRODUCT_BY_TYPE = gql`
  query GetProduct($_id: ID!, $type: String!) {
    getProduct(_id: $_id, type: $type) {
      _id
      article {
        name
        slug
        mark
        inStock
        price
        discountPrice
        description
        featured{
          name
          href
        }
      }
    }
  }
`;
export const FIND_PRODUCTS_BY_SITE = gql`
  query GetProductsBySite($site: String!, $type: String!) {
    getProductsBySite(site: $site, type: $type) {
      _id
    }
  }
`;
export const FIND_PRODUCTS_CLOTHING = gql`
  query GetProductsClothing {
    getProductsClothing {
      _id
      site
    }
  }
`;
export const FIND_PRODUCTS_FURNITURE = gql`
  query GetProductsFurniture {
    getProductsFurniture {
      _id
      site
    }
  }
`;
export const FIND_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      _id
      site
      type
    }
  }
`;
