import { baseApi } from "./baseApi";

const ourWorkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new OurWorks
    createOurWorks: builder.mutation({
      query: (data) => ({
        url: "/our-works/create-our-work",
        method: "POST",
        data,
      }),
      invalidatesTags: ["our-works"],
    }),

    // Query for fetching all OurWorks
    getAllOurWorks: builder.query({
      query: () => ({
        url: "/our-works",
        method: "GET",
      }),
      providesTags: ["our-works"],
    }),

    // Query for fetching a single OurWorks by its ID
    getSingleOurWork: builder.query({
      query: (id) => ({
        url: `/our-works/${id}`,
        method: "GET",
      }),
      providesTags: ["our-works"],
    }),

    // Mutation for updating an existing OurWorks
    updateOurWorks: builder.mutation({
      query: ({ data }) => ({
        url: `/our-works/${data?.id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["our-works"],
    }),

    // Mutation for deleting a OurWorks by its ID
    deleteOurWork: builder.mutation({
      query: (id) => ({
        url: `/our-works/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["our-works"],
    }),
  }),
});

export const {
  useCreateOurWorksMutation,
  useGetAllOurWorksQuery,
  useGetSingleOurWorkQuery,
  useUpdateOurWorksMutation,
  useDeleteOurWorkMutation,
} = ourWorkApi;
