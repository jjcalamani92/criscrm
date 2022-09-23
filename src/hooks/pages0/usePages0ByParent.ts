import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_BY_PARENT } from "../../../graphql/query/pages/page0.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces";

export const findPages0ByParent = async (parentID:string) => {
  const { findPages0BySite } = await graphQLClient.request(FIND_PAGES_0_BY_PARENT, {site: parentID});
  return findPages0BySite;
};

export default function usePages0ByParent(parentID:string) {
  return useQuery<[Page]>(["find-pages0-by-parent", parentID], () => findPages0ByParent(parentID));
}
