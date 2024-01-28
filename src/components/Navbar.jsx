import React, { useEffect, useRef, useState } from "react";
import Container from "../components/ShareComponents/Container";
import Flex from "./ShareComponents/Flex";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import Dropdown from "./ShareComponents/Dropdown";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(ref.current);
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <Container>
      <nav>
        <Flex className="justify-between">
          <div className="flex items-center gap-3">
            <BsFillTelephoneFill className="text-textColor-500 text-[12px]" />
            <p className="text-textColor-500 text-[12px] ">
              OUR CUSTOMER CARE: + 0123 456 789
            </p>
          </div>
          <Flex className=" gap-3 items-center">
            <Dropdown dropref={ref}>
              <div className="group flex items-center gap-1 transition duration-300 ease-in-out mr-7">
                <BiSolidUser className="text-textColor-500 text-[14px] group-hover:text-mainColor-700" />
                <span className="text-textColor-500 text-[14px] group-hover:text-mainColor-700">
                  MY ACCOUNT
                </span>
              </div>
              {show && (
                <ul className="absolute w-[141.6px] bg-menubg-700 text-[14px] text-[#fff]">
                  <li className="py-2 px-3 hover:bg-mainColor-700">
                    My Account
                  </li>
                  <li className="py-2 px-3 hover:bg-mainColor-700 transition duration-300 ease-linear">
                    Contact
                  </li>
                  <li className="py-2 px-3 hover:bg-mainColor-700 transition duration-300 ease-linear">
                    My Cart
                  </li>
                  <li className="py-2 px-3 hover:bg-mainColor-700 transition duration-300 ease-linear ">
                    Sign in
                  </li>
                </ul>
              )}
            </Dropdown>
            <div className="text-textColor-500 text-[14px] hover:text-mainColor-700 border border-textColor-500 px-[5px] py-[1.5px]">
              En
            </div>
            <div className="text-textColor-500 text-[14px] hover:text-mainColor-700 border border-textColor-500 px-[5.5px] py-[1.5px]">
              $
            </div>
          </Flex>
        </Flex>
      </nav>
    </Container>
  );
}
