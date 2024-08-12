import Image from "next/image";
import support from "../../../../../public/assets/images/support.png";
import Union from "../../../../../public/assets/images/Union.png";

const ItServices = () => {
  return (
    <>
      <div className="bg-[#F4EDF7]/50 py-14">
        <div className="container flex items-center gap-5">
          <div className="w-full">
            <h1 className="text-black-base text-[40px] font-semibold pb-6">
              We Deal With The Aspects Of Professional IT Services
            </h1>
            <p className="text-black-base text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat aute irure dolor in reprehenderit velit.
            </p>
            <div className="grid grid-cols-2 gap-x-14 gap-y-10 mt-10">
              <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
                <Image src={support} width={40} height={40} alt="icon" />
                <h6 className="text-xl font-medium">Support 24h/24</h6>
              </div>
              <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
                <Image src={support} width={40} height={40} alt="icon" />
                <h6 className="text-xl font-medium">Support 24h/24</h6>
              </div>
              <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
                <Image src={support} width={40} height={40} alt="icon" />
                <h6 className="text-xl font-medium">Support 24h/24</h6>
              </div>
              <div className="bg-[#F4EDF7] rounded-lg p-4 flex items-center gap-4 text-primary-base">
                <Image src={support} width={40} height={40} alt="icon" />
                <h6 className="text-xl font-medium">Support 24h/24</h6>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              className="rounded-lg"
              src={Union}
              width={629}
              height={476}
              alt="union"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItServices;
