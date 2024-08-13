import { MdOutlineUpdate } from "react-icons/md";
import BlogCard from "../../Home/Blog/BlogCard";

const RelatedBlogs = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <MdOutlineUpdate className="text-3xl text-primary-base" />
        <h1 className="text-black-muted text-[32px] font-medium">
          Latest Blogs
        </h1>
      </div>
      {/* blogs  */}
      <div className="mt-[28px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default RelatedBlogs;
