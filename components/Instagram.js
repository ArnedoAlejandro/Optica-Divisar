"use client";
import { useEffect } from "react";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";

const Instagram = () => {
  useEffect(() => {
    AOS.init({
      // offset: 200,
      duration: 800,
      easing: "linear",
      delay: 30,
    });
  });
  return (
    <div className="w-full h-auto text-black/90 mt-14  border-b-2 border-y-2 bg-white flex justify-center items-center gap-3">
      <Link data-aos="fade-right" className="" href={""}>
        <div>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram bg-white/80 rounded-3xl p-2"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </div>
      </Link>
      <Link data-aos="fade-left" href={""}>
        <div>
          <p className="text-xl text-black/80 font-semibold max-md:text-lg max-md:font-medium">
            Seguinos en Instagram
          </p>
          <p className="text-3xl text-black/80  font-bold max-md:text-xl">
            optica.divisar
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Instagram;
