import { useQuery } from "@tanstack/react-query";
import { FIND_SITES } from "../../../graphql/query/sites/site.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Site } from "../../../interfaces";

export const findSites = async () => {
  const { findSites } = await graphQLClient.request(FIND_SITES);
  return findSites;
};

export default function useSites() {
  return useQuery<[Site]>(["find-sites"], () => findSites(), {enabled: false});
}
