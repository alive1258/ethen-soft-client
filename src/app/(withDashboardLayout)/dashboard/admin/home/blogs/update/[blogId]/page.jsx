import UpdateBlogs from "@/components/Dashboard/Blogs/UpdateBlogs";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <UpdateBlogs id={params?.blogId} />
    </>
  );
};

export default page;
