import SectionTitle from "../../SectionTitle/SectionTitle";
import image from "../../../../../public/assets/images/works/Frame.png";
import AllWork from "./AllWork";
import Button from "../../Button/Button";

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
          <AllWork />
          <div className="flex justify-center mt-12">
            <Button content="View More" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
