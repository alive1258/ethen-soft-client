import OurWorkPage from "@/components/UI/OurWorkPage/OurWorkPage";

const page = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-works`, {
      next: {
        revalidate: 30,
      },
    });
    const ourWorks = await res.json();

    return (
      <>
        <section>
          {/* work banner  */}
          <div className="bg-purple-400 md:h-[350px] h-[200px]"></div>
          <div className="container mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            {ourWorks?.data?.map((ourWork) => (
              <OurWorkPage key={ourWork?._id} ourWork={ourWork} />
            ))}
          </div>
        </section>
      </>
    );
  } catch {
    return null;
  }
};

export default page;
