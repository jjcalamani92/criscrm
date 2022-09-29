import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_SITE, DELETE_SITE, UPDATE_SITE } from "../../../graphql/mutation/site.mutation";

import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "../../../graphql/mutation";
import { useRouter } from 'next/router';
import { getQuery } from "../../../utils/function";
import { UpdateProduct } from "../../../interfaces/product/product.interface";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, type}:UpdateProduct) => {
      const { updateProduct } = await graphQLClient.request(UPDATE_PRODUCT, {
        id,
        input,
        type
      });
      return updateProduct;
    },
    {
      onSuccess: ( data, {id, input, type}) => {
        queryClient.invalidateQueries(["find-product-by-type", id, type]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};