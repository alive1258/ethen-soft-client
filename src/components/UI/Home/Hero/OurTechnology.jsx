"use client";
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../.././../public/assets/images/hero/Frame 598 (2).png";
import image2 from "../../../.././../public/assets/images/hero/Frame 598.png";
import image3 from "../../../.././../public/assets/images/hero/Frame 599.png";
import image4 from "../../../.././../public/assets/images/hero/Frame 600.png";
import image5 from "../../../.././../public/assets/images/hero/Frame 601.png";
import image6 from "../../../.././../public/assets/images/hero/Frame 602.png";
import image7 from "../../../.././../public/assets/images/hero/Frame 603.png";
import image8 from "../../../.././../public/assets/images/hero/Frame 598 (1).png";
import Image from "next/image";
import { useEffect } from "react";

import Script from "next/script";
const OurTechnology = () => {
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
      <div className="relative size-[498px] border border-white border-dashed rounded-full flex justify-center items-center">
        <motion.div
          className="absolute -top-10"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image2} width={72} height={72} alt="technology" />
        </motion.div>
        <motion.div
          className="absolute top-8 right-8"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image8} width={72} height={72} alt="technology" />
        </motion.div>
        <motion.div
          className="absolute top-48 -right-8"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image3} width={72} height={72} alt="technology" />
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-8"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image6} width={72} height={72} alt="technology" />
        </motion.div>
        <motion.div
          className="absolute -bottom-7 right-[193px]"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image5} width={72} height={72} alt="technology" />
        </motion.div>
        <motion.div
          className="absolute bottom-7 left-8"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image7} width={72} height={72} alt="technology" />
        </motion.div>
        <motion.div
          className="absolute top-48 -left-8"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image4} width={72} height={72} alt="technology" />
        </motion.div>
        <motion.div
          className="absolute top-8 left-8"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image1} width={72} height={72} alt="technology" />
        </motion.div>
        {/* middle  tech  */}
        <motion.div
          className="absolute top-28 right-28"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image4} width={60} height={60} alt="technology" />
        </motion.div>
        <motion.div
          className="absolute top-36 left-20"
          variants={zoomInOut}
          initial="initial"
          animate="animate"
        >
          <Image src={image4} width={60} height={60} alt="technology" />
        </motion.div>
        <div className="size-[280px] border border-white border-dashed rounded-full flex justify-center items-center">
          <motion.div
            className="relative size-[138px] bg-gradient-to-r from-[#8E4FAE] to-[#79308A] rounded-full"
            variants={zoomInOut}
            initial="initial"
            animate="animate"
          >
            <p className="absolute top-12 left-4 text-center font-medium text-white">
              Technologies <br /> We Use
            </p>
          </motion.div>
        </div>
      </div>
      <Script type="text/javascript" />
    </>
  );
};

export default OurTechnology;
