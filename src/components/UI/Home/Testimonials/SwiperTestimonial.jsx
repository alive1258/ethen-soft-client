"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

import TestimonialCard from "./TestImonialCard";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SwiperTestimonial = ({ testimonials }) => {
  return (
    <>
      <div>
        {/* Testimonials  */}
        <div>
          <div className="flex space-x-4 mb-4 justify-between relative top-[17vh] z-[500] pr-7 md:pt-0 pt-6">
            <div className="custom-prev-button ">
              <IoIosArrowBack className="text-white bg-primary-base rounded-full md:size-12 size-8 p-2 cursor-pointer z-[500]" />
            </div>
            <div className="custom-next-button">
              <IoIosArrowForward className="text-white bg-primary-base rounded-full md:size-12 size-8 p-2 cursor-pointer z-[500]" />
            </div>
          </div>
          <div className="px-4">
            <Swiper
              // install Swiper modules
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                nextEl: ".custom-next-button",
                prevEl: ".custom-prev-button",
              }}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination, Navigation, Scrollbar, A11y]}
              className="mySwiper"
            >
              {/* testimonial 1 */}
              {testimonials?.data?.map((testimonial) => (
                <SwiperSlide key={testimonial?._id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperTestimonial;
