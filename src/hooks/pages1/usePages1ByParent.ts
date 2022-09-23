import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_PARENT } from "../../../graphql/query/pages/page0.query";
import { FIND_PAGES_1_BY_PARENT } from "../../../graphql/query/pages/page1.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces";

export const findPages1ByParent = async (parentID:string) => {
  const { findPages1ByParent } = await graphQLClient.request(FIND_PAGES_1_BY_PARENT, {parent: parentID});
  return findPages1ByParent;
};

export default function usePages1ByParent(parentID:string) {
  return useQuery<[Page]>(["find-pages1-by-parent", parentID], () => findPages1ByParent(parentID));
}
