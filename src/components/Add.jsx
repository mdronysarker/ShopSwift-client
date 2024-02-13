import React from "react";
import Container from "./ShareComponents/Container";
import Flex from "./ShareComponents/Flex";
import Image from "./ShareComponents/Image";

export default function Add() {
  return (
    <div className="max-w-[1600px] mx-auto mt-[35px] mb-[60px] ">
      <Flex className="gap-8">
        <div className="w-[50%]">
          <Image src="./images/man.jpg" />
        </div>
        <div className="w-[50%]">
          <Image src="./images/woman.jpg" />
        </div>
      </Flex>
    </div>
  );
}
