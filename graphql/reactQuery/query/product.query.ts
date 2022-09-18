import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Page, Site, User } from "../../../interfaces";
import { Product } from "../../../interfaces/product.interface";
import { getQuery } from "../../../utils/function";
import { CREATE_SITE } from "../../mutation/site.mutation";
import { GET_SITES, GET_USER, GET_USER_BY_EMAIL, GET_SITE, GET_PRODUCTS, GET_PRODUCT, FIND_SITE, FIND_PRODUCT_BY_TYPE, FIND_PRODUCTS_BY_SITE, FIND_PRODUCTS_CLOTHING, FIND_PRODUCTS_FURNITURE } from "../../query";
import { FIND_PAGES_0_BY_SITE, FIND_PAGES_1_BY_SITE, FIND_PAGES_2_BY_SITE, FIND_PAGE_0, FIND_PAGE_0_BY_SITE, FIND_PAGE_1_BY_SITE, FIND_PAGE_2_BY_SITE } from '../../query/page.query';
import { graphQLClient } from "../graphQLClient";
import { sites } from "../lib";


export function useFindProductByType(_id: string, type: string) {
  return useQuery<Product>(["find-product", _id, type], async () => {
    const { getProduct } = await graphQLClient.request(
      FIND_PRODUCT_BY_TYPE,
      { _id, type }
    );
    return getProduct;
  });
}
export function useFindProductsBySite(site: string, type: string) {
  return useQuery<Product>(["find-products-by-site", site, type], async () => {
    const { getProductsBySite } = await graphQLClient.request(
      FIND_PRODUCTS_BY_SITE,
      { site, type }
    );
    return getProductsBySite;
  });
}
export function useFindProductsClothing() {

  return useQuery<[Product]>(["find-products-clothing"], async () => {
    const { getProductsClothing } = await graphQLClient.request(
      FIND_PRODUCTS_CLOTHING,
    );
    return getProductsClothing;
  });
}
export function useFindProductsFurniture() {

  return useQuery<[Product]>(["find-products-furniture"], async () => {
    const { getProductsFurniture } = await graphQLClient.request(
      FIND_PRODUCTS_FURNITURE,
    );
    return getProductsFurniture;
  });
}
// export function useFindPage1BySite(site: string, slug: string) {
//   return useQuery<Page>(["find-page1-by-site", site, slug], async () => {
//     const { findPage1BySite } = await graphQLClient.request(
//       FIND_PAGE_1_BY_SITE,
//       { site, slug }
//     );
//     return findPage1BySite;
//   });
// }
// export function useFindPage2BySite(site: string, slug: string) {
//   return useQuery<Page>(["find-page2-by-site", site, slug], async () => {
//     const { findPage2BySite } = await graphQLClient.request(
//       FIND_PAGE_2_BY_SITE,
//       { site, slug }
//     );
//     return findPage2BySite;
//   });
// }