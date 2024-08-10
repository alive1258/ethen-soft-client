import Image from "next/image";
import Link from "next/link";
import { TiPlus } from "react-icons/ti";
import blogImage from "../../../../../public/assets/images/blog/blog-1.png";

const BlogCard = () => {
  return (
    <>
      <div className="hover:shadow-custom-10px">
        <Image
          className="rounded-tr-lg"
          src={blogImage}
          width={413}
          height={250}
          alt="blog"
        />
        <div className="p-5 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-black-base">20 January - 2024</span>
            <span className="w-2.5 h-2.5 bg-warning-base rounded-full"></span>
            <h6 className="font-medium text-primary-base">Technology</h6>
          </div>
          <h1 className="text-black-base text-xl font-semibold">
            What Could 5g Change About The Way We Use Technology?
          </h1>
          <p className="text-black-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore veniam dolore.
          </p>
          <button className="font-semibold text-black-muted hover:text-primary-base hover:border-b hover:border-b-primary-base duration-200">
            <Link className="flex items-center gap-1" href="/">
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
