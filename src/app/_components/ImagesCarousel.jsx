"use client";

// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImagesCarousel({ images }) {
  const slides = images.map((img) => (
    <SwiperSlide key={img}>
      <img src={img} alt="Ảnh sản phẩm" />
    </SwiperSlide>
  ));
  return <Swiper>{slides}</Swiper>;
}
