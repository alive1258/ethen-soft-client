import { baseApi } from "./baseApi";

const technologyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new Testimonials
    createTestimonials: builder.mutation({
      query: (data) => ({
        url: "/testimonials/create-testimonial",
        method: "POST",
        data,
      }),
      invalidatesTags: ["testimonials"],
    }),

    // Query for fetching all Testimonials
    getAllTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
      providesTags: ["testimonials"],
    }),

    // Query for fetching a single Testimonials by its ID
    getSingleTestimonials: builder.query({
      query: (id) => ({
        url: `/testimonials/${id}`,
        method: "GET",
      }),
      providesTags: ["testimonials"],
    }),

    // Mutation for updating an existing Testimonials
    updateTestimonials: builder.mutation({
      query: ({ id, data }) => ({
        url: `/testimonials/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["testimonials"],
    }),

    // Mutation for deleting a Testimonials by its ID
    deleteTestimonials: builder.mutation({
      query: (id) => ({
        url: `/testimonials/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["testimonials"],
    }),
  }),
});

export const {
  useCreateTestimonialsMutation,
  useGetAllTestimonialsQuery,
  useGetSingleTestimonialsQuery,
  useUpdateTestimonialsMutation,
  useDeleteTestimonialsMutation,
} = technologyApi;
