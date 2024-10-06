import { baseApi } from "./baseApi";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Pricing
    createCustomer: builder.mutation({
      query: (data) => ({
        url: "/customers/create-customer",
        method: "POST",
        data,
      }),
      invalidatesTags: ["customer"],
    }),

    // Query for fetching all Pricing
    getAllCustomer: builder.query({
      query: (arg) => ({
        url: "/customers",
        method: "GET",
        params: arg,
      }),
      providesTags: ["customer"],
    }),

    // Query for fetching a single Pricing by its ID
    getSingleCustomer: builder.query({
      query: (id) => ({
        url: `/customers/${id}`,
        method: "GET",
      }),
      providesTags: ["customer"],
    }),

    // Mutation for updating an existing Pricing
    updateCustomer: builder.mutation({
      query: ({ id, data }) => ({
        url: `/customers/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["customer"],
    }),

    // Mutation for deleting a Pricing by its ID
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/customers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["customer"],
    }),
  }),
});

export const {
  useCreateCustomerMutation,
  useGetAllCustomerQuery,
  useGetSingleCustomerQuery,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customerApi;
