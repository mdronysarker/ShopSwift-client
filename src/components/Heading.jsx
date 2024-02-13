import React from "react";

export default function Heading({ heading, para }) {
  return (
    <div className="heading text-center">
      <h2 className="text-[35px] text-[#000] font-normal leading-[1.2] ">
        {heading}
      </h2>
      <p className="text-[14px] text-[#555] mt-2">{para}</p>
    </div>
  );
}
