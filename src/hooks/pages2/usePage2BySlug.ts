import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_PARENT, FIND_PAGE_0_BY_SLUG, FIND_PAGE_0 } from "../../../graphql/query/pages/page0.query";
import { FIND_PAGE_1_BY_SLUG } from "../../../graphql/query/pages/page1.query";
import { FIND_PAGE_2_BY_SLUG } from "../../../graphql/query/pages/page2.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces";

export const findPage2BySlug = async (siteID:string, slug:string) => {
  const { findPage2BySlug } = await graphQLClient.request(FIND_PAGE_2_BY_SLUG, {site: siteID, slug:slug});
  return findPage2BySlug;
};

export default function usePage2BySlug(siteID:string, slug:string) {
  return useQuery<Page>(["find-page2-by-slug", siteID, slug], () => findPage2BySlug(siteID, slug));
}
