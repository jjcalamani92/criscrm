import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_SITE, FIND_PAGE_0 } from "../../../graphql/query/pages/page0.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces/page/page.interface";
import { getQuery } from "../../../utils/functionV0";


export const findPage0 = async (pageId:string) => {
  const { findPage0 } = await graphQLClient.request(FIND_PAGE_0, {id: pageId});
  return findPage0;
};

export default function usePage0(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query.at(-1)?.split('=')[1]!
  return useQuery<Page>(["find-page0", pageId], () => findPage0(pageId));
}
