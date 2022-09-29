import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_SITE, FIND_PAGE_0_BY_SLUG, FIND_PAGE_0 } from "../../../graphql/query/pages/page0.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces/page/page.interface";


export const findPage0BySlug = async (siteID:string, slug:string) => {
  const { findPage0BySlug } = await graphQLClient.request(FIND_PAGE_0_BY_SLUG, {site: siteID, slug:slug});
  return findPage0BySlug;
};

export default function usePage0BySlug(siteID:string, slug:string) {
  return useQuery<Page>(["find-page0-by-slug", siteID, slug], () => findPage0BySlug(siteID, slug));
}
