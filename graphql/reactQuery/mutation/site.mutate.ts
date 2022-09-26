import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_SITE, DELETE_SITE, UPDATE_SITE } from "../../mutation/site.mutation";

import { graphQLClient } from "../graphQLClient";
import { useRouter } from 'next/router';
import { Site } from "../../../interfaces";
import { CreateSite, UpdateSite } from "../../../interfaces/site/site.interface";

export const useCreateSite = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input:CreateSite) => {
      const { createSite } = await graphQLClient.request(CREATE_SITE, {
        input,
      });
      return createSite;
    },
    {
      onSuccess: async (createSite) => {
        // queryClient.invalidateQueries(["find-sites"]);
        queryClient.setQueryData(['find-sites'], (old: any) => [...old, createSite]);
        // queryClient.setQueryData(['find-sites'], createSite);
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
    async ({id, input}:UpdateSite) => {
      const { updateSite } = await graphQLClient.request(UPDATE_SITE, {
        id,
        input
      });
      return updateSite;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`find-site`]);
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
    async (id:string) => {
      const { deleteSite } = await graphQLClient.request(DELETE_SITE, {
        id,
      });
      return deleteSite;
    },
    {
      onSuccess: (deleteSite) => {
        // queryClient.invalidateQueries([`get-sites`]);
        queryClient.setQueryData(['find-sites'], (old:any) => old.filter((site:Site) => site._id !== deleteSite))
        // queryClient.setQueryData(['find-sites'], (old: any) => [...old, createSite]);

      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};