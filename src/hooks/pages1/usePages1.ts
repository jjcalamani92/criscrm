import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0 } from "../../../graphql/query/pages/page0.query";
import { FIND_PAGES_1 } from "../../../graphql/query/pages/page1.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Page } from "../../../interfaces/page/page.interface";


export const findPages1 = async () => {
  const { findPages1 } = await graphQLClient.request(FIND_PAGES_1);
  return findPages1;
};

export default function usePages1() {
  return useQuery<[Page]>(["find-pages1"], () => findPages1());
}
