import { gql } from "graphql-request";

export const GETSITES = gql`
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
          }
        }
      }
    }
  }
`;
