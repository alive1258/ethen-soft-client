import { baseApi } from "./baseApi";

const homeAboutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new HomeAbout
    createHomeAbout: builder.mutation({
      query: (data) => ({
        url: "/home-about/create-home-about",
        method: "POST",
        data,
      }),
      invalidatesTags: ["home-about"],
    }),

    // Query for fetching all HomeAbouts
    getAllHomeAbout: builder.query({
      query: () => ({
        url: "/home-about",
        method: "GET",
      }),
      providesTags: ["home-about"],
    }),

    // Query for fetching a single HomeAbout by its ID
    getSingleHomeAbout: builder.query({
      query: (id) => ({
        url: `/home-about/${id}`,
        method: "GET",
      }),
      providesTags: ["home-about"],
    }),

    // Mutation for updating an existing HomeAbout
    updateHomeAbout: builder.mutation({
      query: ({ id, data }) => ({
        url: `/home-about/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["home-about"],
    }),

    // Mutation for deleting a HomeAbout by its ID
    deleteHomeAbout: builder.mutation({
      query: (id) => ({
        url: `/home-about/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["home-about"],
    }),
  }),
});

export const {
  useCreateHomeAboutMutation,
  useGetAllHomeAboutQuery,
  useGetSingleHomeAboutQuery,
  useUpdateHomeAboutMutation,
  useDeleteHomeAboutMutation,
} = homeAboutApi;
