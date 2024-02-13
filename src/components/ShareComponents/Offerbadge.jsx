import React from "react";

export default function Offerbadge({ discount }) {
  return (
    <div className="bg-mainColor-700 absolute top-[12px] left-[8px] z-50">
      <span className="h-[20px] px-[10px] text-center font-normal text-[11px] text-[#fff]">
        {discount}
      </span>
    </div>
  );
}
