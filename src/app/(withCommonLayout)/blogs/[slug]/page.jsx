import BlogDetails from "@/components/UI/BlogDetails/BlogDetails";

const BlogDetailsPage = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/${params?.slug}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const blogs = await res.json();

    return (
      <>
        <BlogDetails blog={blogs?.data} />
      </>
    );
  } catch {
    return null;
  }
};

export default BlogDetailsPage;
