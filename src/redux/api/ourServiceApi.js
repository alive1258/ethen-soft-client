import { baseApi } from "./baseApi";

const ourServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new OurServices
    createOurServices: builder.mutation({
      query: (data) => ({
        url: "/our-services/create-our-service",
        method: "POST",
        data,
      }),
      invalidatesTags: ["our-services"],
    }),

    // Query for fetching all OurServices
    getAllOurServices: builder.query({
      query: () => ({
        url: "/our-services",
        method: "GET",
      }),
      providesTags: ["our-services"],
    }),

    // Query for fetching a single OurServices by its ID
    getSingleOurService: builder.query({
      query: (id) => ({
        url: `/our-services/${id}`,
        method: "GET",
      }),
      providesTags: ["our-services"],
    }),

    // Mutation for updating an existing OurServices
    updateOurServices: builder.mutation({
      query: ({ id, data }) => ({
        url: `/our-services/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["our-services"],
    }),

    // Mutation for deleting a OurServices by its ID
    deleteOurService: builder.mutation({
      query: (id) => ({
        url: `/our-services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["our-services"],
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
