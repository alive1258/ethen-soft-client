import { IoSettingsOutline } from "react-icons/io5";
import ButtonOutline from "../../Button/ButtonOutline";
import Button from "../../Button/Button";
import Image from "next/image";
import product1 from "../../../../../public/assets/images/price/image 22.png";
import product2 from "../../../../../public/assets/images/price/image 23.png";
import SwiperPages from "./SwiperPages";
import Testimonials from "../../Home/Testimonials/Testimonials";
import PriceAndPlan from "./PriceAndPlan";

const ProductPriceDetails = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(/assets/images/price/pdb.png)`,
        }}
      >
        <div className="max-w-[1440px] mx-auto py-24 px-5 md:px-20">
          <div className="flex items-center justify-between">
            {/* banner content  */}
            <div className="w-full">
              <div className="space-y-8 w-[522px]">
                <h1 className="text-primary-muted text-[32px] font-semibold">
                  Creative Multi-Prepose Next.js Project{" "}
                </h1>
                <p className="text-base font-normal text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum,{" "}
                </p>
                <div className="flex items-center gap-4">
                  <ButtonOutline content="See Demos " />
                  <Button content="Buy Now" />
                </div>
              </div>
            </div>
            <div className="w-full flex items-end justify-end relative">
              <div className="absolute -bottom-2.5 -left-3">
                <Image src={product2} width={148} height={358} alt="product" />
              </div>
              <div>
                <div className="">
                  <Image
                    src={product1}
                    width={522}
                    height={396}
                    alt="product"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-[1440px] mx-auto py-24 px-5 md:px-20 bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/images/price/Vector9.png)`,
          backgroundPosition: " right top 200px",
        }}
      >
        {/* Product Services */}
        <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
          {/* single card  */}
          <div className="p-4 rounded-lg border border-primary-base flex flex-col items-center text-center gap-4 bg-white hover:bg-primary-base group duration-200 transition-all z-20">
            <IoSettingsOutline className="size-[38px] text-primary-base group-hover:text-white duration-200" />
            <h6 className="font-semibold text-[#0D0F12] group-hover:text-white duration-200">
              UI/UX Design
            </h6>
            <p className="text-sm text-[#0D0F12s] font-normal group-hover:text-white duration-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration{" "}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-primary-base flex flex-col items-center text-center gap-4 bg-white hover:bg-primary-base group duration-200 transition-all z-20">
            <IoSettingsOutline className="size-[38px] text-primary-base group-hover:text-white duration-200" />
            <h6 className="font-semibold text-[#0D0F12] group-hover:text-white duration-200">
              UI/UX Design
            </h6>
            <p className="text-sm text-[#0D0F12s] font-normal group-hover:text-white duration-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration{" "}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-primary-base flex flex-col items-center text-center gap-4 bg-white hover:bg-primary-base group duration-200 transition-all z-20">
            <IoSettingsOutline className="size-[38px] text-primary-base group-hover:text-white duration-200" />
            <h6 className="font-semibold text-[#0D0F12] group-hover:text-white duration-200">
              UI/UX Design
            </h6>
            <p className="text-sm text-[#0D0F12s] font-normal group-hover:text-white duration-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration{" "}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-primary-base flex flex-col items-center text-center gap-4 bg-white hover:bg-primary-base group duration-200 transition-all z-20">
            <IoSettingsOutline className="size-[38px] text-primary-base group-hover:text-white duration-200" />
            <h6 className="font-semibold text-[#0D0F12] group-hover:text-white duration-200">
              UI/UX Design
            </h6>
            <p className="text-sm text-[#0D0F12s] font-normal group-hover:text-white duration-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration{" "}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-primary-base flex flex-col items-center text-center gap-4 bg-white hover:bg-primary-base group duration-200 transition-all z-20">
            <IoSettingsOutline className="size-[38px] text-primary-base group-hover:text-white duration-200" />
            <h6 className="font-semibold text-[#0D0F12] group-hover:text-white duration-200">
              UI/UX Design
            </h6>
            <p className="text-sm text-[#0D0F12s] font-normal group-hover:text-white duration-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration{" "}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-primary-base flex flex-col items-center text-center gap-4 bg-white hover:bg-primary-base group duration-200 transition-all z-20">
            <IoSettingsOutline className="size-[38px] text-primary-base group-hover:text-white duration-200" />
            <h6 className="font-semibold text-[#0D0F12] group-hover:text-white duration-200">
              UI/UX Design
            </h6>
            <p className="text-sm text-[#0D0F12s] font-normal group-hover:text-white duration-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration{" "}
            </p>
          </div>
        </div>

        {/* Our All Pages  */}
        <div
          className="py-10 bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/images/price/Vector8.png)`,
            backgroundPosition: "left",
          }}
        >
          <div className="text-center mb-6">
            <h1 className="text-black-solid font-semibold">Our All Pages</h1>
            <p className="text-sm text-[#0D0F12] pt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration{" "}
            </p>
          </div>
          <SwiperPages />
        </div>
      </div>
      <PriceAndPlan />
      {/* <Testimonials /> */}
    </>
  );
};

export default ProductPriceDetails;
