import React from "react";
import { GoArrowUpRight } from "react-icons/go";
type Props = {};

function Landing({}: Props) {
  return (
    <div className="container w-full h-screen pt-[14rem] ">
      <div className="textstructure px-5">
        {["We Create", "Eye opening", "presentations"].map((item, index) => {
          return (
            <div className="marker ">
              <h1 className="uppercase text-9xl leading-[.85] tracking-tighter font-bold">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              className="text-md font-light tracking-tight leading-none"
              key={index}
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-2 border-black rounded-full uppercase font-light text-sm ">
            start the project
          </div>
          <div className="w-10 h-10 border-[3px] border-black rounded-full  flex justify-center items-center">
            <GoArrowUpRight className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
