import { baseApi } from "./baseApi";

const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Faqs
    createFaqs: builder.mutation({
      query: (data) => ({
        url: "/faqs/create-faq",
        method: "POST",
        data,
      }),
      invalidatesTags: ["faqs"],
    }),

    // Query for fetching all Faqs
    getAllFaqs: builder.query({
      query: () => ({
        url: "/faqs",
        method: "GET",
      }),
      providesTags: ["faqs"],
    }),

    // Query for fetching a single Faqs by its ID
    getSingleFaqs: builder.query({
      query: (id) => ({
        url: `/faqs/${id}`,
        method: "GET",
      }),
      providesTags: ["faqs"],
    }),

    // Mutation for updating an existing Faqs
    updateFaqs: builder.mutation({
      query: ({ id, data }) => ({
        url: `/faqs/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["faqs"],
    }),

    // Mutation for deleting a Faqs by its ID
    deleteFaqs: builder.mutation({
      query: (id) => ({
        url: `/faqs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["faqs"],
    }),
  }),
});

export const {
  useCreateFaqsMutation,
  useGetAllFaqsQuery,
  useGetSingleFaqsQuery,
  useUpdateFaqsMutation,
  useDeleteFaqsMutation,
} = faqApi;
