import { baseApi } from "./baseApi";

const heroDescriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new HeroDescription
    createHeroDescription: builder.mutation({
      query: (data) => ({
        url: "/heros/create-hero",
        method: "POST",
        data,
      }),
      invalidatesTags: ["hero-description"],
    }),

    // Query for fetching all HeroDescriptions
    getAllHeroDescription: builder.query({
      query: () => ({
        url: "/heros",
        method: "GET",
      }),
      providesTags: ["hero-description"],
    }),

    // Query for fetching a single HeroDescription by its ID
    getSingleHeroDescription: builder.query({
      query: (id) => ({
        url: `/heros/${id}`,
        method: "GET",
      }),
      providesTags: ["hero-description"],
    }),

    // Mutation for updating an existing HeroDescription
    updateHeroDescription: builder.mutation({
      query: ({ id, data }) => ({
        url: `/heros/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["hero-description"],
    }),

    // Mutation for deleting a HeroDescription by its ID
    deleteHeroDescription: builder.mutation({
      query: (id) => ({
        url: `/heros/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["hero-description"],
    }),
  }),
});

export const {
  useCreateHeroDescriptionMutation,
  useGetAllHeroDescriptionQuery,
  useGetSingleHeroDescriptionQuery,
  useUpdateHeroDescriptionMutation,
  useDeleteHeroDescriptionMutation,
} = heroDescriptionApi;
