"use client";

import ButtonOutline from "../../Button/ButtonOutline";
import Button from "../../Button/Button";
import Image from "next/image";
import { useGetAllServiceImagesQuery } from "@/redux/api/serviceImageApi";
import Loading from "@/app/loading";

const ProductDetailsHero = ({ title, description, serviceId }) => {
  const { data, isLoading } = useGetAllServiceImagesQuery({
    service: serviceId,
  });
  const serviceImages = data?.data?.data;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="contain">
        <div className="max-w-[1440px] mx-auto pt-32 px-5 md:px-20 main-text">
          <div className="flex items-center justify-between">
            {/* banner content  */}
            <div className="w-full">
              <div className="space-y-8 w-[522px]">
                <h1 className="text-primary-muted text-[32px] font-semibold">
                  {title}
                </h1>
                <p className="text-base font-normal text-white">
                  {description}
                </p>
                <div className="flex items-center gap-4">
                  <ButtonOutline content="See Demos " />
                  <Button content="Buy Now" />
                </div>
              </div>
            </div>
            <div className="w-full flex items-end justify-end relative">
              <div className="absolute -bottom-2.5 -left-3">
                {serviceImages[0] && (
                  <Image
                    className="w-[148px] h-[358px] rounded-lg"
                    src={serviceImages[1]?.image}
                    width={148}
                    height={358}
                    alt="product"
                  />
                )}
              </div>
              <div>
                <div className="">
                  {serviceImages[1] && (
                    <Image
                      src={serviceImages[0]?.image}
                      className="w-[522px] h-[396px] rounded-lg"
                      width={522}
                      height={396}
                      alt="product"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wave wave1">
          <div className="single-wave"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHero;
