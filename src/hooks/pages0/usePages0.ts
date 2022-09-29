import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0 } from "../../../graphql/query/pages/page0.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces/page/page.interface";


export const findPages0 = async () => {
  const { findPages0 } = await graphQLClient.request(FIND_PAGES_0);
  return findPages0;
};

export default function usePages0() {
  return useQuery<[Page]>(["find-pages0"], () => findPages0());
}
