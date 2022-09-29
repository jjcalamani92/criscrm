import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_SITE, DELETE_SITE, UPDATE_SITE } from "../../../graphql/mutation/site.mutation";

import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../../../graphql/mutation";
import { useRouter } from 'next/router';
import { getQuery } from "../../../utils/function";
import { DeleteProduct } from "../../../interfaces/product/product.interface";

export const useDeleteProduct = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, type}:DeleteProduct) => {
      const { deleteProduct } = await graphQLClient.request(DELETE_PRODUCT, {
        id,
        type
      });
      return deleteProduct;
    },
    {
      onSuccess: () => {
        if (query.length === 6) {
          queryClient.invalidateQueries([`find-page2-by-slug`]);
        } else if (query.length === 5) {
          queryClient.invalidateQueries([`find-page1-by-slug`]);
        } else {
          queryClient.invalidateQueries([`find-page0-by-slug`]);
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};