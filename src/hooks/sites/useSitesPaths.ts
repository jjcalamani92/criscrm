import { useQuery } from "@tanstack/react-query";
import { FIND_SITES, FIND_SITES_PATHS } from "../../../graphql/query/sites/site.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Site } from "../../../interfaces/site/site.interface";


export const findSitesPaths = async () => {
  const { findSites } = await graphQLClient.request(FIND_SITES_PATHS);
  return findSites;
};

export default function useSitesPaths() {
  return useQuery<[Site]>(["find-sites-paths"], () => findSitesPaths(), {enabled: false});
}
