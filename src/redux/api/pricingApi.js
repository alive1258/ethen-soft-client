import { baseApi } from "./baseApi";

const pricingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Pricing
    createPricing: builder.mutation({
      query: (data) => ({
        url: "/pricing",
        method: "POST",
        data,
      }),
      invalidatesTags: ["pricing"],
    }),

    // Query for fetching all Pricing
    getAllPricing: builder.query({
      query: (arg) => ({
        url: "/pricing",
        method: "GET",
        params: arg,
      }),
      providesTags: ["pricing"],
    }),

    // Query for fetching a single Pricing by its ID
    getSinglePricing: builder.query({
      query: (id) => ({
        url: `/pricing/${id}`,
        method: "GET",
      }),
      providesTags: ["pricing"],
    }),

    // Mutation for updating an existing Pricing
    updatePricing: builder.mutation({
      query: ({ id, data }) => ({
        url: `/pricing/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["pricing"],
    }),

    // Mutation for deleting a Pricing by its ID
    deletePricing: builder.mutation({
      query: (id) => ({
        url: `/pricing/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pricing"],
    }),
  }),
});

export const {
  useCreatePricingMutation,
  useGetAllPricingQuery,
  useGetSinglePricingQuery,
  useUpdatePricingMutation,
  useDeletePricingMutation,
} = pricingApi;
