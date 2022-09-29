import { gql } from "graphql-request";

export const FIND_PAGES_2 = gql`
  query FindPages2 {
    findPages2 {
      _id
      slug
      parent
    }
  }
`;
export const FIND_PAGE_2 = gql`
  query FindPage2($id:ID!) {
    findPage2(id:$id) {
      _id
      slug
      parent
    }
  }
`;
export const FIND_PAGES_2_BY_PARENT = gql`
  query FindPages2ByParent($parent: String!) {
    findPages2ByParent(parent: $parent) {
      _id
      slug
      parent
    }
  }
`;
export const FIND_PAGE_2_BY_SLUG = gql`
  query FindPage2BySlug($site: String!, $slug: String!) {
    findPage2BySlug(site: $site, slug: $slug) {
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
          image{
            uid
            src
            alt
          }
        }
      }
    }
  }
`;
