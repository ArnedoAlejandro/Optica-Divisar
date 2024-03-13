"use client";
import React, { useState, useEffect } from "react";

import Solution from "../Solution";
import Image from "next/image";

import "./../Sidebar.css";
import AcordeonCategorias from "./AcordeonCategorias";
import AcordeonMarcas from "./AcordeonMarcas";
import Whatsap from "../Whatsap";
import ModalProduct from "./ModalProduct";
import { useGlobal } from "../../context/globalContext";
import "aos/dist/aos.css";

import Instagram from "../Instagram";

function ProductosNew() {
  const { modalOpen, handleOpenModal, products } = useGlobal();

  return (
    <>
      {" "}
      <Solution />
      <section className="w-11/12 m-auto max-lg:w-11/12 max-md:w-[97%]">
        <h1
          data-aos="fade-right"
          className="ml-[21%] titulos mt-5 p-3  text-center   font-semi-bold  max-lg:ml-[0%]"
        >
          Productos
        </h1>
        <div className=" mt-5 ml-[22%] w-[80%] flex justify-end  p-2  max-lg:w-full max-lg:m-auto max-lg:mt-20 max-lg:ml-0">
          {/* DIV CONTENEDOR MODAL */}
          <div className="mt-14">{!modalOpen ? null : <ModalProduct />}</div>
          {/* DIV CONTENEDOR DE LOS PRODUCTO */}
          <div className="m-auto w-full grid grid-cols-4 gap-5 content-between max-lg:grid-cols-3 max-md:grid-cols-2">
            {/* DIV CONTENEDOR DEL PRODUCTO */}

            {products.map((product) => (
              <div
                className="w-full border border-slate-200  rounded-lg flex flex-col  shadow-md shadow-slate-300 items-start bg-white/80 cursor-pointer"
                key={product.id}
                onClick={() => handleOpenModal(product)}
              >
                <div className="w-full h-[230px] max-md:h-[170px] ">
                  <Image
                    src={product.img[0]}
                    className="w-full h-full rounded-t-lg"
                    alt="productos imagen"
                  />
                </div>

                <div className="px-4 py-2 ">
                  <p className="subtitulo  max-md:ml:0  ">
                    {product.marca} & {product.modelo}
                  </p>

                  <p className="text-lg text-gray-500 font-medium  ">
                    Codigo: {product.codigo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Vista instagram */}
      <Instagram />
      <div className=" ">
        <Whatsap />
      </div>
    </>
  );
}

export default ProductosNew;
