import { baseApi } from "./baseApi";

const ourProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new OurProducts
    createOurProducts: builder.mutation({
      query: (data) => ({
        url: "/our-products/create-our-product",
        method: "POST",
        data,
      }),
      invalidatesTags: ["our-products"],
    }),

    // Query for fetching all OurProducts
    getAllOurProducts: builder.query({
      query: () => ({
        url: "/our-products",
        method: "GET",
      }),
      providesTags: ["our-products"],
    }),

    // Query for fetching a single OurProducts by its ID
    getSingleOurProduct: builder.query({
      query: (slug) => ({
        url: `/our-products/${slug}`,
        method: "GET",
      }),
      providesTags: ["our-products"],
    }),

    // Mutation for updating an existing OurProducts
    updateOurProducts: builder.mutation({
      query: ({ id, data }) => ({
        url: `/our-products/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["our-products"],
    }),

    // Mutation for deleting a OurProducts by its ID
    deleteOurProducts: builder.mutation({
      query: (id) => ({
        url: `/our-products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["our-products"],
    }),
  }),
});

export const {
  useCreateOurProductsMutation,
  useGetAllOurProductsQuery,
  useGetSingleOurProductQuery,
  useUpdateOurProductsMutation,
  useDeleteOurProductsMutation,
} = ourProductApi;
