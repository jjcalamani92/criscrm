import {  gql } from 'graphql-request'


export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProduct!, $type: String!) {
    createProduct(input: $input, type: $type) {
			_id
    }
  }
`;
export const UPDATE_PRODUCT = gql`
mutation UpdateProduct($id: ID!, $input: UpdateProduct!, $type: String!) {
  updateProduct(id:$id, input: $input, type: $type) {
    _id
  }
}
`;
export const DELETE_PRODUCT = gql`
mutation DeleteProduct($id: ID!, $type: String!) {
  deleteProduct(id:$id, type: $type)
}
`;
export const UPDATE_PRODUCT_IMAGE = gql`
mutation UpdateProductImage($id: ID!, $input: [UpdateImage!]!, $type: String!) {
  updateProductImage(id:$id, input: $input, type: $type) {
    _id
  }
}
`;
