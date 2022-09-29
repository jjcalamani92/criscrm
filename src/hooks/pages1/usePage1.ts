import { useQuery } from "@tanstack/react-query";
import { FIND_PAGE_1 } from "../../../graphql/query/pages/page1.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces/page/page.interface";
import { getQuery } from "../../../utils/functionV0";


export const findPage1 = async (pageId:string) => {
  const { findPage1 } = await graphQLClient.request(FIND_PAGE_1, {id: pageId});
  return findPage1;
};

export default function usePage1(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query.at(-1)?.split('=')[1]!
  return useQuery<Page>(["find-page1", pageId], () => findPage1(pageId));
}
