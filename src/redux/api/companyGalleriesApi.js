import { baseApi } from "./baseApi";

const CompanyGalleryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new CompanyGallery
    createCompanyGallery: builder.mutation({
      query: (data) => ({
        url: "/company-galleries/create-company-gallery",
        method: "POST",
        data,
      }),
      invalidatesTags: ["company-galleries"],
    }),

    // Query for fetching all CompanyGallerys
    getAllCompanyGallery: builder.query({
      query: () => ({
        url: "/company-galleries",
        method: "GET",
      }),
      providesTags: ["company-galleries"],
    }),

    // Query for fetching a single CompanyGallery by its ID
    getSingleCompanyGallery: builder.query({
      query: (id) => ({
        url: `/company-galleries/${id}`,
        method: "GET",
      }),
      providesTags: ["company-galleries"],
    }),

    // Mutation for updating an existing CompanyGallery
    updateCompanyGallery: builder.mutation({
      query: ({ id, data }) => ({
        url: `/company-galleries/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["company-galleries"],
    }),

    // Mutation for deleting a CompanyGallery by its ID
    deleteCompanyGallery: builder.mutation({
      query: (id) => ({
        url: `/company-galleries/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["company-galleries"],
    }),
  }),
});

export const {
  useCreateCompanyGalleryMutation,
  useGetAllCompanyGalleryQuery,
  useGetSingleCompanyGalleryQuery,
  useUpdateCompanyGalleryMutation,
  useDeleteCompanyGalleryMutation,
} = CompanyGalleryApi;
