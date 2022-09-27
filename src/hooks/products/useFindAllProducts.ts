import { useQuery } from "@tanstack/react-query";
import { FIND_ALL_PRODUCTS } from "../../../graphql";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Product } from "../../../interfaces/product/product.interface";

export const findAllProducts = async () => {
  const { findAllProducts } = await graphQLClient.request(
    FIND_ALL_PRODUCTS,
  );
  return findAllProducts;

};

export function useFindAllProducts() {

  return useQuery<[Product]>(["find-all-products"],  () =>findAllProducts());
}
