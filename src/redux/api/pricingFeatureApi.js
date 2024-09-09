import { baseApi } from "./baseApi";

const pricingFeatureApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Pricing Feature
    createPricingFeature: builder.mutation({
      query: (data) => ({
        url: "/pricing-features",
        method: "POST",
        data,
      }),
      invalidatesTags: ["pricing-feature"],
    }),

    // Query for fetching all Pricing Feature
    getAllPricingFeatures: builder.query({
      query: () => ({
        url: "/pricing-features",
        method: "GET",
      }),
      providesTags: ["pricing-feature"],
    }),

    // Query for fetching a single Pricing Feature by its ID
    getSinglePricingFeature: builder.query({
      query: (id) => ({
        url: `/pricing-features/${id}`,
        method: "GET",
      }),
      providesTags: ["pricing-feature"],
    }),

    // Mutation for updating an existing Pricing Feature
    updatePricingFeature: builder.mutation({
      query: ({ id, data }) => ({
        url: `/pricing-features/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["pricing-feature"],
    }),

    // Mutation for deleting a Pricing Feature by its ID
    deletePricingFeature: builder.mutation({
      query: (id) => ({
        url: `/pricing-features/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pricing-feature"],
    }),
  }),
});

export const {
  useCreatePricingFeatureMutation,
  useGetAllPricingFeaturesQuery,
  useGetSinglePricingFeatureQuery,
  useUpdatePricingFeatureMutation,
  useDeletePricingFeatureMutation,
} = pricingFeatureApi;
