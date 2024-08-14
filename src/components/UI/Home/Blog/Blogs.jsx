import ButtonOutline from "../../Button/ButtonOutline";
import SectionTitle from "../../SectionTitle/SectionTitle";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <div
        className="max-w-[1440px] blog-container mx-auto bg-no-repeat py-10"
        style={
          {
            // backgroundImage:
            //   "url(/assets/images/blog/Ellipse1.png), url(/assets/images/blog/Ellipse0.png)",
            // backgroundPosition: "left bottom, calc(50% + 150px) bottom",
          }
        }
      >
        <div
          className="container bg-no-repeat blog-inner"
          // style={{
          //   backgroundImage: "url(/assets/images/blog/Union.png)",
          // }}
        >
          <SectionTitle
            subTitle="Our Blog"
            title="The Latest from our Blog"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <ButtonOutline content="More Blogs" className="mt-10" />
        </div>
      </div>
    </>
  );
};

export default Blogs;
