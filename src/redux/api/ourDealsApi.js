import { baseApi } from "./baseApi";

const ourDealsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new OurDeals
    createOurDeals: builder.mutation({
      query: (data) => ({
        url: "/our-deals/create-our-deal",
        method: "POST",
        data,
      }),
      invalidatesTags: ["our-deals"],
    }),

    // Query for fetching all OurDeals
    getAllOurDeals: builder.query({
      query: () => ({
        url: "/our-deals",
        method: "GET",
      }),
      providesTags: ["our-deals"],
    }),

    // Query for fetching a single OurDeals by its ID
    getSingleOurDeals: builder.query({
      query: (id) => ({
        url: `/our-deals/${id}`,
        method: "GET",
      }),
      providesTags: ["our-deals"],
    }),

    // Mutation for updating an existing OurDeals
    updateOurDeals: builder.mutation({
      query: ({ id, data }) => ({
        url: `/our-deals/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["our-deals"],
    }),

    // Mutation for deleting a OurDeals by its ID
    deleteOurDeals: builder.mutation({
      query: (id) => ({
        url: `/our-deals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["our-deals"],
    }),
  }),
});

export const {
  useCreateOurDealsMutation,
  useGetAllOurDealsQuery,
  useGetSingleOurDealsQuery,
  useUpdateOurDealsMutation,
  useDeleteOurDealsMutation,
} = ourDealsApi;
