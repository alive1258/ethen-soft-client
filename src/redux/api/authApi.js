import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for login
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["auth"],
    }),
    // Mutation for logout
    logout: builder.mutation({
      query: () => ({
        url: "/auth/log-out",
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        data,
      }),
      invalidatesTags: ["auth"],
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApi;
