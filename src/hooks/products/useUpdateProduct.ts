import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_SITE, DELETE_SITE, UPDATE_SITE } from "../../../graphql/mutation/site.mutation";

import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "../../../graphql/mutation";
import { useRouter } from 'next/router';
import { getQuery } from "../../../utils/function";

export const useUpdateProduct = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const queryClient = useQueryClient();
  return useMutation(
    async ({_id, input, type}:any) => {
      const { updateProduct } = await graphQLClient.request(UPDATE_PRODUCT, {
        _id,
        input,
        type
      });
      return updateProduct;
    },
    {
      onSuccess: () => {
        if (query.length === 6) {
          queryClient.invalidateQueries([`find-page2-by-site`]);
        } else if (query.length === 5) {
          queryClient.invalidateQueries([`find-page1-by-site`]);
        } else {
          queryClient.invalidateQueries([`find-page0-by-site`]);

        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};