import { baseApi } from "./baseApi";

const aboutHeroApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new AboutHero
    createAboutHero: builder.mutation({
      query: (data) => ({
        url: "/about-heros/create-about-hero",
        method: "POST",
        data,
      }),
      invalidatesTags: ["about-heros"],
    }),

    // Query for fetching all AboutHeros
    getAllAboutHero: builder.query({
      query: () => ({
        url: "/about-heros",
        method: "GET",
      }),
      providesTags: ["about-heros"],
    }),

    // Query for fetching a single AboutHero by its ID
    getSingleAboutHero: builder.query({
      query: (id) => ({
        url: `/about-heros/${id}`,
        method: "GET",
      }),
      providesTags: ["about-heros"],
    }),

    // Mutation for updating an existing AboutHero
    updateAboutHero: builder.mutation({
      query: ({ id, data }) => ({
        url: `/about-heros/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["about-heros"],
    }),

    // Mutation for deleting a AboutHero by its ID
    deleteAboutHero: builder.mutation({
      query: (id) => ({
        url: `/about-heros/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["about-heros"],
    }),
  }),
});

export const {
  useCreateAboutHeroMutation,
  useGetAllAboutHeroQuery,
  useGetSingleAboutHeroQuery,
  useUpdateAboutHeroMutation,
  useDeleteAboutHeroMutation,
} = aboutHeroApi;
