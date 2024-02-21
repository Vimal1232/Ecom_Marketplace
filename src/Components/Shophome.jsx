import React from "react";
import { Button } from "../Components/index";

const Shophome = (Content) => {
  return (
    <section className="px-10 max-sm:px-5">
      <div
        className={`flex flex-col justify-center items-center ${Content.width} mx-auto gap-5`}
      >
        <div>
          <Button Name={Content.Button} />
        </div>
        <div className="flex flex-col gap-7">
          <h2
            className={` ${Content.fontsize} font-Inter ${Content.fontClass} text-center leading-[74px] tracking-[-2.5px`}
          >
            {Content.title}
          </h2>
          <p className=" text-[18px] font-Inter font-normal text-greyishblue text-center">
            {Content.Paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shophome;
