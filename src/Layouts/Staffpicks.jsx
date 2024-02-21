import React from "react";
import { ProductCard } from "../Components/index";

const Staffpicks = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col px-10 max-sm:p-5 gap-10">
        <div>
          <h1 className="text-[28px] text-tertiary font-semibold ">
            Staff Picks
          </h1>
        </div>
        <div className="">
          <ProductCard limit1={12} limit2={20} />
        </div>
      </div>
    </section>
  );
};

export default Staffpicks;
