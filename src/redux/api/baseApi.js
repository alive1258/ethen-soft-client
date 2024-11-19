import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1",
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  }),

  endpoints: () => ({}),

  tagTypes: [
    "banner",
    "hero-description",
    "technology",
    "services",
    "service-categories",
    "service-images",
    "service-faq",
    "pricing-category",
    "pricing",
    "pricing-feature",
    "feature-assigned-pricing",
    "home-about",
    "trust-us",
    "our-works",
    "our-products",
    "our-clients",
    "testimonials",
    "blogs",
    "faqs",
    "about-heros",
    "company-galleries",
    "our-deals",
    "professional-services",
    "privacy-policies",
    "refund-policies",
    "terms-conditions",
    "teams",
    "auth",
    "user",
    "customer",
    "contact-us",
    "payments",
  ],
});
