import { useQuery } from "@tanstack/react-query";
import { FIND_SITE } from "../../../graphql/query/sites/site.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Site } from "../../../interfaces/site/site.interface";
import { getQuery } from "../../../utils/functionV0";



export const findSite = async (siteId:String) => {
  const { findSite } = await graphQLClient.request(FIND_SITE, {id: siteId});
  return findSite;
};

export default function useSite(asPath: string) {
  const query = getQuery(asPath)
  const siteId = query[2]!
  return useQuery<Site>(["find-site", siteId], () => findSite(siteId));
}
// export function useSiteAdmin(siteID: string) {
//   return useQuery<Site>(["find-site-admin", siteID], () => findSite(siteID));
// }
