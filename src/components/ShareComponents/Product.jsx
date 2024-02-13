import React from "react";
import Offerbadge from "./Offerbadge";
import Badge from "./Badge";
import CartIcon from "../../Svg/CartIcon";
import Image from "./Image";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="prouct w-[16%] shadow-md relative">
      <div className="product-wrapper">
        <div className="product-img">
          <Image src="./images/pant.jpg" />
        </div>
        <div className="product-details text-center">
          <Link className="text-[#000] text-[16px]">Formal Pant</Link>
          <div className="my-[6px]">
            <span className="text-[12px] text-[#555] opacity-[0.8] line-through font-semibold">
              Tk.2230
            </span>
            <span className="text-[12px] text-mainColor-700 opacity-[0.8] pl-[5px] font-semibold">
              Tk.2230
            </span>
          </div>
        </div>
      </div>
      <Offerbadge discount="10%" />
      <Badge text="New" />
      <div className="flex gap-[16px] items-center p-[12px]">
        <div className="rounded-[8px] bg-mainColor-700 py-[7px] px-[8px]">
          <CartIcon />
        </div>
        <div>
          <p className=" font-bold text-[12px] text-mainColor-700 ">In Stock</p>
        </div>
      </div>
    </div>
  );
}
