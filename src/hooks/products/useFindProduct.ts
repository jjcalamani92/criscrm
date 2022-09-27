import { useQuery } from "@tanstack/react-query";
import { FIND_ALL_PRODUCTS, FIND_PRODUCT_BY_TYPE } from "../../../graphql";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Product } from "../../../interfaces/product/product.interface";

export const findProduct = async (id:string, type:string) => {
  const { findProduct } = await graphQLClient.request(
    FIND_PRODUCT_BY_TYPE,
    { id: id, type: type }
  );
  return findProduct;
};

export function useFindProductByType(id:string, type:string) {
  return useQuery<Product>(["find-product-by-type", id, type],  () => findProduct(id, type));
}
