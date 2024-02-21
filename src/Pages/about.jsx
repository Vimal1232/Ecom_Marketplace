import React from "react";
import { Shophome } from "../Components";
import { Navbar, Footer } from "../Layouts";

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
    </section>
  );
};

export default About;
