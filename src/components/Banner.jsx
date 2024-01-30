import React, { useState } from "react";
import Container from "./ShareComponents/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./ShareComponents/Image";
import { Link } from "react-router-dom";

export default function Banner() {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#ffb502",
                borderRight: "3px #ffb502 solid",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "10px 0",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      borderRight: "3px white solid",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <Image className="h-[500px]" src="/images/slider-111.jpg">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg ">
              <h2 className="text-[60px] font-bold">Hello There !</h2>
              <h3 className="mt-[20px]  text-[40px]">Welcome to Conda Shop</h3>
              <h5 className="text-[22px] my-3">Lets Shoping</h5>
              <Link className="bg-mainColor-700 py-[10px] px-[10px] rounded-[5px] hover:underline">
                Shop Now
              </Link>
            </div>
          </Image>
        </div>
        <div>
          <Image className="h-[500px]" src="/images/slide-bg-4.jpg">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg ">
              <h2 className="text-[60px] font-bold">Eltronic products !</h2>
              <h3 className="mt-[20px]  text-[40px]">Explore Top Seller</h3>
              <h5 className="text-[22px] my-3">Lets Shoping</h5>
              <Link className="bg-mainColor-700 py-[10px] px-[10px] rounded-[5px] hover:underline">
                Shop Now
              </Link>
            </div>
          </Image>
        </div>
        <div>
          <Image className="h-[500px]" src="/images/slider-333.jpg">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg ">
              <h2 className="text-[60px] font-bold">New Arrival</h2>
              <h3 className="mt-[20px]  text-[40px]">Winter Collection</h3>
              <h5 className="text-[22px] my-3">Love it & enjoy it</h5>
              <Link className="bg-mainColor-700 py-[10px] px-[10px] rounded-[5px] hover:underline">
                Shop Now
              </Link>
            </div>
          </Image>
        </div>
      </Slider>
    </Container>
  );
}
