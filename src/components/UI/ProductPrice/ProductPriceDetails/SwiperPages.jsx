"use client";
import "./ProductPrice.css";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import PageCard from "./PageCard";
import { useGetAllServiceImagesQuery } from "@/redux/api/serviceImageApi";

const SwiperPages = ({ service }) => {
  const { data, error, isLoading } = useGetAllServiceImagesQuery({ service });
  const serviceImages = data?.data?.data;

  return (
    <>
      <div>
        <Swiper
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          slidesPerGroup={1}
          spaceBetween={20}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="swiper_container mySwipr"
        >
          {serviceImages?.map((image, index) => (
            <SwiperSlide key={index}>
              <PageCard title={image?.title} image={image?.image} />
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows  */}
          <div className="slider-controler">
            <IoIosArrowBack className="swiper-button-prev slider-arrow" />
            <IoIosArrowForward className="swiper-button-next slider-arrow" />

            {/* <div className="swiper-pagination"></div> */}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperPages;
