import React from "react";

export default function Badge({ text }) {
  return (
    <div className="bg-[#01bad4] absolute top-[42px] left-[8px] z-50">
      <span className="h-[20px] px-[10px] text-center font-normal text-[11px] text-[#fff]">
        {text}
      </span>
    </div>
  );
}
