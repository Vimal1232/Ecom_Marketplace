import React from "react";
import { Navbar, LatestTemplate, Footer } from "../Layouts";
import { Shophome, ProAccess, Faq } from "../Components/index";

const Shop = () => {
  return (
    <>
      <div className=" bg-differentpure2">
        <Navbar />
      </div>
      <div className="bg-differentpure2 py-20">
        <Shophome
          title="High quality templates
 designed to perfection"
          Paragraph="Find and download the best high-quality 3D and vector illustrations, fonts, designs and mockups."
          Button="Shop Templates"
          fontClass="font-medium"
        />
      </div>
      <div className="py-10">
        <LatestTemplate />
      </div>
      <div className="py-20 my-10">
        <ProAccess />
      </div>
      <div className="my-16">
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
