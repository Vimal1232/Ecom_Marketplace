import React from "react";
import { Navbar } from "../Layouts";
import { Shophome } from "../Components";

const Contact = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="my-20">
        <Shophome
          title="How can we help?"
          Paragraph="If you have any questions, reach out to our team for help"
          Button="Get in touch"
          fontClass="font-semibold"
          fontsize="text-[84px]"
          width="max-w-[900px] "
        />
      </div>
    </section>
  );
};

export default Contact;
