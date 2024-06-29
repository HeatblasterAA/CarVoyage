"use client";
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from 'embla-carousel-autoplay';
import { profile } from "@/constants/appdata"; //object called here

import {
  Card,
  CardContent,
} from "@/components/ui/card";
// import banner1 from "@/constants/banner1.jpg";
// import banner3 from "@/constants/banner3.jpg";
// import banner2 from "@/constants/banner2.jpg";


const Carousels = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          })
        ]}
      >
        <CarouselContent>
          {profile?.map((slide, index) => {
            console.log(slide.img); // Log the image URL to console for debugging
            return (
              <CarouselItem
                key={index}
                style={{ backgroundImage: `url(${slide.img})` }}
                className="w-full h-full bg-cover bg-center, pt-5 bg-no-repeat relative pointer-events-none"
              >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-16"></div>
                <div className="">
                  <Card className="bg-transparent border-none">
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="h-[40vh] md:h-[60vh] flex lg:justify-center items-center flex-col relative">
                        <h3 className="mb-1 lg:mb-5 flex items-center gap-6 text-2xl lg:text-5xl">
                          <span className="text-third-color font-bold flex transition-[3s]">{slide.title}</span>
                        </h3>
                        <p className="text-white text-sm md:text-4xl text-center w-10/12 md:w-8/12 ">

                          <i className={"fad fa-" + slide.icon}></i>

                          <span>{slide.text}</span>

                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div >
  );
};

export default Carousels;