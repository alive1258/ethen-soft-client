import { baseApi } from "./baseApi";

const trustUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new TrustUs
    createTrustUs: builder.mutation({
      query: (data) => ({
        url: "/trust-us/create-trust-us",
        method: "POST",
        data,
      }),
      invalidatesTags: ["trust-us"],
    }),

    // Query for fetching all TrustUss
    getAllTrustUs: builder.query({
      query: () => ({
        url: "/trust-us",
        method: "GET",
      }),
      providesTags: ["trust-us"],
    }),

    // Query for fetching a single TrustUs by its ID
    getSingleTrustUs: builder.query({
      query: (id) => ({
        url: `/trust-us/${id}`,
        method: "GET",
      }),
      providesTags: ["trust-us"],
    }),

    // Mutation for updating an existing TrustUs
    updateTrustUs: builder.mutation({
      query: ({ id, data }) => ({
        url: `/trust-us/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["trust-us"],
    }),

    // Mutation for deleting a TrustUs by its ID
    deleteTrustUs: builder.mutation({
      query: (id) => ({
        url: `/trust-us/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["trust-us"],
    }),
  }),
});

export const {
  useCreateTrustUsMutation,
  useGetAllTrustUsQuery,
  useGetSingleTrustUsQuery,
  useUpdateTrustUsMutation,
  useDeleteTrustUsMutation,
} = trustUsApi;
