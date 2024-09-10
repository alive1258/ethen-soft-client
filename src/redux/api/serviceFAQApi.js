import { baseApi } from "./baseApi";

const serviceFAQApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new service faq
    createServiceFAQ: builder.mutation({
      query: (data) => ({
        url: "/service-faqs",
        method: "POST",
        data,
      }),
      invalidatesTags: ["service-faq"],
    }),

    // Query for fetching all service faq
    getAllServiceFAQs: builder.query({
      query: (arg) => ({
        url: "/service-faqs",
        method: "GET",
        params: arg,
      }),
      providesTags: ["service-faq"],
    }),

    // Query for fetching a single service faq by its ID
    getSingleServiceFAQ: builder.query({
      query: (id) => ({
        url: `/service-faqs/${id}`,
        method: "GET",
      }),
      providesTags: ["service-faq"],
    }),

    // Mutation for updating an existing service faq
    updateServiceFAQ: builder.mutation({
      query: ({ id, data }) => ({
        url: `/service-faqs/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["service-faq"],
    }),

    // Mutation for deleting a service faq by its ID
    deleteServiceFAQ: builder.mutation({
      query: (id) => ({
        url: `/service-faqs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service-faq"],
    }),
  }),
});

export const {
  useCreateServiceFAQMutation,
  useGetAllServiceFAQsQuery,
  useGetSingleServiceFAQQuery,
  useUpdateServiceFAQMutation,
  useDeleteServiceFAQMutation,
} = serviceFAQApi;
