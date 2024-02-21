import React from "react";
import {
  Navbar,
  Herosec,
  LatestTemplate,
  Staffpicks,
  Testimonial,
  Footer,
} from "../Layouts/index";

import { ProAccess, Faq } from "../Components/index";

const Home = () => (
  <div className=" ">
    <div className=" bg-differentpure2">
      <Navbar />
    </div>

    <div className=" bg-differentpure2">
      <Herosec />
    </div>

    <div className=" mb-20 max-sm:mb-10">
      <LatestTemplate Limit1={0} Limit2={8} />
    </div>
    <div className=" pt-5 mb-20 max-sm:mb-10">
      <Staffpicks />
    </div>
    <div className="mb-20 max-sm:mb-10">
      <Testimonial />
    </div>
    <div className="mb-20 max-sm:mb-10">
      <ProAccess />
    </div>
    <div className="mb-20 max-sm:mb-10">
      <Faq />
    </div>
    <div className=" ">
      <Footer />
    </div>
  </div>
);
export default Home;
