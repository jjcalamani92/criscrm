import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_SITE } from "../../../graphql/query/pages/page0.query";
import { FIND_PAGES_1_BY_PARENT } from "../../../graphql/query/pages/page1.query";
import { FIND_PAGES_2_BY_PARENT } from "../../../graphql/query/pages/page2.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces/page/page.interface";
import { getQuery } from "../../../utils/functionV0";


export const findPages2ByParent = async (parentId:string) => {
  const { findPages2ByParent } = await graphQLClient.request(FIND_PAGES_2_BY_PARENT, {parentId: parentId});
  return findPages2ByParent;
};

export default function usePages2ByParent(asPath:string) {
  const query = getQuery(asPath)
  const parentId = query.at(-1)?.split('=')[1]!
  return useQuery<[Page]>(["find-pages2-by-parent", parentId], () => findPages2ByParent(parentId));
}
