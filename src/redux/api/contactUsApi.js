import { baseApi } from "./baseApi";

const ContactUs = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new ContactUs
    createContactUs: builder.mutation({
      query: (data) => ({
        url: "/contact-us",
        method: "POST",
        data,
      }),
      invalidatesTags: ["contact-us"],
    }),

    // Query for fetching all ContactUs
    getAllContactUs: builder.query({
      query: (arg) => ({
        url: "/contact-us",
        method: "GET",
        params: arg,
      }),
      providesTags: ["contact-us"],
    }),

    // Query for fetching a single ContactUs by its ID
    getSingleContactUs: builder.query({
      query: (id) => ({
        url: `/contact-us/${id}`,
        method: "GET",
      }),
      providesTags: ["contact-us"],
    }),

    // Mutation for updating an existing ContactUs
    updateContactUs: builder.mutation({
      query: ({ id, data }) => ({
        url: `/contact-us/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["contact-us"],
    }),

    // Mutation for deleting a ContactUs by its ID
    deleteContactUs: builder.mutation({
      query: (id) => ({
        url: `/contact-us/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact-us"],
    }),
  }),
});

export const {
  useCreateContactUsMutation,
  useGetAllContactUsQuery,
  useGetSingleContactUsQuery,
  useUpdateContactUsMutation,
  useDeleteContactUsMutation,
} = ContactUs;
