import { baseApi } from "./baseApi";

const ourClientsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new OurClients
    createOurClients: builder.mutation({
      query: (data) => ({
        url: "/our-clients/create-our-client",
        method: "POST",
        data,
      }),
      invalidatesTags: ["our-clients"],
    }),

    // Query for fetching all OurClients
    getAllOurClients: builder.query({
      query: () => ({
        url: "/our-clients",
        method: "GET",
      }),
      providesTags: ["our-clients"],
    }),

    // Query for fetching a single OurClients by its ID
    getSingleOurClients: builder.query({
      query: (id) => ({
        url: `/our-clients/${id}`,
        method: "GET",
      }),
      providesTags: ["our-clients"],
    }),

    // Mutation for updating an existing OurClients
    updateOurClients: builder.mutation({
      query: ({ id, data }) => ({
        url: `/our-clients/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["our-clients"],
    }),

    // Mutation for deleting a OurClients by its ID
    deleteOurClients: builder.mutation({
      query: (id) => ({
        url: `/our-clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["our-clients"],
    }),
  }),
});

export const {
  useCreateOurClientsMutation,
  useGetAllOurClientsQuery,
  useDeleteOurClientsMutation,
  useGetSingleOurClientsQuery,
  useUpdateOurClientsMutation,
} = ourClientsApi;
