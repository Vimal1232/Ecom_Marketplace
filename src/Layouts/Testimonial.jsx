import React from "react";
import { TestiCard, Button } from "../Components/index";

const Testimonial = () => {
  return (
    <section className="px-10 max-sm:px-5">
      <div className=" flex flex-col gap-20 max-sm:gap-10">
        <div className="flex flex-col items-center justify-center">
          <Button Name="Testimonial" />
          <h1 className=" text-[42px] text-tertiary font-Inter font-semibold gap-2 max-sm:text-[32px]  text-center">
            What designers think
          </h1>
        </div>
        <div>
          <TestiCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
