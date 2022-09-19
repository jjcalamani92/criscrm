import {  gql } from 'graphql-request'


export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProduct!, $type: String!) {
    createProduct(input: $input, type: $type) {
			_id
    }
  }
`;
export const UPDATE_PRODUCT = gql`
mutation UpdateProduct($_id: ID!, $input: UpdateProduct!, $type: String!) {
  updateProduct(_id:$_id, input: $input, type: $type) {
    _id
  }
}
`;
