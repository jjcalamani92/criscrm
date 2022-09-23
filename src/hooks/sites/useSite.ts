import { useQuery } from "@tanstack/react-query";
import { FIND_SITE } from "../../../graphql/query/sites/site.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Site } from "../../../interfaces";


export const findSite = async (siteID:String) => {
  const { findSite } = await graphQLClient.request(FIND_SITE, {_id: siteID});
  return findSite;
};

export default function useSite(siteID: string) {
  return useQuery<Site>(["find-site", siteID], () => findSite(siteID));
}
