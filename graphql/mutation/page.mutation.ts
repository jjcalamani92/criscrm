import {  gql } from 'graphql-request'


export const CREATE_PAGE_0 = gql`
  mutation CreatePage0($input: CreatePage!) {
    createPage0(input: $input) {
			_id
    }
  }
`;
export const UPDATE_PAGE_0 = gql`
  mutation UpdatePage0($id:ID!, $input: UpdatePage!) {
    updatePage0(id:$id, input: $input) {
			_id
    }
  }
`;
export const UPDATE_PAGE_1 = gql`
  mutation UpdatePage1($id:ID!, $input: UpdatePage!) {
    updatePage1(id:$id, input: $input) {
			_id
    }
  }
`;
export const UPDATE_PAGE_2 = gql`
  mutation UpdatePage2($id:ID!, $input: UpdatePage!) {
    updatePage2(id:$id, input: $input) {
			_id
    }
  }
`;
export const CREATE_PAGE_1 = gql`
  mutation CreatePage1($input: CreatePage!) {
    createPage1(input: $input) {
			_id
    }
  }
`;
export const CREATE_PAGE_2 = gql`
  mutation CreatePage2($input: CreatePage!) {
    createPage2(input: $input) {
			_id
    }
  }
`;
export const DELETE_PAGE_0 = gql`
  mutation DeletePage0($id: ID!) {
    deletePage0(id: $id)
  }
`;
export const DELETE_PAGE_1 = gql`
  mutation DeletePage1($id: ID!) {
    deletePage1(id: $id)
  }
`;
export const DELETE_PAGE_2 = gql`
  mutation DeletePage2($id: ID!) {
    deletePage2(id: $id)
  }
`;