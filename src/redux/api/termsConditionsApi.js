import { baseApi } from "./baseApi";

const termsConditionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new PrivacyPolicie
    createTermsCondition: builder.mutation({
      query: (data) => ({
        url: "/terms-conditions/create-terms-condition",
        method: "POST",
        data,
      }),
      invalidatesTags: ["terms-conditions"],
    }),

    // Query for fetching all PrivacyPolicies
    getAllTermsCondition: builder.query({
      query: () => ({
        url: "/terms-conditions",
        method: "GET",
      }),
      providesTags: ["terms-conditions"],
    }),

    // Query for fetching a single PrivacyPolicie by its ID
    getSingleTermsCondition: builder.query({
      query: (id) => ({
        url: `/terms-conditions/${id}`,
        method: "GET",
      }),
      providesTags: ["terms-conditions"],
    }),

    // Mutation for updating an existing PrivacyPolicie
    updateTermsCondition: builder.mutation({
      query: ({ id, data }) => ({
        url: `/terms-conditions/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["terms-conditions"],
    }),

    // Mutation for deleting a PrivacyPolicie by its ID
    deleteTermsCondition: builder.mutation({
      query: (id) => ({
        url: `/terms-conditions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["terms-conditions"],
    }),
  }),
});

export const {
  useCreateTermsConditionMutation,
  useGetAllTermsConditionQuery,
  useGetSingleTermsConditionQuery,
  useUpdateTermsConditionMutation,
  useDeleteTermsConditionMutation,
} = termsConditionApi;
