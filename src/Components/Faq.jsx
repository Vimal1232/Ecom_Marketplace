import React, { useState } from "react";
import FaqData from "../Data/faq.json";
import { Plus, Minus } from "../../public/assets/HomeImages";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [Open, setOpen] = useState(null);

  return (
    <div className=" px-10 max-sm:px-5">
      <div className="flex flex-col gap-10 items-center justify-center ">
        <div>
          <h1 className="text-[42px] font-semibold text-center font-Inter text-tertiary">
            Frequently Asked
          </h1>
        </div>
        <AnimatePresence>
          <motion.div
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
            className="flex flex-col gap-5 w-[900px] max-md:w-[700px] max-sm:w-[500px] max-ss:w-[400px] max-xs:w-[300px]"
          >
            {FaqData.map((Faq) => (
              <div key={Faq.id} className="flex flex-col  ">
                <AnimatePresence>
                  <motion.div
                    className={`flex items-center justify-between p-4 bg-differentpure3 
                ${
                  Open === Faq.id ? " rounded-t-[8px]" : "rounded-[8px]"
                }  cursor-pointer`}
                    onClick={() => setOpen(Open === Faq.id ? null : Faq.id)}
                  >
                    <h1 className=" text-greyishblue text-[18px] font-Inter font-semibold cursor-pointer">
                      {Faq.title}
                    </h1>
                    <img
                      src={Open === Faq.id ? Minus : Plus}
                      alt=""
                      className={`${
                        Open === Faq.id
                          ? " duration-500 ease-in-out"
                          : " duration-500 ease-in-out rotate-180"
                      } `}
                    />
                  </motion.div>
                </AnimatePresence>

                {Open === Faq.id && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0 }}
                      transition={{ duration: 0.1, ease: "easeInOut" }}
                      className={`
                      p-4 text-[16px] text-greyishblue font-Inter font-normal bg-differentpure3 rounded-b-[8px]`}
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {Faq.content}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Faq;
