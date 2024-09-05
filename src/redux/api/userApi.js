import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create-user`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["user"],
    }),
    verifyOTP: build.mutation({
      query: (data) => ({
        url: `/otp/verifyOTP`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["user"],
    }),
    resendOTP: build.mutation({
      query: (data) => ({
        url: `/otp/resendOTPVerification`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["user"],
    }),
    getUsers: build.query({
      query: (arg) => ({
        url: USER_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta) => {
        return {
          users: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["user"],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateMyProfile: build.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `${USER_URL}/${id}`,
        method: "PATCH",
        data: updatedData,
      }),
      invalidatesTags: ["user"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useVerifyOTPMutation,
  useResendOTPMutation,
  useGetSingleUserQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateMyProfileMutation,
} = userApi;
