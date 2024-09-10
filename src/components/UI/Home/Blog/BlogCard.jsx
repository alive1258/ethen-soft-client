import Image from "next/image";
import Link from "next/link";
import { TiPlus } from "react-icons/ti";

const BlogCard = ({ blog }) => {
  // Format the date
  const formattedDate = new Date(blog?.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <>
      <div className="reveal shadow-custom-10px bg-[#fff] rounded-lg hover:scale-105 delay-150 duration-300 transition-all">
        <Image
          className="rounded-t-lg"
          src={blog?.image}
          width={413}
          height={250}
          alt="blog"
        />
        <div className="p-5 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-black-base">{formattedDate}</span>
            <span className="w-2.5 h-2.5 bg-warning-base rounded-full"></span>
            <h6 className="font-medium text-primary-base">{blog?.subject}</h6>
          </div>
          <h1 className="text-black-base text-xl font-semibold">
            {blog?.title}
          </h1>
          <p className="text-black-base">{blog?.sub_description}</p>
          <button className="font-semibold text-[#4b4f56] hover:text-primary-base hover:border-b hover:border-b-primary-base duration-200">
            <Link
              className="flex items-center gap-1"
              href={`/blogs/${blog?.slug}`}
            >
              {" "}
              <TiPlus />
              <span>Read More </span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
