import {  gql } from 'graphql-request'


export const CREATE_ARTICLE = gql`
mutation createArticle($input: CreateArticle!) {
  createArticle(input: $input) {
    _id
  }
}
`;
export const UPDATE_ARTICLE = gql`
  mutation UpdateArticle($_id: ID!, $input: UpdateArticle!) {
    updateArticle(_id: $_id, input: $input) {
			_id
    }
  }
`;
export const DELETE_ARTICLE = gql`
  mutation DeleteArticle($_id: ID!) {
    deleteArticle(_id: $_id) 
  }
`;