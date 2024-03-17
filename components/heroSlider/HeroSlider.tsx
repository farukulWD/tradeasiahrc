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

const HeroSlider = () => {
  const [sliders, setSliders] = useState<TSlide[]>([]);
  useEffect(() => {
    fetch("/sliderData.json")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);

  return (
    <div>
      <Swiper autoplay modules={[Autoplay]} className="mySwiper">
        {sliders?.map((slider) => (
          <SwiperSlide key={slider?.id}>
            <div className="md:grid grid-cols-2 gap-6 items-center">
              <div className="">
                <h2 className="text-center  text-xl lg:text-3xl text-[#fe3231] font-bold mb-3">
                  {slider?.title}
                </h2>
                <p className="text-xl text-center hidden md:block  font-semibold">
                  {slider?.subtitle}
                </p>
              </div>
              <div>
                <Image
                  className="rounded-sm w-[100%] h-[100%] object-contain"
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
