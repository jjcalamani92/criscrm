import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Product } from "../../../interfaces/product/product.interface";
import { getQuery } from "../../../utils/function";
import { CREATE_SITE } from "../../../graphql/mutation/site.mutation";
import { GET_SITES, GET_SITE, GET_PRODUCTS, GET_PRODUCT, FIND_SITE, FIND_PRODUCT_BY_TYPE, FIND_PRODUCTS_BY_SITE, FIND_PRODUCTS_CLOTHING, FIND_PRODUCTS_FURNITURE, FIND_ALL_PRODUCTS } from "../../../graphql/query";
import { FIND_PAGES_0_BY_SITE, FIND_PAGES_1_BY_SITE, FIND_PAGES_2_BY_SITE, FIND_PAGE_0, FIND_PAGE_0_BY_SITE, FIND_PAGE_1_BY_SITE, FIND_PAGE_2_BY_SITE } from '../../../graphql/query/page.query';
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";


export function useFindProductByType(id: string, type: string) {
  return useQuery<Product>(["find-product", id, type], async () => {
    const { findProduct } = await graphQLClient.request(
      FIND_PRODUCT_BY_TYPE,
      { id, type }
    );
    return findProduct;
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

