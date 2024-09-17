import SectionTitle from "../../SectionTitle/SectionTitle";

import AllWork from "./AllWork";
import Button from "../../Button/Button";
import Link from "next/link";

const OurWorks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-works`, {
      next: {
        revalidate: 30,
      },
    });
    const ourWorkDetails = await res.json();

    return (
      <>
        <div
          className="bg-[#FBF9FC] bg-no-repeat mt-28"
          style={{
            backgroundImage:
              "url(/assets/images/works/Group.pn), url(/assets/images/works/Ellipse.pn)",
            backgroundPosition: "left top, calc(50% + 150px) bottom",
          }}
        >
          <div
            className="container py-16 bg-no-repeat"
            style={{
              backgroundImage:
                "url(/assets/images/works/Group.png), url(/assets/images/works/Ellipse.png), url(/assets/images/works/Frame.png), url(/assets/images/works/Vector.png)",
              backgroundPosition:
                "left top, left bottom,  calc(100% - 80px) bottom, right calc(100% - 100px) top",
            }}
          >
            <SectionTitle
              subTitle="Work"
              title="Our Works"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
            />
            <div className="md:mt-28 mt-12">
              <AllWork ourWorkDetails={ourWorkDetails} />
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/our-works">
                <Button content="View More" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default OurWorks;
