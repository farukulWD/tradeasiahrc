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
      <Swiper
        autoplay={false}
        pagination
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliders?.map((slider) => (
          <SwiperSlide key={slider?.id}>
            <div className="grid grid-cols-2 items-center">
              <div>
                <h2>{slider?.title}</h2>
                <p>{slider?.subtitle}</p>
              </div>
              <div>
                <Image
                  src={slider?.image}
                  width={500}
                  height={200}
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
