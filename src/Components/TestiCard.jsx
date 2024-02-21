import React, { useEffect, useState } from "react";
import Testi from "../Data/Testimonial.json";
import { Rating } from "../../public/assets/HomeImages";
import { motion } from "framer-motion";

const TestiCard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const Reszienumber = () => {
    const numberCards = windowWidth <= 768 ? 4 : 9;
    return Testi.slice(0, numberCards);
  };

  const numbertimes = 5;
  const ratings = [];

  for (let i = 0; i < numbertimes; i++) {
    ratings.push(<img key={i} src={Rating} alt="rating" className="" />);
  }

  const cards = Reszienumber();

  return (
    <div className="grid gap-10 grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {cards.map((testi) => (
        <motion.div
          key={testi.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="flex flex-col p-10 gap-5 box-border border-differentpure3  border-[1px] rounded-[20px] col-span-1 box-shadow-1"
        >
          <div className="flex items-center gap-2">
            <div>
              <img
                src={testi.profile}
                alt="testi"
                className="rounded-full w-[48px] h-[48px]"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[16px] font-Inter font-semibold text-tertiary">
                {testi.name}
              </h2>
              <p className="flex items-center">{ratings}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[14px] font-Inter font-semibold">
              {testi.template}
            </p>
            <p className=" text-[16px] font-Inter font-light text-greyishblue leading-[26px] tracking-[0px]">
              {testi.review}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TestiCard;
