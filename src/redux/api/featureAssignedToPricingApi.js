import { baseApi } from "./baseApi";

const featureAssignedToPricingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Pricing Feature
    createFeatureAssignedToPricing: builder.mutation({
      query: (data) => ({
        url: "/feature-assigned-pricing",
        method: "POST",
        data,
      }),
      invalidatesTags: ["feature-assigned-pricing"],
    }),

    // Query for fetching all Pricing
    getAllFeatureAssignedToPricing: builder.query({
      query: (arg) => ({
        url: "/feature-assigned-pricing",
        method: "GET",
        params: arg,
      }),
      providesTags: ["feature-assigned-pricing"],
    }),

    // Query for fetching a single Pricing Feature by its ID
    getSingleFeatureAssignedToPricing: builder.query({
      query: (id) => ({
        url: `/feature-assigned-pricing/${id}`,
        method: "GET",
      }),
      providesTags: ["feature-assigned-pricing"],
    }),

    // Mutation for updating an existing Pricing Feature
    updateFeatureAssignedToPricing: builder.mutation({
      query: ({ id, data }) => ({
        url: `/feature-assigned-pricing/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["feature-assigned-pricing"],
    }),

    // Mutation for deleting a Pricing Feature by its ID
    deleteFeatureAssignedToPricing: builder.mutation({
      query: (id) => ({
        url: `/feature-assigned-pricing/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["feature-assigned-pricing"],
    }),
  }),
});

export const {
  useCreateFeatureAssignedToPricingMutation,
  useGetAllFeatureAssignedToPricingQuery,
  useGetSingleFeatureAssignedToPricingQuery,
  useUpdateFeatureAssignedToPricingMutation,
  useDeleteFeatureAssignedToPricingMutation,
} = featureAssignedToPricingApi;
