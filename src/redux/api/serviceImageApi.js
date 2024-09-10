import { baseApi } from "./baseApi";

const serviceImage = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new service image
    createServiceImage: builder.mutation({
      query: (data) => ({
        url: "/service-images",
        method: "POST",
        data,
      }),
      invalidatesTags: ["service-image"],
    }),

    // Query for fetching all service image
    getAllServiceImages: builder.query({
      query: (arg) => ({
        url: "/service-images",
        method: "GET",
        params: arg,
      }),
      providesTags: ["service-image"],
    }),

    // Query for fetching a single service image by its ID
    getSingleServiceImage: builder.query({
      query: (id) => ({
        url: `/service-images/${id}`,
        method: "GET",
      }),
      providesTags: ["service-image"],
    }),

    // Mutation for updating an existing service image
    updateServiceImage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/service-images/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["service-image"],
    }),

    // Mutation for deleting a service image by its ID
    deleteServiceImage: builder.mutation({
      query: (id) => ({
        url: `/service-images/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service-image"],
    }),
  }),
});

export const {
  useCreateServiceImageMutation,
  useGetAllServiceImagesQuery,
  useGetSingleServiceImageQuery,
  useUpdateServiceImageMutation,
  useDeleteServiceImageMutation,
} = serviceImage;
