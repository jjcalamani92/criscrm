import { useQuery } from "@tanstack/react-query";
import { FIND_SITES, FIND_SITES_PATHS, FIND_SITES_SEO } from "../../../graphql/query/sites/site.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Site } from "../../../interfaces/site/site.interface";


export const findSitesSeo = async () => {
  const { findSites } = await graphQLClient.request(FIND_SITES_SEO);
  return findSites;
};

export default function useSitesSeo() {
  return useQuery<[Site]>(["find-sites-seo"], () => findSitesSeo());
}
