import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_SITE, DELETE_SITE, UPDATE_SITE } from "../../../graphql/mutation/site.mutation";

import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { CREATE_PRODUCT } from "../../../graphql/mutation";
import { useRouter } from 'next/router';
import { getQuery } from "../../../utils/function";

export const useCreateProduct = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const queryClient = useQueryClient();
  return useMutation<any>(
    async ({input, type}: any) => {
      const { createProduct } = await graphQLClient.request(CREATE_PRODUCT, {
        input,
        type
      });
      return createProduct;
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
export const useUpdateSite = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({_id, input}:any) => {
      const { updateSite } = await graphQLClient.request(UPDATE_SITE, {
        _id,
        input
      });
      return updateSite;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`get-sites`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

export const useDeleteSite = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (_id) => {
      const { deleteSite } = await graphQLClient.request(DELETE_SITE, {
        _id,
      });
      return deleteSite;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`get-sites`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};