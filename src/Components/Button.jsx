import React from "react";

const Button = (Name) => {
  return (
    <button className=" text-[14px] text-tertiary bg-transparent border-tertiary px-[14px] py-[4px] border-[1px] rounded-[100px] font-Inter font-semibold text-center">
      {Name.Name}
    </button>
  );
};

export default Button;
