import { gql } from "graphql-request";
import { SITE_FRAGMENT } from "../fragment/site.fragment";



// export const FIND_SITES = gql`
//   query FindSites {
//     findSites {
//       ...site
//     }
//   }
//   ${SITE_FRAGMENT}
// `;

export const GET_SITES = gql`
  query FindSites {
    findSites {
      _id
      data {
        name
        description
        dataBase {
          type
        }
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
  }
`;

export const FIND_SITE = gql`
  query FindSite($_id: ID!) {
    findSite(_id: $_id) {
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
      }
    }
  }
`;

export const GET_SITE = gql`
  query FindSite($_id: ID!) {
    findSite(_id: $_id) {
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
