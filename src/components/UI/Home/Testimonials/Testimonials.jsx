import SectionTitle from "../../SectionTitle/SectionTitle";
import SwiperTestimonial from "./SwiperTestimonial";

const Testimonials = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`, {
      next: {
        revalidate: 30,
      },
    });
    const testimonials = await res.json();
    return (
      <>
        <div className="bg-[#F4EDF7] bg-opacity-35">
          <div
            className="max-w-[1440px] h-[700px] mx-auto pt-10 bg-no-repeat bg-right-bottom"
            styl={{
              backgroundImage:
                "url(/assets/images/testimonials/Ellipse5.png), url(/assets/images/testimonials/Ellipse4.png), url(/assets/images/testimonials/Ellipse3.png), url(/assets/images/testimonials/Ellipse6.png)",
              backgroundPosition:
                "left 0px top 100px, left 0px top 150px, left 0px top 2000px, right bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container bg-no-repeat">
              <SectionTitle
                subTitle="TESTIMONIALS"
                title="What clients say"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
              />
              <div className="mt-10">
                <SwiperTestimonial testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default Testimonials;
