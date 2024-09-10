"use client";
import Image from "next/image";
import WorkHoverEffect from "./WorkHoverEffect";
import { useEffect } from "react";
import { applyScrollAnimation } from "@/utils/applyScrollAnimation ";

const AllWork = ({ ourWorkDetails }) => {
  useEffect(() => {
    // Use the utility function and pass the section and reveal classes
    const cleanup = applyScrollAnimation("section", ".reveal");

    // Clean up event listeners when the component is unmounted
    return cleanup;
  }, []);
  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          {ourWorkDetails?.data?.slice(0, 1).map((ourWorkDetail, index) => (
            <section
              key={index}
              className="relative reveal group col-span-2 row-span-2"
            >
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}

          {ourWorkDetails?.data?.slice(1, 2).map((ourWorkDetail, index) => (
            <section key={index} className="relative reveal group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}
          {ourWorkDetails?.data?.slice(2, 3).map((ourWorkDetail, index) => (
            <section key={index} className="relative reveal group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          {ourWorkDetails?.data?.slice(3, 4).map((ourWorkDetail, index) => (
            <section key={index} className="relative reveal group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}
          {ourWorkDetails?.data?.slice(4, 5).map((ourWorkDetail, index) => (
            <section key={index} className="relative reveal group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}
          {ourWorkDetails?.data?.slice(5, 6).map((ourWorkDetail, index) => (
            <section
              key={index}
              className="relative reveal group col-span-2 row-span-2"
            >
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          {ourWorkDetails?.data?.slice(6, 7).map((ourWorkDetail, index) => (
            <section
              key={index}
              className="relative reveal group col-span-2 row-span-2"
            >
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}

          {ourWorkDetails?.data?.slice(7, 8).map((ourWorkDetail, index) => (
            <section key={index} className="relative reveal group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}
          {ourWorkDetails?.data?.slice(8, 9).map((ourWorkDetail, index) => (
            <section key={index} className="relative reveal group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          {ourWorkDetails?.data?.slice(9, 10).map((ourWorkDetail, index) => (
            <section key={index} className="relative reveal group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}

          {ourWorkDetails?.data?.slice(10, 11).map((ourWorkDetail, index) => (
            <section key={index} className="relative reveal group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}
          {ourWorkDetails?.data?.slice(11, 12).map((ourWorkDetail, index) => (
            <section
              key={index}
              className="relative reveal group col-span-2 row-span-2"
            >
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={ourWorkDetail?.image}
                height={200}
                width={200}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllWork;
