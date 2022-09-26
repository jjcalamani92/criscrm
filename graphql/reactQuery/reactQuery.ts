import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { CREATE_SITE } from "../mutation/site.mutation";
// import { GET_SITES, GET_USER, GET_USER_BY_EMAIL, GET_SITE, GET_PRODUCTS, GET_PRODUCT, FIND_SITE } from "../query";
// import { FIND_PAGES_0_BY_SITE, FIND_PAGES_1_BY_SITE, FIND_PAGES_2_BY_SITE, FIND_PAGE_0, FIND_PAGE_0_BY_SITE, FIND_PAGE_1_BY_SITE, FIND_PAGE_2_BY_SITE } from '../query/page.query';
// import { graphQLClient } from "./graphQLClient";
// import { sites } from "./lib";

// export function useGetUser(_id: string) {
//   return useQuery<User>(["get-user", _id], async () => {
//     const { getUser } = await graphQLClient.request(
//       GET_USER,
//       { _id }
//       );
//     return getUser;
//   });
// }
// export function useGetUserByEmail(email: string) {
//   return useQuery<User>(["get-user-by-email", email], async () => {
//     const { getUserByEmail } = await graphQLClient.request(
//       GET_USER_BY_EMAIL,
//       { email }
//     );
//     return getUserByEmail;
//   });
// }



// export function useGetSites() {
//   return useQuery<[Site]>(["get-sites"], sites);
// }

// export function useGetSite(_id: string) {
//   return useQuery<Site>(["get-site", _id], async () => {
//     const { getSite } = await graphQLClient.request(
//       GET_SITE,
//       { _id }
//     );
//     return getSite;
//   });
// }
// export function useFindSite(_id: string) {
//   return useQuery<Site>(["find-site", _id], async () => {
//     const { findSite } = await graphQLClient.request(
//       FIND_SITE,
//       { _id }
//     );
//     return findSite;
//   });
// }



// export function useFindPages0(site: string) {
//   return useQuery<[Page]>(["find-pages-0", site], async () => {
//     const { findPages0BySite } = await graphQLClient.request(
//       FIND_PAGES_0_BY_SITE,
//       { site }
//     );
//     return findPages0BySite;
//   });
// }
// export function useFindPages1(site: string) {
//   return useQuery<[Page]>(["find-pages-1", site], async () => {
//     const { findPages1BySite } = await graphQLClient.request(
//       FIND_PAGES_1_BY_SITE,
//       { site }
//     );
//     return findPages1BySite;
//   });
// }

// export function useGetPages(type: string) {
//   return useQuery<[Page]>(["get-pages-2", type], async () => {
//     const { getPages2 } = await graphQLClient.request(
//       GET_PRODUCTS,
//       { type }
//     );
//     return getPages2;
//   });
// }
// export function useGetPage(_id: string, type: string) {
//   return useQuery<Page>(["get-page-2", _id, type], async () => {
//     const { getPage2 } = await graphQLClient.request(
//       GET_PRODUCT,
//       {  _id, type }
//     );
//     return getPage2;
//   });
// }