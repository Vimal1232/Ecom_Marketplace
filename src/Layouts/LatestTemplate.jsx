import React from "react";
import { ProductCard } from "../Components/index.js";

const LatestTemplate = ({ Limit1, Limit2 }) => {
  return (
    <section className="mt-20">
      <div className="flex flex-col px-10 max-sm:p-5 gap-10">
        <div>
          <h1 className="text-[28px] text-tertiary font-semibold ">
            Latest Templates
          </h1>
        </div>
        <div className="">
          <ProductCard limit1={Limit1} limit2={Limit2} />
        </div>
      </div>
    </section>
  );
};

export default LatestTemplate;
