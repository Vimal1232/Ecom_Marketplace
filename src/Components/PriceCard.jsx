import React from "react";

const PriceCard = (Content) => {
  return (
    <div>
      <div className={` p-8 flex flex-col ${Content.Bg} rounded-[24px] gap-14`}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h3
              className={` text-[18px] font-Inter font-semibold  ${Content.color} leading-[30px] text-left`}
            >
              {Content.Title}
            </h3>
            <h1
              className={` text-[42px] font-Inter font-semibold ${Content.color} leading-[54px] tracking-[-2px]`}
            >
              {Content.Price}
              <span
                className={`text-[24px] font-Inter font-medium ${Content.color} leading-[40px] tracking-[-1px] `}
              >
                /mo
              </span>
            </h1>
            <p
              className={`text-[16px] font-Inter font-normal ${Content.text} leading-[26px]`}
            >
              Per User
            </p>
          </div>

          <div className="">
            <ul
              className={`flex flex-col gap-2 ${Content.Img} text-left ml-5 ${Content.color}`}
            >
              <li>Full library access</li>
              <li>{Content.value} assets / mo</li>
              <li>Regular updates</li>
              <li>{Content.custom} custom template</li>
              <li>Premium support</li>
            </ul>
          </div>
        </div>
        <div>
          <button
            className={`w-full py-3 px-8  rounded-full ${Content.Bg2}  font-Inter font-semibold text-[18px] leading-[30px] ${Content.color2} ${Content.buttonhover} ${Content.hovertext} duration-1000  ease-in-out`}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
