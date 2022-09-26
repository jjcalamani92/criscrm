import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_PARENT, FIND_PAGE_0 } from "../../../graphql/query/pages/page0.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces";

export const findPage0 = async (pageID:string) => {
  const { findPage0 } = await graphQLClient.request(FIND_PAGE_0, {id: pageID});
  return findPage0;
};

export default function usePage0(pageID:string) {
  return useQuery<Page>(["find-page0", pageID], () => findPage0(pageID));
}
