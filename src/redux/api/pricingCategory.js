import { baseApi } from "./baseApi";

const pricingCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Pricing Category
    createPricingCategory: builder.mutation({
      query: (data) => ({
        url: "/pricing-categories",
        method: "POST",
        data,
      }),
      invalidatesTags: ["pricing-category"],
    }),

    // Query for fetching all Pricing Category
    getAllPricingCategories: builder.query({
      query: () => ({
        url: "/pricing-categories",
        method: "GET",
      }),
      providesTags: ["pricing-category"],
    }),

    // Query for fetching a single Pricing Category by its ID
    getSinglePricingCategory: builder.query({
      query: (id) => ({
        url: `/pricing-categories/${id}`,
        method: "GET",
      }),
      providesTags: ["pricing-category"],
    }),

    // Mutation for updating an existing Pricing Category
    updatePricingCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/pricing-categories/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["pricing-category"],
    }),

    // Mutation for deleting a Pricing Category by its ID
    deletePricingCategory: builder.mutation({
      query: (id) => ({
        url: `/pricing-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pricing-category"],
    }),
  }),
});

export const {
  useCreatePricingCategoryMutation,
  useGetAllPricingCategoriesQuery,
  useGetSinglePricingCategoryQuery,
  useUpdatePricingCategoryMutation,
  useDeletePricingCategoryMutation,
} = pricingCategoryApi;
