import ButtonOutline from "../../Button/ButtonOutline";
import SectionTitle from "../../SectionTitle/SectionTitle";
import BlogSection from "./BlogSection";

// Generate static paths for SSG
export async function generateStaticParams() {
  const serviceData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
  const data = await serviceData?.json();
  const blogs = data?.data || [];

  // Generate paths for each service slug
  return blogs?.map((blog) => ({
    id: blog?.slug,
  }));
}

const Blogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      next: {
        revalidate: 30,
      },
    });
    const blogs = await res.json();

    return (
      <>
        <div className="max-w-[1440px] blog-container mx-auto bg-no-repeat md:mt-28 mt-12 py-10">
          <div className="container bg-no-repeat blog-inner ">
            <SectionTitle
              subTitle="Our Blog"
              title="The Latest from our Blog"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore."
            />

            <BlogSection blogs={blogs} />
            <div className="mt-16">
              <ButtonOutline content="More Blogs" />
            </div>
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default Blogs;
