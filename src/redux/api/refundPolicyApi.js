import { baseApi } from "./baseApi";

const refundPolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new RefundPolicie
    createRefundPolicy: builder.mutation({
      query: (data) => ({
        url: "/refund-policies/create-refund-policy",
        method: "POST",
        data,
      }),
      invalidatesTags: ["refund-policies"],
    }),

    // Query for fetching all RefundPolicies
    getAllRefundPolicy: builder.query({
      query: () => ({
        url: "/refund-policies",
        method: "GET",
      }),
      providesTags: ["refund-policies"],
    }),

    // Query for fetching a single RefundPolicie by its ID
    getSingleRefundPolicy: builder.query({
      query: (id) => ({
        url: `/refund-policies/${id}`,
        method: "GET",
      }),
      providesTags: ["refund-policies"],
    }),

    // Mutation for updating an existing RefundPolicie
    updateRefundPolicy: builder.mutation({
      query: ({ id, data }) => ({
        url: `/refund-policies/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["refund-policies"],
    }),

    // Mutation for deleting a RefundPolicie by its ID
    deleteRefundPolicy: builder.mutation({
      query: (id) => ({
        url: `/refund-policies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["refund-policies"],
    }),
  }),
});

export const {
  useCreateRefundPolicyMutation,
  useGetAllRefundPolicyQuery,
  useGetSingleRefundPolicyQuery,
  useUpdateRefundPolicyMutation,
  useDeleteRefundPolicyMutation,
} = refundPolicyApi;
