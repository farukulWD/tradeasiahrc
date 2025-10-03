"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

type TSlide = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
};

const sliderData = [
  {
    id: 1,
    image: "/banner/fz-3-banner-img-3.jpg",
    title: "The Perfect Door For Every Occasion",
    subtitle: "Stylish, Secure, and Built to Last"
  },
  {
    id: 2,
    image: "/banner/fz-3-banner-img.png",
    title: "The Secret Key to a Stylish Home",
    subtitle: "Elegance, Security, and Timeless Design"
  },
  {
    id: 3,
    image: "/banner/fz-3-banner-img-2.jpg",
    title: "Make your entrance a grand one",
    subtitle: "Step Into Style and Sophistication"
  }
];

const HeroSlider = () => {


  return (
    <div>
      <Swiper autoplay modules={[Autoplay]} className="mySwiper">
        {sliderData?.map((slider) => (
          <SwiperSlide key={slider?.id}>
            <div className="md:grid grid-cols-2 gap-6 items-center">
              <div className="">
                <h2 className="text-center   text-xl lg:text-5xl text-[#fe3231] font-bold mb-3">
                  {slider?.title}
                </h2>
                <p className="text-xl text-center hidden md:block  font-semibold">
                  {slider?.subtitle}
                </p>
              </div>
              <div className="max-h-[500px]">
                <Image
                  className="rounded-sm max-h-[500px] w-[100%] h-[100%] object-contain"
                  src={slider?.image}
                  width={1000}
                  height={600}
                  alt={slider?.title}
                ></Image>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
