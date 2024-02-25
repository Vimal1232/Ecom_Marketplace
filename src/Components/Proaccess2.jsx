import React from "react";
import { Link } from "react-router-dom";

const Proaccess2 = () => {
  return (
    <section>
      <div className=" flex flex-col p-12 rounded-[32px] bg-secondary gap-5">
        <h1 className=" font-Inter font-semibold text-[28px] text-white text-left">
          Pro Access
        </h1>
        <p className=" font-Inter font-light text-[14px] text-white text-left">
          Designing in Framer has never been so fast and effortless. Browse
          hundreds of beautifully designed layouts, copy and paste assets.
        </p>
        <Link to="/price">
          <button className="bg-primary  text-white text-[18px] p-3 rounded-full hover:bg-white hover:text-black duration-700 ease-in-out font-Inter font-medium w-full">
            Subscribe
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Proaccess2;
