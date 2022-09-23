import {  gql } from 'graphql-request'
import { SITE_FRAGMENT } from '../fragment/site.fragment';

export const CREATE_SITE = gql`
  mutation CreateSite($input: CreateSite!) {
    createSite(input: $input) {
			...site
    }
  }
  ${SITE_FRAGMENT}
`;
export const UPDATE_SITE = gql`
  mutation UpdateSite($_id: ID!, $input: UpdateSite!) {
    updateSite(_id: $_id, input: $input) {
			_id
    }
  }
`;
export const DELETE_SITE = gql`
  mutation DeleteSite($_id: ID!) {
    deleteSite(_id: $_id) 
  }
`;