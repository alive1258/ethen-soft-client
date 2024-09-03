import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Blogs
    createBlogs: builder.mutation({
      query: (data) => ({
        url: "/blogs/create-blog",
        method: "POST",
        data,
      }),
      invalidatesTags: ["blogs"],
    }),

    // Query for fetching all Blogs
    getAllBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),

    // Query for fetching a single Blogs by its ID
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),

    // Mutation for updating an existing Blogs
    updateBlogs: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["blogs"],
    }),

    // Mutation for deleting a Blogs by its ID
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useCreateBlogsMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogsMutation,
  useDeleteBlogMutation,
} = blogApi;
