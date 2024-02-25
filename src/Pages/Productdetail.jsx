import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../Layouts";
import { Proaccess2 } from "../Components";
import { useParams } from "react-router-dom";
import ProductList from "../Data/Productlist.json";

const Productdetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = ProductList.find(
      (product) => product.id === Number(id)
    );
    setProduct(fetchProduct);
  }, [id]);

  return (
    <section className="">
      <div>
        <div className=" bg-differentpure2">
          <Navbar />
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10 px-10 max-sm:px-5 max-md:grid-cols-1 ">
          <div>
            <img
              src={product.image}
              alt=""
              className=" rounded-[32px] w-full h-fit"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className=" p-12 bg-differentpure2 rounded-[32px]">
              <div className="flex gap-2 flex-col mb-8">
                <h1 className=" font-Inter font-semibold text-[28px] text-secondary text-left">
                  {product.name}
                </h1>
                <p className=" font-Inter font-normal text-[18px] text-greyishblue text-left">
                  {product.despricption}
                </p>
              </div>
              <div className="flex gap-10 justify-between items-center ">
                <button className=" bg-primary  text-white text-[18px] p-3 rounded-full hover:text-white hover:bg-tertiary duration-700 ease-in-out font-Inter font-medium w-3/5 ">
                  Buy Now
                </button>
                <p>
                  <span className=" font-Inter font-bold text-[24px] text-greyishblue">
                    {product.price}
                  </span>
                </p>
              </div>
            </div>
            <div className="p-12 bg-differentpure2 rounded-[32px] flex flex-col gap-5">
              <div>
                <h1 className=" font-Inter font-semibold text-[20px] text-secondary text-left">
                  Information
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center border-b-2 pb-5">
                  <p className=" font-Inter font-light text-[12px] text-greyishblue">
                    compatibilty
                  </p>
                  <p className="font-Inter font-light text-[12px] text-greyishblue">
                    {product.compatibilty}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2 pb-5">
                  <p className=" font-Inter font-light text-[12px] text-greyishblue">
                    Size
                  </p>
                  <p className="font-Inter font-light text-[12px] text-greyishblue">
                    {product.Size}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2 pb-5">
                  <p className=" font-Inter font-light text-[12px] text-greyishblue">
                    Updated On
                  </p>
                  <p className="font-Inter font-light text-[12px] text-greyishblue">
                    {product.Updated}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Proaccess2 />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Productdetail;
