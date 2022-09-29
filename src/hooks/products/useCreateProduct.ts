import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_SITE, DELETE_SITE, UPDATE_SITE } from "../../../graphql/mutation/site.mutation";

import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { CREATE_PRODUCT } from "../../../graphql/mutation";
import { useRouter } from 'next/router';
import { getQuery } from "../../../utils/function";
import { CreateProduct } from "../../../interfaces/product/product.interface";

export const useCreateProduct = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const queryClient = useQueryClient();
  return useMutation(
    async ({input, type}: CreateProduct) => {
      const { createProduct } = await graphQLClient.request(CREATE_PRODUCT, {
        input,
        type
      });
      return createProduct;
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
