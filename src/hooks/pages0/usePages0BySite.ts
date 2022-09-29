import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_SITE } from "../../../graphql/query/pages/page0.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces/page/page.interface";


export const findPages0BySite = async (parentID:string) => {
  const { findPages0BySite } = await graphQLClient.request(FIND_PAGES_0_BY_SITE, {site: parentID});
  return findPages0BySite;
};

export default function usePages0BySite(parentID:string) {
  return useQuery<[Page]>(["find-pages0-by-site", parentID], () => findPages0BySite(parentID));
}
