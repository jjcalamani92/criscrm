import { useQuery } from "@tanstack/react-query";
import { FIND_SITE, FIND_SITE_ADMIN } from "../../../graphql/query/sites/site.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Site } from "../../../interfaces/site/site.interface";



export const findSiteAdmin = async (siteID:String) => {
  const { findSite } = await graphQLClient.request(FIND_SITE_ADMIN, {id: siteID});
  return findSite;
};


export default function useSiteAdmin(siteID: string) {
  return useQuery<Site>(["find-site-admin", siteID], () => findSiteAdmin(siteID));
}
