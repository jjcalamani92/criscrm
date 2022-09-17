import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_SITE, UPDATE_SITE } from "../../mutation/site.mutation";

import { graphQLClient } from "../graphQLClient";
import { useRouter } from 'next/router';

export const useCreateSite = () => {
  const queryClient = useQueryClient();
  return useMutation<any>(
    async (input) => {
      const { createSite } = await graphQLClient.request(CREATE_SITE, {
        input,
      });
      return createSite;
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
        // queryClient.invalidateQueries([`get-sites`]);
        
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
