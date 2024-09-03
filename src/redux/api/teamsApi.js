import { baseApi } from "./baseApi";

const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Teams
    createTeams: builder.mutation({
      query: (data) => ({
        url: "/teams/create-team",
        method: "POST",
        data,
      }),
      invalidatesTags: ["teams"],
    }),

    // Query for fetching all Teams
    getAllTeams: builder.query({
      query: () => ({
        url: "/teams",
        method: "GET",
      }),
      providesTags: ["teams"],
    }),

    // Query for fetching a single Teams by its ID
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/teams/${id}`,
        method: "GET",
      }),
      providesTags: ["teams"],
    }),

    // Mutation for updating an existing Teams
    updateTeams: builder.mutation({
      query: ({ id, data }) => ({
        url: `/teams/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["teams"],
    }),

    // Mutation for deleting a Teams by its ID
    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `/teams/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["teams"],
    }),
  }),
});

export const {
  useCreateTeamsMutation,
  useGetAllTeamsQuery,
  useGetSingleBlogQuery,
  useUpdateTeamsMutation,
  useDeleteTeamMutation,
} = teamApi;
