import { baseApi } from "./baseApi";

const serviceCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new service category
    createServiceCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        data,
      }),
      invalidatesTags: ["service-categories"],
    }),

    // Query for fetching all service categories
    getAllServiceCategories: builder.query({
      query: (arg) => ({
        url: "/categories",
        method: "GET",
        params: arg,
      }),
      providesTags: ["service-categories"],
    }),

    // Query for fetching a single service category by its ID
    getSingleServiceCategory: builder.query({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
      providesTags: ["service-categories"],
    }),

    // Mutation for updating an existing service category
    updateServiceCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["service-categories"],
    }),

    // Mutation for deleting a service category by its ID
    deleteServiceCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service-categories"],
    }),
  }),
});

export const {
  useCreateServiceCategoryMutation,
  useGetAllServiceCategoriesQuery,
  useGetSingleServiceCategoryQuery,
  useUpdateServiceCategoryMutation,
  useDeleteServiceCategoryMutation,
} = serviceCategoryApi;
