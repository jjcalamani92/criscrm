import { gql } from "graphql-request";
import {
  SITE_FRAGMENT,
  SITE_FRAGMENT_PATHS,
  SITE_FRAGMENT_SEO,
} from "../../fragment/site.fragment";

export const PAGE0_FRAGMENT = gql`
  fragment page0 on Page0 {
    slug
    data {
      seo {
        title
        description
        image {
          src
          alt
        }
      }
    }
  }
`;

export const FIND_SITES_SEO = gql`
  query FindSites {
    findSites {
      _id
      data {
        seo {
          title
          description
          image {
            src
            alt
          }
        }
      }
      page {
        ...page0
        page {
          slug
          data {
            seo {
              title
              description
              image {
                src
                alt
              }
            }
          }
        }
      }
    }
  }
${PAGE0_FRAGMENT}
`;
export const FIND_SITES_PATHS = gql`
  query FindSites {
    findSites {
      ...site
    }
  }
  ${SITE_FRAGMENT_PATHS}
`;
export const FIND_SITES = gql`
  query FindSites {
    findSites {
      ...site
    }
  }
  ${SITE_FRAGMENT}
`;
export const FIND_SITE = gql`
  query FindSite($id: ID!) {
    findSite(id: $id) {
      ...site
    }
  }
  ${SITE_FRAGMENT}
`;
