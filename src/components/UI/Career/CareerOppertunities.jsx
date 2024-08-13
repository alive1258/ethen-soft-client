import ButtonOutline from "../Button/ButtonOutline";
import JobCard from "./JobCard";

const CareerOppertunities = () => {
  return (
    <>
      <div className="bg-[#F4EDF7] ">
        <div
          className="container py-10 bg bg-no-repeat"
          style={{
            backgroundImage:
              "url(/assets/images/blog/Union.png), url(/assets/images/blog/Ellipse1.png)",
            backgroundPosition: "right top, left",
          }}
        >
          <div>
            <h1 className="text-primary-mute text-primary-base text-[40px] font-semibold text-center">
              Career Oppertunities
            </h1>
            <p className="w-4/5 mx-auto text-center mt-6 text-black-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          {/* all jobs  */}
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <ButtonOutline content="View More" url="/" />
        </div>
      </div>
    </>
  );
};

export default CareerOppertunities;
