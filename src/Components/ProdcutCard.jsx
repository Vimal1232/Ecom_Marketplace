import React from "react";
import Product from "../Data/Productlist.json";
import { motion } from "framer-motion";

const ProductCard = ({ limit1, limit2 }) => {
  return (
    <div className=" grid grid-cols-4 grid-flow-row gap-5 max-lg:grid-cols-3 max-vmd:grid-cols-2  ">
      {Product.slice(limit1, limit2).map((Product) => (
        <motion.div
          key={Product.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="flex flex-col gap-5 col-span-1"
        >
          <div className=" bg-transparent box-border object-contain object-center block hover:scale-105 duration-500 ease-in-out cursor-pointer">
            <img
              src={Product.image}
              alt={Product.name}
              className=" w-full h-full rounded-3xl "
            />
          </div>
          <div>
            <div className="flex justify-between">
              <h2>
                <span className=" font-Inter font-semibold text-[18px] text-secondary">
                  {Product.name}
                </span>
              </h2>
              <p>
                <span className=" font-Inter font-semibold text-[16px] text-tertiary">
                  {Product.price}
                </span>
              </p>
            </div>
            <span className=" font-Inter font-semibold text-[12px] text-greyishblue">
              {Product.tag}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductCard;
