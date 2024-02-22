import React from "react";
import { Logo } from "../../public/assets/HomeImages";
import Links from "../Data/footer.json";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-differentpure3">
      <div className=" px-10 max-sm:px-5">
        <div className="flex p-20 justify-evenly gap-8 max-sm:p-5">
          <div>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-20 max-sm:grid-cols-3 max-xs:grid-cols-2">
            {Links.map((ink) => (
              <div key={ink.id} className=" col-span-1">
                <h3 className=" font-Inter font-semibold] mb-2">{ink.title}</h3>
                <ul className="flex flex-col gap-2">
                  <li className=" font-Inter font-normal text-greyishblue text-[14px] hover:text-differentpure duration-400 ease-in-out cursor-pointer">
                    {ink.first}
                  </li>
                  <li className=" font-Inter font-normal text-greyishblue text-[14px] hover:text-differentpure duration-400 ease-in-out cursor-pointer">
                    {ink.second}
                  </li>
                  <li className=" font-Inter font-normal text-greyishblue text-[14px] hover:text-differentpure duration-400 ease-in-out cursor-pointer">
                    {ink.third}
                  </li>
                  <li className=" font-Inter font-normal text-greyishblue text-[14px] hover:text-differentpure duration-400 ease-in-out cursor-pointer">
                    {ink.fourth}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
