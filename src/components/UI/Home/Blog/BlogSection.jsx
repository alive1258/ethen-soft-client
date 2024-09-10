"use client";
import { applyScrollAnimation } from "@/utils/applyScrollAnimation ";
import React, { useEffect } from "react";
import BlogCard from "./BlogCard";

const BlogSection = ({ blogs }) => {
  useEffect(() => {
    // Use the utility function and pass the section and reveal classes
    const cleanup = applyScrollAnimation("section", ".reveal");

    // Clean up event listeners when the component is unmounted
    return cleanup;
  }, []);
  return (
    <>
      <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mt-28 mt-12">
        {blogs?.data?.slice(0, 3).map((blog) => (
          <BlogCard key={blog?._id} blog={blog} />
        ))}
      </section>
    </>
  );
};

export default BlogSection;
