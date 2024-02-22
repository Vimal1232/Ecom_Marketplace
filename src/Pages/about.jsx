import React from "react";
import { Shophome } from "../Components";
import { Navbar, Footer } from "../Layouts";
import { AboutImg } from "../../public/assets/HomeImages";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="my-20">
        <Shophome
          title="We design every template as our own"
          Paragraph="All good things starts with a homepage get inspired without breaking your wallet."
          Button="Cafting user-centric interfaces"
          fontClass="font-medium"
          fontsize="text-[84px]"
          width="max-w-[900px] "
        />
      </div>
      <motion.div
        className=" flex items-center justify-center"
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
        <img src={AboutImg} alt="" />
      </motion.div>
    </section>
  );
};

export default About;
