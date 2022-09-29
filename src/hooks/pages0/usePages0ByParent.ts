import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_SITE, FIND_PAGE_0_BY_PARENT } from "../../../graphql/query/pages/page0.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces/page/page.interface";
import { getQuery } from "../../../utils/functionV0";


export const findPages0ByParent = async (parentId:string) => {
  const { findPages0ByParent } = await graphQLClient.request(FIND_PAGE_0_BY_PARENT, {parentId: parentId});
  return findPages0ByParent;
};

export default function usePages0ByParent(asPath:string) {
  const query = getQuery(asPath)
  const parentId = query.at(-1)!
  return useQuery<[Page]>(["find-pages0-by-parent", parentId], () => findPages0ByParent(parentId));
}
