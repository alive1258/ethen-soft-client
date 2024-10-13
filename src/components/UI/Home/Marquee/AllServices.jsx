import Marquee from "react-fast-marquee";

const AllServices = ({ ourServices }) => {
  return (
    <div className=" relative mb-32">
      <div
        className="bg-[#C9F31D] absolute w-full top-0 left-0 md:rotate-3 h-[59px] flex items-center gap-8 z-20"
        styl={{
          clipPath:
            "polygon(0 21%, 100% 48%, 100% 20%, 100% 80%, 100% 81%, 100% 81%, 0 57%, 0% 20%)",
        }}
      >
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {ourServices?.data?.map((item, index) => (
            <div key={index} className="flex items-center gap-6 mr-8">
              <span
                className={`size-4 rounded-full`}
                style={{
                  backgroundColor: `${item?.color_code}`,
                }}
              ></span>
              <h6 className="text-lg text-black-base font-medium">
                {item?.title}
              </h6>
            </div>
          ))}
        </Marquee>
      </div>
      <div
        className="bg-[#DC4C64] absolute hidden w-full top-0 left-0 -rotate-3 h-[59px] md:flex items-center gap-8"
        styl={{
          clipPath:
            "polygon(0 21%, 100% 48%, 100% 20%, 100% 80%, 100% 81%, 100% 81%, 0 57%, 0% 20%)",
        }}
      >
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {ourServices?.data?.map((item, index) => (
            <div key={index} className="flex items-center gap-6 mr-8">
              <span
                className={`size-4 rounded-full`}
                style={{
                  backgroundColor: `${item?.color_code}`,
                }}
              ></span>
              <h6 className="text-lg text-[#fff] font-medium">{item?.title}</h6>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AllServices;
