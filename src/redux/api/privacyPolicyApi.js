import { baseApi } from "./baseApi";

const privacyPolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new PrivacyPolicie
    createPrivacyPolicy: builder.mutation({
      query: (data) => ({
        url: "/privacy-policies/create-privacy-policy",
        method: "POST",
        data,
      }),
      invalidatesTags: ["privacy-policies"],
    }),

    // Query for fetching all PrivacyPolicies
    getAllPrivacyPolicy: builder.query({
      query: () => ({
        url: "/privacy-policies",
        method: "GET",
      }),
      providesTags: ["privacy-policies"],
    }),

    // Query for fetching a single PrivacyPolicie by its ID
    getSinglePrivacyPolicy: builder.query({
      query: (id) => ({
        url: `/privacy-policies/${id}`,
        method: "GET",
      }),
      providesTags: ["privacy-policies"],
    }),

    // Mutation for updating an existing PrivacyPolicie
    updatePrivacyPolicy: builder.mutation({
      query: ({ id, data }) => ({
        url: `/privacy-policies/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["privacy-policies"],
    }),

    // Mutation for deleting a PrivacyPolicie by its ID
    deletePrivacyPolicy: builder.mutation({
      query: (id) => ({
        url: `/privacy-policies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["privacy-policies"],
    }),
  }),
});

export const {
  useCreatePrivacyPolicyMutation,
  useGetAllPrivacyPolicyQuery,
  useGetSinglePrivacyPolicyQuery,
  useUpdatePrivacyPolicyMutation,
  useDeletePrivacyPolicyMutation,
} = privacyPolicyApi;
