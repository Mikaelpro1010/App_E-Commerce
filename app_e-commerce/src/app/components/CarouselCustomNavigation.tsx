"use client";

import { Carousel } from "flowbite-react";

const CarouselCustomNavigation = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/banner-1.jpg" alt="..." />
        <img src="/banner-2.webp" alt="..." />
        <img src="/banner-3.avif" alt="..." />
      </Carousel>
    </div>
  );
}

export default CarouselCustomNavigation
