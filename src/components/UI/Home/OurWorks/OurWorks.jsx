import SectionTitle from "../../SectionTitle/SectionTitle";
import image from "../../../../../public/assets/images/works/Ellipse.png";
import AllWork from "./AllWork";

const OurWorks = () => {
  return (
    <>
      <div
        className="bg-[#FBF9FC] bg-no-repeat"
        style={{
          backgroundImage:
            "url(/assets/images/works/Group.pn), url(/assets/images/works/Ellipse.pn)",
          backgroundPosition: "left top, calc(50% + 150px) bottom",
        }}
      >
        <div
          className="container py-10 bg-no-repeat"
          style={{
            backgroundImage:
              "url(/assets/images/works/Group.png), url(/assets/images/works/Ellipse.png)",
            backgroundPosition:
              "left top, left bottom ,calc(50% + 150px) bottom",
          }}
        >
          <SectionTitle
            subTitle="Work"
            title="Our Works"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
          />
          <AllWork />
        </div>
      </div>
    </>
  );
};

export default OurWorks;
