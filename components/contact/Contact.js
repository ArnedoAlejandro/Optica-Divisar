"use client";
import { useEffect } from "react";
import Solution from "../Solution";

import Location from "./Location";

import logoDivisar from "../../public/logoDivisar.png";
import fondoForm from "../../public/fondoForm.jpeg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useRef } from "react";
import Whatsap from "../Whatsap";
import Instagram from "../Instagram";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "linear",
      delay: 30,
    });
  });

  return (
    <div className="">
      <Solution />
      <div className=" m-auto w-full h-full">
        {" "}
        <h2
          data-aos="fade-right"
          className="titulos mt-5 p-3  text-center   font-semi-bold "
        >
          Contactanos
        </h2>
        <p className="subtitulo w-8/12 m-auto  text-center max-lg:w-10/12">
          Envianos un mensaje por nuestro medio de consultas y nuestros
          profesionales se contactaran a la brevedad{" "}
        </p>
        <div
          data-aos="fade-left"
          className=" p-2 w-10/12  mt-9 m-auto h-auto flex items-center  max-md:block max-lg:w-full max-md:w-11/12"
        >
          <div className=" w-full m-auto flex justify-center items-center max-md:grid">
            <div className="w-auto h-[500px]  flex  rounded-2xl justify-center  shadow-xl max-lg:h-[450px] max-md:w-full max-md:h-auto max-md:ml-0 ">
              <div className="  flex flex-col justify-start mt-10  text-white  absolute max-lg:h-auto ">
                <p className="mt-10 text-center texto-decorado text-5xl max-lg:text-3xl">
                  OPTICA DIVISAR
                </p>
              </div>

              <Image
                src={fondoForm}
                width={0}
                height={0}
                alt="logo"
                className="w-full  rounded-l-xl max-md:rounded-xl "
              />
            </div>
            <form
              action="https://formsubmit.co/6819d5d809113ac69d06923fbe39a291"
              method="POST"
              className="py-4 text-sm w-4/12 bg-gradient-to-r from-gray-400 to-gray-700 p-3 rounded-lg shadow-xl  max-md:text-md max-md:w-11/12 max-md:m-auto max-md:mt-[-60px] "
            >
              <div className="m-auto rounded-md w-[40%] h-auto ">
                <Image
                  src={logoDivisar}
                  width={0}
                  height={0}
                  alt="logo"
                  className="w-full h-auto"
                />
              </div>
              <input
                className="mt-7 w-full p-2 border-2 shadow-xl rounded-lg  max-sm:w-full "
                type="text"
                placeholder="Nombre"
                name="Nombre"
                required
              />
              <input
                className="w-full mt-5 p-2 rounded-lg  shadow-lg"
                type="email"
                placeholder="Email"
                name="email"
                required
              />

              <input
                className="w-full mt-5 p-2 rounded-lg  shadow-lg "
                type="text"
                placeholder="Asunto"
                name="Asunto"
                required
              />
              <textarea
                className="w-full mt-5  p-2  rounded-lg shadow-2xl lg "
                type="text"
                placeholder="Mensaje"
                name="mensaje"
                required
                rows={3}
              />
              <input
                className="w-full mt-3 p-2 text-gray-800"
                type="file"
                accept="image/*, text/*"
                placeholder="Archivo"
                name="archivo"
              />
              <div className="w-full  flex justify-center">
                <input
                  className="mt-5 inline-flex h-10 font-normal items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded bg-yellow-500 px-5 text-md  tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-yellow-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                  type="submit"
                  value="Enviar mensage"
                />
                <input type="hidden" name="_captcha" value="false" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" mt-24 w-full h-auto max-md:mt-24 ">
        <hr className="border-2  border-white w-full" />
        <h2
          data-aos="fade-right"
          className="titulos mt-5 p-3  text-center text-5xl   font-semi-bold "
        >
          Nuestras sucursales
        </h2>
        {/* <div className="w-10/12 mt-12 m-auto flex  items-center justify-around border-t-2 py-7 border-yellow-400 max-lg:w-11/12  max-lg:grid max-md:p-0 max-lg:mt-12 max-lg:border-none bg-white"> */}

        <div
          data-aos="fade-left"
          className="bg-slate-200  rounded-lg py-6 shadow-lg shadow-slate-400  mt-20 w-10/12 flex max-lg:shadow-none max-lg:bg-white justify-between items-center m-auto max-lg:flex-col max-lg:mt-10 max-md:py-3"
        >
          <div className=" bg-white w-5/12 shadow-md   m-auto rounded-lg px-11 text-start text-black/80 max-lg:shadow-slate-400 max-lg:w-full max-md:px-3 max-lg:text-center">
            <div className=" text-black/70  w-full mt-10 border-b border-white  max-lg:w-full">
              <p className="text-2xl font-semibold max-md:text-xl">
                Sucursal Centro
              </p>
              <p className="   mt-5 text-xl block max-sm:mt-2 max-md:text-lg">
                Dirección: Humberto primo 543
              </p>
              <p className="  mt-5 text-xl block max-sm:mt-2 max-md:text-lg">
                Telefono: 351 5957338
              </p>
            </div>
            <div className="text-black/70  w-full  mt-10 border-b border-white    max-lg:w-full">
              <p className="text-2xl font-semibold max-md:text-xl">
                Sucursal Alta Cordoba
              </p>
              <p className=" mt-5 text-xl block max-sm:mt-2 max-md:text-lg">
                Dirección: Juan A. Sarachaga 742
              </p>
              <p className=" mt-5 text-xl block max-sm:mt-2 max-md:text-lg">
                Telefono: 351 5161455
              </p>
            </div>
            <div className="text-black/70 w-full   mt-10    max-lg:w-full">
              <p className="text-2xl font-semibold max-md:text-xl">
                Sucursal Villa Allende
              </p>
              <p className=" mt-5 text-xl block max-sm:mt-2 max-md:text-lg">
                Dirección: Río de Janeiro 137 local 8
              </p>
              <p className=" mt-5 mb-7 text-xl block border-b border-white max-sm:mt-2 max-md:text-lg">
                Telefono: 351 5645424
              </p>
            </div>
          </div>
          <div className="w-5/12 m-auto  flex justify-center max-lg:mt-11 max-lg:w-full ">
            <Location />
          </div>
        </div>
        <div className="mt-40 max-lg:mt-28">
          <Instagram />
        </div>
      </div>
      <div className="  flex justify-center items-center">
        <Whatsap />
      </div>

      {/* </div> */}
    </div>
  );
};

export default Contact;

{
}
