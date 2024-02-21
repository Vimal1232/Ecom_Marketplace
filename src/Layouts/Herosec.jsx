import React from "react";
import {
  D3_assets_temp,
  Blender_temp,
  CarlSagen,
  Clarify_Black,
  Clarify_White,
  KrataTemp,
  MobileTemp,
  Netherland,
  Womentemp,
  Women2temp,
  Star,
  Square,
} from "../../public/assets/HomeImages";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Herosec = () => {
  const animation = {
    y: ["0vh", "-100vh"],
    transition: {
      y: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
        repeatType: "reverse",
      },
    },
  };

  const images = [
    CarlSagen,
    KrataTemp,
    D3_assets_temp,
    Blender_temp,
    Womentemp,
  ];

  const images2 = [
    Clarify_Black,
    Clarify_White,
    MobileTemp,
    Netherland,
    Women2temp,
  ];
  return (
    <section id="hero">
      <div className="flex  gap-4 px-10 max-sm:p-5">
        <div className="flex flex-col pt-10 pb-6 gap-7 max-w-[550px] max-vmd:w-auto">
          <div className="">
            <h4 className=" font-Inter text-[18px] font-semibold text-tertiary">
              The designer marketplace
            </h4>
          </div>
          <div className="">
            <h1 className="font-semibold text-[84px] max-sm:text-[70px] max-xs:text-[60px] text-tertiary font-Inter mb-4  tracking-[-3.5px] leading-[88px] ">
              Pro Framer templates
            </h1>
            <p className=" font-Inter font-light text-[20px] text-greyishblue leading-[32px]">
              A template library built with high precision and the best UI/UX
              practices in mind so you'll always find the perfect template for
              your next big idea.​
            </p>
          </div>
          <div>
            <button className=" bg-primary text-pure px-6 py-3 rounded-full font-Inter text-[18px] font-medium hover:bg-tertiary duration-700 ease-in-out">
              <Link to="/price">Get Pro Access </Link>
            </button>
          </div>
          <div className="flex items-center gap-6 mt-20 max-sm:mt-6 max-sm:flex-wrap">
            <div className="flex gap-2 items-center">
              <div>
                <img
                  src={Star}
                  alt=""
                  className="w-[40px] h-[40px] bg-pure p-1 rounded-[12px]"
                />
              </div>
              <div>
                <p className=" text-[14px] font-Inter font-light text-greyishblue text-wrap">
                  12.5K designer using our templates
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <img
                  src={Square}
                  alt=""
                  className="w-[40px] h-[40px] bg-pure p-1 rounded-[12px]"
                />
              </div>
              <div>
                <p className=" text-[14px] font-Inter font-light text-greyishblue text-wrap">
                  1K+ Framer templates designed by pros
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 overflow-y-hidden gradient_gg max-vmd:hidden max-md:h-[500px]">
          <motion.div className="flex flex-col gap-3" animate={animation}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt=""
                  className=" w-[full] h-full object-cover object-center block "
                />
              </div>
            ))}
            {images.map((img, index) => (
              <div key={index + images.length}>
                <img
                  src={img}
                  alt=""
                  className=" w-full h-full object-cover object-center block "
                />
              </div>
            ))}
            {images.map((img, index) => (
              <div key={index + images.length}>
                <img
                  src={img}
                  alt=""
                  className=" w-full h-full object-cover object-center block  "
                />
              </div>
            ))}
          </motion.div>
          <motion.div className="flex flex-col gap-3" animate={animation}>
            {images2.map((img, index) => (
              <div key={index + images.length}>
                <img
                  src={img}
                  alt=""
                  className=" w-full h-full object-cover object-center block "
                />
              </div>
            ))}
            {images2.map((img, index) => (
              <div key={index + images.length}>
                <img
                  src={img}
                  alt=""
                  className=" w-full h-full object-cover object-center block"
                />
              </div>
            ))}
            {images2.map((img, index) => (
              <div key={index + images.length}>
                <img
                  src={img}
                  alt=""
                  className=" w-full h-full object-cover object-center block"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Herosec;
