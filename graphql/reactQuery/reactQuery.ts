import { useMutation, useQuery } from "@tanstack/react-query";
import { Site, User } from "../../interfaces";
import { CREATE_SITE } from "../mutation/site.mutation";
import { GETSITES, GET_USER, GET_USER_BY_EMAIL } from "../query";
import { graphQLClient } from "./graphQLClient";

export function useGetUser(_id: string) {
  return useQuery<User>(["get-user", _id], async () => {
    const { getUser } = await graphQLClient.request(
      GET_USER,
      { _id }
    );
    return getUser;
  });
}
export function useGetUserByEmail(email: string) {
  return useQuery<User>(["get-user-by-email", email], async () => {
    const { getUserByEmail } = await graphQLClient.request(
      GET_USER_BY_EMAIL,
      { email }
    );
    return getUserByEmail;
  });
}
export function useAddSite(input: any) {
  return useMutation([input], async () => {
    const { createSite } = await graphQLClient.request(
      CREATE_SITE,
      { input }
    );
    return createSite;
  });
}
export function useGetSites() {
  return useQuery<[Site]>(["get-sites"], async () => {
    const { getSites } = await graphQLClient.request(
      GETSITES
    );
    return getSites;
  });
}