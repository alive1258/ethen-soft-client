import { baseApi } from "./baseApi";

const professionalServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new ProfessionalServices
    createProfessionalServices: builder.mutation({
      query: (data) => ({
        url: "/professional-services/create-professional-service",
        method: "POST",
        data,
      }),
      invalidatesTags: ["professional-services"],
    }),

    // Query for fetching all ProfessionalServices
    getAllProfessionalServices: builder.query({
      query: () => ({
        url: "/professional-services",
        method: "GET",
      }),
      providesTags: ["professional-services"],
    }),

    // Query for fetching a single ProfessionalServices by its ID
    getSingleProfessionalService: builder.query({
      query: (id) => ({
        url: `/professional-services/${id}`,
        method: "GET",
      }),
      providesTags: ["professional-services"],
    }),

    // Mutation for updating an existing ProfessionalServices
    updateProfessionalServices: builder.mutation({
      query: ({ id, data }) => ({
        url: `/professional-services/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["professional-services"],
    }),

    // Mutation for deleting a ProfessionalServices by its ID
    deleteProfessionalService: builder.mutation({
      query: (id) => ({
        url: `/professional-services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["professional-services"],
    }),
  }),
});

export const {
  useCreateProfessionalServicesMutation,
  useGetAllProfessionalServicesQuery,
  useGetSingleProfessionalServiceQuery,
  useUpdateProfessionalServicesMutation,
  useDeleteProfessionalServiceMutation,
} = professionalServiceApi;
