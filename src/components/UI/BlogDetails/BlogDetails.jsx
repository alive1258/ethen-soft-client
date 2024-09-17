import Image from "next/image";
import blogImage from "../../../../public/assets/images/image 17.png";
import RelatedBlogs from "./RelatedBlogs/RelatedBlogs";

// Assuming this is a Next.js Page component
const BlogDetails = ({ blog }) => {
  return (
    <div className="container mb-12">
      {/* Blog Image Section */}
      <div className="">
        <Image
          className="h-[400px] w-full"
          src={blog?.image}
          width={1280}
          height={600}
          alt="blog details"
        />
      </div>

      {/* Blog Content */}
      <div className="mt-20">
        <div>{blog?.title}</div>
        <div dangerouslySetInnerHTML={{ __html: blog?.description }}></div>
      </div>

      {/* Related Blogs Section */}
      <RelatedBlogs />
    </div>
  );
};

export default BlogDetails;
