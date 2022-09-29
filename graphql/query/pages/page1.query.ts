import { gql } from "graphql-request";

export const FIND_PAGES_1 = gql`
  query FindPages1 {
    findPages1 {
      _id
      slug
      parent
    }
  }
`;
export const FIND_PAGE_1 = gql`
  query FindPage1($id:ID!) {
    findPage1(id:$id) {
      _id
      slug
      parent
    }
  }
`;
export const FIND_PAGES_1_BY_PARENT = gql`
  query FindPages1ByParent($parent: String!) {
    findPages1ByParent(parent: $parent) {
      _id
      slug
      parent
    }
  }
`;
export const FIND_PAGE_1_BY_SLUG = gql`
  query FindPage1BySlug($site: String!, $slug: String!) {
    findPage1BySlug(site: $site, slug: $slug) {
      _id
      slug
      data{
        type
        seo{
          title
          description
        }
      }
      page{
        _id
        slug
        data{
          type
          seo{
            title
            description
          }
        }
      }
      product{
        _id
        data{
          name
        }
      }
    }
  }
`;
