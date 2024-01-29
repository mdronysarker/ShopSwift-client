import React from "react";
import Container from "./ShareComponents/Container";
import Flex from "./ShareComponents/Flex";
import Image from "./ShareComponents/Image";
import { FaSearch } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="bg-mainColor-700 py-[30px]">
      <Container>
        <Flex className="justify-between items-center gap-4 ">
          <div className="w-[25%]">
            <Image src="/images/logo.png" />
          </div>
          <div className="w-[70%] bg-white">
            <Flex className="items-center justify-between">
              <div>
                <ul className="flex items-center justify-end p-x-8 text-menuColor-700 font-semibold ">
                  <li className="bg-menubg-700 px-[20px] py-5 text-[14px] text-white hover:bg-menubg-700 hover:text-white transition duration-300 ease-out">
                    HOME
                  </li>
                  <li className=" px-[20px] py-5 text-[14px] hover:bg-menubg-700 hover:text-white transition duration-300 ease-out ">
                    FASHION
                  </li>
                  <li className=" px-[20px] py-5 text-[14px] hover:bg-menubg-700 hover:text-white transition duration-300 ease-out ">
                    MAN
                  </li>
                  <li className=" px-[20px] py-5 text-[14px] hover:bg-menubg-700 hover:text-white transition duration-300 ease-out ">
                    WOMAN
                  </li>
                  <li className=" px-[20px] py-5 text-[14px] hover:bg-menubg-700 hover:text-white transition duration-300 ease-out ">
                    BLOG
                  </li>
                  <li className=" px-[20px] py-5 text-[14px] hover:bg-menubg-700 hover:text-white transition duration-300 ease-out ">
                    CONTACT
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-3 py-4 ml-3">
                <FaSearch className="text-mainColor-700" />
                <input
                  className="outline-none focus:ring-0"
                  type="text"
                  placeholder="Search by keybroad..."
                />
              </div>
              <div className="mr-2">
                <HiMiniShoppingBag className="text-[24px] text-mainColor-700" />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
}
