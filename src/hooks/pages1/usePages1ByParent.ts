import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_SITE } from "../../../graphql/query/pages/page0.query";
import { FIND_PAGES_1_BY_PARENT } from "../../../graphql/query/pages/page1.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces/page/page.interface";
import { getQuery } from "../../../utils/functionV0";


export const findPages1ByParent = async (parentId:string) => {
  const { findPages1ByParent } = await graphQLClient.request(FIND_PAGES_1_BY_PARENT, {parentId: parentId});
  return findPages1ByParent;
};

export default function usePages1ByParent(asPath:string) {
  const query = getQuery(asPath)
  const parentId = query.at(-1)?.split('=')[1]!
  return useQuery<[Page]>(["find-pages1-by-parent", parentId], () => findPages1ByParent(parentId));
}
