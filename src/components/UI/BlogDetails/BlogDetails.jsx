import Image from "next/image";
import blogImage from "../../../../public/assets/images/image 17.png";
import RelatedBlogs from "./RelatedBlogs/RelatedBlogs";

const BlogDetails = () => {
  return (
    <>
      <div className="container pt-4 mb-12">
        <div className="relative mb-4">
          <Image
            className=""
            src={blogImage}
            width={1280}
            height={600}
            alt="blog details"
          />
          <h1 className="absolute bottom-8 left-28 text-[48px] font-semibold text-center text-white">
            The Difference Between UX and UI Design: A <br /> Beginner’s Guide
          </h1>
        </div>
        <RelatedBlogs />
      </div>
    </>
  );
};

export default BlogDetails;
