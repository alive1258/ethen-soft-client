import OurWorkPage from "@/components/UI/OurWorkPage/OurWorkPage";
import Image from "next/image";
import workBanner from "../../../../public/assets/images/about/works.png";

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
          <div>
            <Image
              className="w-full md:h-[350px] h-[150px]"
              src={workBanner}
              height={350}
              width={900}
              alt="workBanner"
            />
          </div>
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
