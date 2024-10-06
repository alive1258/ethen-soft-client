"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import Script from "next/script";

const OurTechnology = ({ ourTechnologies }) => {
  const zoomInOut = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  useEffect(() => {
    function stars() {
      let count = 500;
      let scene = document.querySelector(".scene");
      let i = 0;
      while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 2;
        let size = Math.random() * 2;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${1 + size}px`;
        star.style.height = `${1 + size}px`;

        star.style.animationDuration = `${2 + duration}s`;
        star.style.animationDelay = `${duration}s`;

        scene.appendChild(star);
        i++;
      }
    }
    stars();
  }, []);
  return (
    <>
      <div className="relative md:size-[510px] size-[270px]  border border-white border-dashed rounded-full flex justify-center items-center">
        <motion.div
          className="absolute md:-top-10 -top-5"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-20 size-10  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[0]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:top-8 top-4 md:right-8 right-5"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-20 size-10  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[1]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:top-48 md:-right-8 -right-5"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-20 size-10  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[2]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:bottom-14 bottom-2 right-4"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-20 size-10  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[3]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:-bottom-7 -bottom-3 md:right-[193px] right-[120px]"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-20 size-10  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[4]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:bottom-7 bottom-6 md:left-8 left-3"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-20 size-10  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[5]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:top-48 md:-left-8 -left-4"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-20 size-10  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[6]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:top-8 top-4 md:left-8 left-4"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-20 size-10  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[7]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        {/* middle  tech  */}
        <motion.div
          className="absolute md:top-32 top-24 md:right-32 right-11"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-16 size-8  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[8]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:top-24 top-20 md:right-72 right-44"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-16 size-8  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[9]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:bottom-44 bottom-[185px] right-24 md:right-24"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-16 size-8  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[10]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute md:left-20 left-[60px] top-40 md:top-60"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-16 size-8  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[11]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute  md:right-60 right-20 bottom-11 md:bottom-[88px]"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <div className="bg-[#fff] p-2 md:size-16 size-8  flex justify-center items-center  rounded-full">
            <Image
              height={48}
              width={48}
              src={ourTechnologies?.data?.[12]?.image}
              className=" "
              alt="technology"
            />
          </div>
        </motion.div>
        <div className="md:size-[280px] size-[150px] border border-white border-dashed rounded-full flex justify-center items-center">
          <div
            className="relative md:size-[125px] size-[80px] bg-gradient-to-r from-[#8E4FAE] to-[#79308A] rounded-full"
            variants={zoomInOut}
            initial="initial"
            animate="animate"
          >
            <p className="absolute md:top-11 top-7 md:left-4 left-2 text-center font-medium md:text-[15px] text-[10px] text-white">
              Technologies <br /> We Use
            </p>
          </div>
        </div>
      </div>
      <Script type="text/javascript" />
    </>
  );
};

export default OurTechnology;
