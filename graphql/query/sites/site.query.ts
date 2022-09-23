import { gql } from "graphql-request";
import { SITE_FRAGMENT, SITE_FRAGMENT_PATHS } from "../../fragment/site.fragment";

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
  query FindSite($_id:ID!)  {
    findSite(_id:$_id)  {
      ...site
    }
  }
  ${SITE_FRAGMENT}
`;
