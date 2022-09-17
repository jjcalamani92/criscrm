import {  gql } from 'graphql-request'


export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProduct!, $type: String!) {
    createProduct(input: $input, type: $type) {
			_id
    }
  }
`;
