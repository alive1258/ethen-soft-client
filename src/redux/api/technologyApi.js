import { baseApi } from "./baseApi";

const technologyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Technology
    createTechnology: builder.mutation({
      query: (data) => ({
        url: "/technologies/create-technology",
        method: "POST",
        data,
      }),
      invalidatesTags: ["technology"],
    }),

    // Query for fetching all Technologys
    getAllTechnology: builder.query({
      query: () => ({
        url: "/technologies",
        method: "GET",
      }),
      providesTags: ["technology"],
    }),

    // Query for fetching a single Technology by its ID
    getSingleTechnology: builder.query({
      query: (id) => ({
        url: `/technologies/${id}`,
        method: "GET",
      }),
      providesTags: ["technology"],
    }),

    // Mutation for updating an existing Technology
    updateTechnology: builder.mutation({
      query: ({ id, data }) => ({
        url: `/technologies/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["technology"],
    }),

    // Mutation for deleting a Technology by its ID
    deleteTechnology: builder.mutation({
      query: (id) => ({
        url: `/technologies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["technology"],
    }),
  }),
});

export const {
  useCreateTechnologyMutation,
  useGetAllTechnologyQuery,
  useGetSingleTechnologyQuery,
  useUpdateTechnologyMutation,
  useDeleteTechnologyMutation,
} = technologyApi;
