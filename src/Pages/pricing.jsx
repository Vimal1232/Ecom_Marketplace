import React from "react";
import { Navbar, PriceSec, Testimonial, Footer } from "../Layouts";
import { Shophome, Faq } from "../Components";

const Pricing = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="my-16">
        <Shophome
          title="Get Pro Access"
          Paragraph="Find and download the best high-quality 3D and vector illustrations, fonts, designs and mockups."
          Button="Pricing"
          fontClass="font-semibold"
          fontsize="text-[64px]"
          width="max-w-[700px] "
        />
      </div>
      <div className="my-16">
        <PriceSec />
      </div>
      <div className="my-16">
        <Testimonial />
      </div>
      <div className="my-16">
        <Faq />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
