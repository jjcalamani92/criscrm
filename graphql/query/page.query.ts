import { gql } from "graphql-request";
export const DETAIL_FRAGMENT = gql`
  fragment details on Detail {
    material
    color
    finishing
    logo
    accessories
    dimensions
  }
`;
export const FIND_PAGE_0 = gql`
  query FindPage0($_id: ID!) {
    findPage0(_id: $_id) {
      page {
        _id
        slug
        data {
          type
        }
      }
      blog {
        _id
        data {
          title
        }
      }
      _id
      slug
      data {
        seo {
          title
          href
          description
          image {
            src
            alt
          }
        }
      }
    }
  }
`;
export const FIND_PAGE_0_BY_SITE = gql`
  query FindPage0BySite($site: String!, $slug: String!) {
    findPage0BySite(site: $site, slug: $slug) {
      _id
      slug
      data {
        type
        seo {
          title
          href
          description
          image {
            src
            alt
          }
        }
      }
      page {
        _id
        slug
        data {
          seo {
            title
            description
          }
          type
        }
      }
      product {
        _id
        article{
          name
          slug
        }
      }
      blog {
        _id
      }
    }
  }
`;
export const FIND_PAGE_1_BY_SITE = gql`
  query FindPage1BySite($site: String!, $slug: String!) {
    findPage1BySite(site: $site, slug: $slug) {
      _id
      slug
      data {
        type
        seo {
          title
          href
          description
          image {
            src
            alt
          }
        }
      }
      page {
        _id
        slug
        data {
          seo {
            title
            description
          }
          type
        }
      }
      product {
        _id
        article{
          name
          slug
        }
      }
      blog {
        _id
      }
    }
  }
`;
export const FIND_PAGE_2_BY_SITE = gql`
  query FindPage2BySite($site: String!, $slug: String!) {
    findPage2BySite(site: $site, slug: $slug) {
      _id
      slug
      data {
        type
        seo {
          title
          href
          description
          image {
            src
            alt
          }
        }
      }
      page {
        _id
        slug
        data {
          seo {
            title
            description
          }
          type
        }
      }
      product {
        _id
        article{
          name
          slug
        }
      }
      blog {
        _id
      }
    }
  }
`;
export const FIND_PAGES_0_BY_SITE = gql`
  query FindPages0BySite($site: String!) {
    findPages0BySite(site: $site) {
      _id
      slug
      data {
        seo {
          title
          href
          description
          image {
            src
            alt
          }
        }
      }
      page {
        _id
        slug
      }
      product {
        _id
      }
      blog {
        _id
      }
    }
  }
`;
export const FIND_PAGES_1_BY_SITE = gql`
  query FindPages1BySite($site: String!) {
    findPages1BySite(site: $site) {
      _id
      slug
      data {
        seo {
          title
          href
          description
          image {
            src
            alt
          }
        }
      }
      page {
        _id
        slug
      }
      product {
        _id
      }
      blog {
        _id
      }
    }
  }
`;
export const FIND_PAGES_2_BY_SITE = gql`
  query FindPages2BySite($site: String!) {
    findPages2BySite(site: $site) {
      _id
      slug
      data {
        seo {
          title
          href
          description
          image {
            src
            alt
          }
        }
      }
      page {
        _id
        slug
      }
      product {
        _id
        article{
          name
          slug
        }
      }
      blog {
        _id
      }
    }
  }
`;
