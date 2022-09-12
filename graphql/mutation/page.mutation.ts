import {  gql } from 'graphql-request'


export const CREATE_PAGE_0 = gql`
  mutation CreatePage0($input: CreatePage!) {
    createPage0(input: $input) {
			_id
    }
  }
`;
export const UPDATE_PAGE_0 = gql`
  mutation UpdatePage0($_id:ID!, $input: UpdatePage!) {
    updatePage0(_id:$_id, input: $input) {
			_id
    }
  }
`;
export const UPDATE_PAGE_1 = gql`
  mutation UpdatePage1($_id:ID!, $input: UpdatePage!) {
    updatePage1(_id:$_id, input: $input) {
			_id
    }
  }
`;
export const UPDATE_PAGE_2 = gql`
  mutation UpdatePage2($_id:ID!, $input: UpdatePage!) {
    updatePage2(_id:$_id, input: $input) {
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
  mutation DeletePage0($_id: ID!) {
    deletePage0(_id: $_id)
  }
`;
export const DELETE_PAGE_1 = gql`
  mutation DeletePage1($_id: ID!) {
    deletePage1(_id: $_id)
  }
`;
export const DELETE_PAGE_2 = gql`
  mutation DeletePage2($_id: ID!) {
    deletePage2(_id: $_id)
  }
`;