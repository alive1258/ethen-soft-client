const MarqueeServices = () => {
  //   const res = fetch("/assets/db/marquee.json", {
  //     cache: "no-store",
  //   });
  //   const services = res.json();
  //   console.log(services);
  return (
    <div className="relative max-w-[1440px] mx-auto">
      <div
        className="bg-[#C9F31D] absolute w-full top-0 left-0 rotate-3 h-[59px] flex items-center gap-8 z-20"
        styl={{
          clipPath:
            "polygon(0 21%, 100% 48%, 100% 20%, 100% 80%, 100% 81%, 100% 81%, 0 57%, 0% 20%)",
        }}
      >
        <marquee className="">
          <div className="flex items-center gap-6">
            <span className="bg-[#C8455B] size-4 rounded-full"></span>
            <h6 className="text-lg text-black-base font-medium">
              UI/UX Design
            </h6>
          </div>
        </marquee>
      </div>
      <div
        className="bg-[#DC4C64] absolute w-full top-0 left-0 -rotate-3 h-[59px] flex items-center gap-8"
        styl={{
          clipPath:
            "polygon(0 21%, 100% 48%, 100% 20%, 100% 80%, 100% 81%, 100% 81%, 0 57%, 0% 20%)",
        }}
      >
        <marquee direction="right" className="">
          <div className="flex items-center gap-6">
            <span className="bg-[#C8455B] size-4 rounded-full"></span>
            <h6 className="text-lg text-black-base font-medium">
              UI/UX Design
            </h6>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default MarqueeServices;
