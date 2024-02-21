import React, { useState, useEffect } from "react";
import { PriceCard } from "../Components";
import { AnimatePresence, motion } from "framer-motion";
import useButtonchange from "../Hooks/Buttonchange";
import { Logos } from "../../public/assets/HomeImages";

const PriceSec = () => {
  const {
    background,
    color,
    background2,
    color2,
    price,
    price2,
    price3,
    buttonClicked1,
    buttonClicked2,
  } = useButtonchange([]);

  useEffect(() => {
    buttonClicked2();
  }, []);

  return (
    <AnimatePresence>
      <section className="px-10 max-sm:px-5">
        <motion.div
          className="flex flex-col gap-8"
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
        >
          <div className="flex bg-differentpure2 rounded-full py-2 w-[190px] items-center justify-center gap-2 mx-auto">
            <button
              className={`${color} text-[18px] font-semibold ${background}  px-3 py-2  rounded-full duration-700 ease-in-out  `}
              onClick={buttonClicked1}
            >
              Monthly
            </button>
            <button
              className={`${color2} text-[18px] font-semibold ${background2}  px-3 py-2  rounded-full duration-700 ease-in-out `}
              onClick={buttonClicked2}
            >
              Yearly
            </button>
          </div>
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-ss:grid-cols-1">
            <PriceCard
              Bg="bg-differentpure2"
              color="text-black"
              Title="Freelancer"
              Price={price}
              value="5"
              custom="1"
              Bg2="bg-primary"
              color2="text-white"
              Img="list-image-[url(../public/assets/HomeImages/checkmark2.svg)]"
              text="text-greyishblue"
              buttonhover="hover:bg-black"
            />
            <PriceCard
              Bg="bg-primary"
              color="text-white"
              Title="Agency"
              Price={price2}
              value="10"
              custom="2"
              Bg2="bg-white"
              color2="text-black"
              Img="list-image-[url(../public/assets/HomeImages/checkmark.svg)]"
              text="text-white"
              buttonhover="hover:bg-black"
              hovertext="hover:text-white"
            />
            <PriceCard
              Bg="bg-differentpure2"
              color="text-black"
              Title="Enterprise"
              Price={price3}
              value="20"
              custom="3"
              Bg2="bg-primary"
              color2="text-white"
              Img="list-image-[url(../public/assets/HomeImages/checkmark2.svg)]"
              text="text-greyishblue"
              buttonhover="hover:bg-black"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={Logos} alt="" className="w-[300px] " />
            <div>
              <h3 className=" text-greyishblue font-Inter font-medium text-[14px]">
                Payments Secured by{" "}
                <span className="font-bold">Lemon Squeezy</span>
              </h3>
            </div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default PriceSec;
