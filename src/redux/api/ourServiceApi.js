import { baseApi } from "./baseApi";

const ourServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new OurServices
    createOurServices: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        data,
      }),
      invalidatesTags: ["services"],
    }),

    // Query for fetching all OurServices
    getAllOurServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags: ["services"],
    }),

    // Query for fetching a single OurServices by its ID
    getSingleOurService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: ["services"],
    }),

    // Mutation for updating an existing OurServices
    updateOurServices: builder.mutation({

      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["services"],
    }),

    // Mutation for deleting a OurServices by its ID
    deleteOurService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["services"],
    }),
  }),
});

export const {
  useCreateOurServicesMutation,
  useGetAllOurServicesQuery,
  useGetSingleOurServiceQuery,
  useUpdateOurServicesMutation,
  useDeleteOurServiceMutation,
} = ourServiceApi;
