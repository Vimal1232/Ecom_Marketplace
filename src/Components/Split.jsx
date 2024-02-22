import React from "react";

const Split = () => {
  return (
    <section className=" px-10 max-sm:px-5">
      <div className="">
        <div className="grid grid-cols-4 border-t-2 border-b-2 max-md:grid-cols-2 max-sm:grid-cols-1  ">
          <div className="flex flex-col gap-2 items-center justify-center border-r-2 py-[40px] px-[16px] max-md:border-r-0 ">
            <div className="flex flex-col items-center justify-center">
              <h1 className=" text-[34px] font-Inter font-semibold text-tertiary">
                15k+
              </h1>
              <p className=" text-[16px] font-Inter font-semibold text-tertiary">
                Downloads
              </p>
            </div>
            <div>
              <p className="text-[14px] font-Inter font-normal text-greyishblue text-center">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center border-r-2  py-[40px] px-[16px] max-md:border-r-0 max-md:border-t-2">
            <div className="flex flex-col items-center justify-center">
              <h1 className=" text-[34px] font-Inter font-semibold text-tertiary">
                250+
              </h1>
              <p className=" text-[16px] font-Inter font-semibold text-tertiary">
                Premium templates
              </p>
            </div>
            <div>
              <p className="text-[14px] font-Inter font-normal text-greyishblue text-center">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center border-r-2  py-[40px] px-[16px] max-md:border-r-0 max-md:border-t-2">
            <div className="flex flex-col items-center justify-center">
              <h1 className=" text-[34px] font-Inter font-semibold text-tertiary">
                12k+
              </h1>
              <p className=" text-[16px] font-Inter font-semibold text-tertiary">
                Components
              </p>
            </div>
            <div>
              <p className="text-[14px] font-Inter font-normal text-greyishblue text-center">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center  py-[40px] px-[16px] max-md:border-r-0 max-md:border-t-2 ">
            <div className="flex flex-col items-center justify-center">
              <h1 className=" text-[34px] font-Inter font-semibold text-tertiary">
                120
              </h1>
              <p className=" text-[16px] font-Inter font-semibold text-tertiary">
                Platforms
              </p>
            </div>
            <div>
              <p className="text-[14px] font-Inter font-normal text-greyishblue text-center">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Split;
