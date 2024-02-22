import React from "react";
import People from "../Data/People.json";

const Team = () => {
  return (
    <section className=" px-10 max-sm:px-5">
      <div className="grid grid-cols-4  gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 ">
        {People.map((Person) => (
          <div
            key={Person.id}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              src={Person.Img}
              alt={Person.Name}
              className=" rounded-[40px] object-center object-cover w-full h-full"
            />
            <h3 className=" text-[18px] text-secondary font-Inter font-semibold">
              {Person.Name}
            </h3>
            <p className=" text-[16px] text-greyishblue font-Inter font-medium">
              {Person.Post}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
