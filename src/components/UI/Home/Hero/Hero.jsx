"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button/Button";
import icon from "../../../../../public/assets/images/icon.png";
import image1 from "../../../.././../public/assets/images/hero/Frame 598 (2).png";
import image2 from "../../../.././../public/assets/images/hero/Frame 598.png";
import image3 from "../../../.././../public/assets/images/hero/Frame 599.png";
import image4 from "../../../.././../public/assets/images/hero/Frame 600.png";
import image5 from "../../../.././../public/assets/images/hero/Frame 601.png";
import image6 from "../../../.././../public/assets/images/hero/Frame 602.png";
import image7 from "../../../.././../public/assets/images/hero/Frame 603.png";
import image8 from "../../../.././../public/assets/images/hero/Frame 598 (1).png";

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

const Hero = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat h-[197px] md:h-screen flex justify-between items-center"
        style={{
          backgroundImage: "url(/assets/images/banner.png)",
        }}
      >
        <div className="container relative flex items-center justify-between md:gap-40">
          <div className="pl-1 md:pl-0">
            <h1 className="text-base md:text-[56px] font-semibold text-white">
              We Provide Best Technology Solutions
            </h1>
            <p className="text-[10px] md:text-base font-medium my-4 md:my-0 md:pt-8 md:pb-12 text-[#f1f1f1]">
              We are passionate about bringing enterprise-level productivity,
              scalability, and security to small and medium businesses. How it
              works Contact Us
            </p>
            <Image
              className="hidden md:block absolute top-2/3 left-1/3"
              src={icon}
              width={100}
              height={100}
              alt="icon"
            />
            <Button content="How it works" className="hidden md:block mr-6" />
            <Button content="Contact Us" />
          </div>
          <div className="hidden lg:block">
            <div className="relative size-[464px] border border-white border-dashed rounded-full flex justify-center items-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
