import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_PAGE_0, CREATE_PAGE_1, CREATE_PAGE_2, UPDATE_PAGE_0, UPDATE_PAGE_1, UPDATE_PAGE_2 } from "../../mutation";
import { graphQLClient } from "../graphQLClient";

export const useCreatePage0 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input) => {
      const { createPage0 } = await graphQLClient.request(CREATE_PAGE_0, {
        input,
      });
      return createPage0;
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
export const useUpdatePage0 = () => {
  return useMutation(
    async ({_id, input}:any) => {
      const { updatePage0 } = await graphQLClient.request(UPDATE_PAGE_0, {
        _id,
        input
      });
      return updatePage0;
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

export const useCreatePage1 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input) => {
      const { createPage1 } = await graphQLClient.request(CREATE_PAGE_1, {
        input,
      });
      return createPage1;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`find-page0-by-site`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

export const useUpdatePage1 = () => {
  return useMutation(
    async ({_id, input}:any) => {
      const { updatePage1 } = await graphQLClient.request(UPDATE_PAGE_1, {
        _id,
        input
      });
      return updatePage1;
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

export const useCreatePage2 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input) => {
      const { createPage2 } = await graphQLClient.request(CREATE_PAGE_2, {
        input,
      });
      return createPage2;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`find-page1-by-site`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
export const useUpdatePage2 = () => {
  return useMutation(
    async ({_id, input}:any) => {
      const { updatePage2 } = await graphQLClient.request(UPDATE_PAGE_2, {
        _id,
        input
      });
      return updatePage2;
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