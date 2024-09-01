import { baseApi } from "./baseApi";

const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new banner
    createBanner: builder.mutation({
      query: (data) => ({
        url: "/banner/create-banner",
        method: "POST",
        data,
      }),
      invalidatesTags: ["banner"],
    }),

    // Query for fetching all banner
    getAllBanners: builder.query({
      query: () => ({
        url: "/banner",
        method: "GET",
      }),
      providesTags: ["banner"],
    }),

    // Query for fetching a single banner by its ID
    getSingleBanner: builder.query({
      query: (id) => ({
        url: `/banner/${id}`,
        method: "GET",
      }),
      providesTags: ["banner"],
    }),

    // Mutation for updating an existing banner
    updateBanner: builder.mutation({
      query: ({ id, data }) => ({
        url: `/banner/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["banner"],
    }),

    // Mutation for deleting a banner by its ID
    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `/banner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

export const {
  useCreateBannerMutation,
  useGetAllBannersQuery,
  useGetSingleBannerQuery,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
} = faqApi;
