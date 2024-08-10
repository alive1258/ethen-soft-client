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
    scale: [1, 1.2, 1], // Zoom in to 1.2 and then back to 1
    transition: {
      duration: 2, // Duration for one cycle
      repeat: Infinity, // Repeat the animation indefinitely
      repeatType: "mirror", // Alternate the animation direction
    },
  },
};

const Hero = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat h-screen flex justify-between items-center"
        style={{
          backgroundImage: "url(/assets/images/banner.png)",
        }}
      >
        <div className="container relative flex items-center justify-between md:gap-40">
          <div className="">
            <h1 className="text-[56px] font-semibold text-white">
              We Provide Best Technology Solutions
            </h1>
            <p className="text-base font-medium pt-8 pb-12 text-white">
              We are passionate about bringing enterprise-level productivity,
              scalability, and security to small and medium businesses. How it
              works Contact Us
            </p>
            <Image
              className="absolute top-2/3 left-1/3"
              src={icon}
              width={100}
              height={100}
              alt="icon"
            />
            <Button content="How it works" className="mr-6" />
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
