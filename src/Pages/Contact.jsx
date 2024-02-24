import React from "react";
import { Navbar, Footer } from "../Layouts";
import { Shophome, Form, Faq } from "../Components";

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
      <div className="my-20 pt-10">
        <Form />
      </div>
      <div className="my-20 pt-20">
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
