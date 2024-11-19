import { baseApi } from "./baseApi";

const URL = "/payments";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation({
      query: (data) => ({
        url: `${URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["payments"],
    }),
    getAllPayment: build.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["payments"],
    }),
    getSinglePayment: build.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["payments"],
    }),

    deleteSinglePayment: build.mutation({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["payments"],
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useGetSinglePaymentQuery,
  useGetAllPaymentQuery,
  useDeleteSinglePaymentMutation,
} = paymentApi;
