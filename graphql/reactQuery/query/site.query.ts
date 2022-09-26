import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Page } from "../../../interfaces/page/page.interface";
import { FIND_PAGES_0_BY_SITE, FIND_PAGES_1_BY_SITE, FIND_PAGES_2_BY_SITE, FIND_PAGE_0, FIND_PAGE_0_BY_SITE, FIND_PAGE_1_BY_SITE, FIND_PAGE_2_BY_SITE } from '../../query/page.query';
import { graphQLClient } from "../graphQLClient";


export function useFindPage0BySite(site: string, slug: string) {
  return useQuery<Page>(["find-page0-by-site", site, slug], async () => {
    const { findPage0BySite } = await graphQLClient.request(
      FIND_PAGE_0_BY_SITE,
      { site, slug }
    );
    return findPage0BySite;
  });
}
export function useFindPage1BySite(site: string, slug: string) {
  return useQuery<Page>(["find-page1-by-site", site, slug], async () => {
    const { findPage1BySite } = await graphQLClient.request(
      FIND_PAGE_1_BY_SITE,
      { site, slug }
    );
    return findPage1BySite;
  });
}
export function useFindPage2BySite(site: string, slug: string) {
  return useQuery<Page>(["find-page2-by-site", site, slug], async () => {
    const { findPage2BySite } = await graphQLClient.request(
      FIND_PAGE_2_BY_SITE,
      { site, slug }
    );
    return findPage2BySite;
  });
}