import { gql } from "graphql-request";

export const FIND_PAGES_0 = gql`
  query FindPages0 {
    findPages0 {
      _id
      parent
    }
  }
`;
export const FIND_PAGE_0 = gql`
  query FindPage0($id:ID!) {
    findPage0(id:$id) {
      _id
      slug
      
      article{
        _id
        data{
          title
          thumbnail{
            src
            alt
          }
        }
        updateDate{
          createdAt
        }
      }
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
    }
  }
`;
export const FIND_PAGES_0_BY_SITE = gql`
  query FindPages0BySite($site: String!) {
    findPages0BySite(site: $site) {
      _id
      slug
      parent
    }
  }
`;
export const FIND_PAGE_0_BY_PARENT = gql`
  query FindPages0ByParent($parentId: String!) {
    findPages0ByParent(parentId: $parentId) {
      _id
      slug
      
      article{
        _id
        data{
          title
          thumbnail{
            src
            alt
          }
        }
        updateDate{
          createdAt
        }
      }
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
    }
  }
`;
export const FIND_PAGE_0_BY_SLUG = gql`
  query FindPage0BySlug($site: String!, $slug: String!) {
    findPage0BySlug(site: $site, slug: $slug) {
      _id
      slug
      
      article{
        _id
        data{
          title
          thumbnail{
            src
            alt
          }
        }
        updateDate{
          createdAt
        }
      }
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
    }
  }
`;
