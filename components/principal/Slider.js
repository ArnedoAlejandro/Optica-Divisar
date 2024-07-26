"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import gafas from "../../public/gafas.jpg";
import lentesSol from "../../public/lentesSol.jpg";
import slider2 from "../../public/slider2.jpg";

import Glide from "@glidejs/glide";

const Slider = () => {
  return (
    <>
      {/*    <!-- Indicators --> */}
      <div
        className="absolute bottom-0 flex items-center justify-center w-full gap-2"
        data-glide-el="controls[nav]"
      >
        <button
          className="p-4 group"
          data-glide-dir="=0"
          aria-label="goto slide 1"
        >
          <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
        </button>
        <button
          className="p-4 group"
          data-glide-dir="=1"
          aria-label="goto slide 2"
        >
          <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
        </button>
        <button
          className="p-4 group"
          data-glide-dir="=2"
          aria-label="goto slide 3"
        >
          <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
        </button>
      </div>

      <Carousel>
        <div className="w-full h-[85vh]  bg-yellow-400 flex items-center max-md:h-[80vh]">
          <div className="w-[100%] h-auto  max-lg:h-full">
            <Image
              src={gafas}
              width={0}
              height={0}
              className="w-full h-auto max-md:h-full"
            />
          </div>

          <div className="absolute w-full h-full bg-black/20 grid place-content-center  ">
            <h1 className="text-[90px]  text-white font-normal max-lg:text-[45px] max-md:text-[45px] ">
              Optica Divisar
            </h1>
            <p className="text-[40px]  text-white font-normal  max-lg:text-[30px] max-md:text-[25px]">
              Expertos en contactologia
            </p>
          </div>
        </div>

        <div className="w-full h-[85vh]  bg-yellow-400 flex items-center max-md:h-[80vh] ">
          <div className="w-full h-auto  max-lg:h-full">
            <Image
              src={slider2}
              width={0}
              height={0}
              className="w-full h-auto max-md:h-full object-fill"
            />
          </div>

          <div className="absolute w-full h-full bg-black/20 grid place-content-center  ">
            <h1 className="text-[90px]  text-white font-normal max-lg:text-[45px] max-md:text-[45px] ">
              Anteojos recetados
            </h1>
            <p className="text-[40px]  text-white font-normal  max-lg:text-[30px] max-md:text-[25px]">
              Calidad y diseño al mejor precio
            </p>
          </div>
        </div>

        <div className="w-full h-[85vh]  bg-yellow-400 flex items-center max-md:h-[80vh] ">
          <div className="w-[100%] h-auto  max-lg:h-full">
            <Image
              src={lentesSol}
              width={0}
              height={0}
              className="w-full h-auto max-md:h-full"
            />
          </div>

          <div className="absolute w-full h-full bg-black/20 grid place-content-center  ">
            <h1 className="text-[90px]  text-white font-normal max-lg:text-[45px] max-md:text-[45px] ">
              Lentes de sol
            </h1>
            <p className="text-[40px]  text-white font-normal  max-lg:text-[30px] max-md:text-[25px]">
              Renova tu estilo
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
