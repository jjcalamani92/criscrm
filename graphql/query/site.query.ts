import { gql } from "graphql-request";

export const GET_SITES = gql`
  query GetSites {
    getSites {
      _id
      data {
        name
        description
        type
      }
      url
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
          }
        }
      }
    }
  }
`;
export const GET_SITE = gql`
  query GetSite($_id: ID!) {
    getSite(_id: $_id) {
      _id
      data {
        name
        description
        type
      }
      url
      page {
        _id
        slug
        data {
          seo {
            title
            href
            description
          }
          type
        }
        page {
          _id
          slug
          data {
            seo {
              title
              href
              description
            }
            type
          }
          page {
            _id
            slug
            data {
              seo {
                title
                href
                description
              }
              type
            }
          }
        }
      }
    }
  }
`;
