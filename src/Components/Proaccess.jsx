import React from "react";
import { Background } from "../../public/assets/HomeImages/index";
import { Link } from "react-router-dom";

const ProAccess = () => {
  return (
    <section>
      <div className="px-10 max-sm:px-5">
        <div className="flex bg-secondary rounded-[40px] gap-8 pl-[56px] max-sm:px-5 ">
          <div className="flex flex-col pb-[56px] mt-20 max-w-[550px] gap-10 max-sm:text-center max-sm:mx-auto">
            <div>
              <h2 className=" text-[52px] text-pure font-Inter font-semibold leading-[63px] tracking-[-1.5px] mb-4 max-sm:text-[40]">
                Pro Access
              </h2>
              <p className="text-[20px] text-differentpure3 font-Inter font-light leading-[32px] max-sm:text-[18px] text-left">
                Launching your next website has never been so fast and
                effortless. Browse hundreds of beautifully designed Framer
                templates and go live in minutes.
              </p>
            </div>
            <div className="flex items-center gap-12 ml-9 max-sm:flex-wrap max-sm:gap-1 text-left ">
              <div>
                <ul className="flex flex-col gap-3 list-image-[url(../../assets/HomeImages/checkmark.svg)] ">
                  <li className="text-[16px] text-differentpure3 font-Inter font-light leading-[32px]">
                    3K+ templates
                  </li>
                  <li className="text-[16px] text-differentpure3 font-Inter font-light leading-[32px]">
                    Responsive layouts
                  </li>
                  <li className="text-[16px] text-differentpure3 font-Inter font-light leading-[32px]">
                    Google Fonts
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-3 list-image-[url(../../assets/HomeImages/checkmark.svg)] ">
                  <li className="text-[16px] text-differentpure3 font-Inter font-light leading-[32px]">
                    Shared styles
                  </li>
                  <li className="text-[16px] text-differentpure3 font-Inter font-light leading-[32px]">
                    5k Components
                  </li>
                  <li className="text-[16px] text-differentpure3 font-Inter font-light leading-[32px]">
                    Premium support
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <Link to="/price">
                <button className=" bg-primary  text-white text-[18px] p-3 rounded-full hover:bg-white hover:text-black duration-700 ease-in-out font-Inter font-medium w-full">
                  Start your 7 day trial
                </button>
              </Link>
            </div>
          </div>
          <div className=" max-vmd:hidden">
            <img
              src={Background}
              alt=""
              className="rounded-[40px] w-full h-full object-cover object-center block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProAccess;
