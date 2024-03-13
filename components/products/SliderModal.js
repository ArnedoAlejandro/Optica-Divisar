import React, { Component } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useGlobal } from "../../context/globalContext";

const SliderModal = () => {
  const { selectProduct } = useGlobal();

  return (
    <Carousel>
      <div className="w-full h-[40vh]  flex items-center  ">
        <div className="w-[100%] h-full  max-lg:h-full">
          <Image
            src={selectProduct.img[0]}
            width={0}
            height={0}
            className="w-full h-auto max-md:h-full"
          />
        </div>
      </div>
      <div className="w-full h-[40vh]  flex items-center ">
        <div className="w-[100%] h-full  max-lg:h-full">
          <Image
            src={selectProduct.img[1]}
            width={0}
            height={0}
            className="w-full h-auto max-md:h-full"
          />
        </div>
      </div>
      <div className="w-full h-[40vh]  flex items-center  ">
        <div className="w-[100%] h-full  max-lg:h-full">
          <Image
            src={selectProduct.img[2]}
            width={0}
            height={0}
            className="w-full h-auto max-md:h-full"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default SliderModal;
