import {  gql } from 'graphql-request'


export const CREATE_ARTICLE = gql`
mutation createBlog($input: CreateBlog!) {
  createBlog(input: $input) {
    _id
  }
}
`;
// export const UPDATE_SITE = gql`
//   mutation UpdateSite($_id: ID!, $input: UpdateSite!) {
//     updateSite(_id: $_id, input: $input) {
// 			_id
//     }
//   }
// `;
// export const DELETE_SITE = gql`
//   mutation DeleteSite($_id: ID!) {
//     deleteSite(_id: $_id) 
//   }
// `;