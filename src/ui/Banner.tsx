import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { DownloadIcon } from "../icons/DownloadIcon";
import { Button } from "./Button";

export const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        touchEventsTarget="container"
        grabCursor={true}
      >
        <SwiperSlide>
          <div className="w-full h-[400px] md:h-[600px] ">
            <Image
              className="pointer-events-none"
              src="/images/night.jpg"
              layout="fill"
              objectFit="cover"
              alt="winter"
            />
            <div className="z-50 relative flex flex-col gap-4 justify-center h-full px-7 sm:px-14 max-w-7xl mx-auto text-white text-left">
              <div className="">
                <h2 className="text-sm sm:text-base md:text-2xl">
                  GRAB YOUR COPY OF
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-5xl">
                  THE <span className="text-darkFont">PREMIUM QUALITY</span>
                  <br /> PSD TEMPLATE FOR
                  <span className="text-darkFont"> FREE</span>
                </h2>
              </div>
              <Button icon={<DownloadIcon />}>Download</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
