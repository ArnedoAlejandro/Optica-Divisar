"use client";
import { useState } from "react";
import Image from "next/image";
import { useGlobal } from "../../context/globalContext";
// import less from "../public/less.png";

const AcordeonMarcas = () => {
  const { item, handleTogleActive, handleTogleActiveMarcas } = useGlobal();
  const marca = "marca";

  const marcas = [
    { id: 1, marca: "Armazones" },
    { id: 2, marca: "Lentes de Sol" },
    { id: 3, marca: "Clip On" },
    { id: 4, marca: "Contacto" },
    { id: 5, marca: "Contacto" },
    { id: 6, marca: "Contacto" },
    { id: 7, marca: "Contacto" },
    { id: 8, marca: "Contacto" },
    { id: 9, marca: "Contacto" },
    { id: 10, marca: "Contacto" },
    { id: 11, marca: "Contacto" },
    { id: 12, marca: "Contacto" },
  ];

  return (
    <section>
      <div
        className={` h-auto m-auto  flex flex-col items-start justify-start w-full duration-700 group max-lg:w-full    ${
          item ? "is-active " : ""
        }`}
      >
        <div className="ml-5 w-44   py-1 text-xl duration-700  cursor-pointer  transition-all ease-linear  max-lg:border-1  ">
          <div
            className="border-b-2 border-slate-400 flex justify-between items-center p-2 gap-3 text-slate-700 transition-all ease-linear duration-300 hover:border-yellow-500 hover:text-yellow-500"
            onClick={() => handleTogleActive(marca)}
          >
            <p className="text-start w-full text-xl ">Marcas</p>
          </div>

          <div className=" mt-2 overflow-auto text-lg max-h-0  duration-700 group-[.is-active]:max-h-[400px] ">
            {marcas.map((tipe) => (
              <li
                onClick={() => console.log(tipe.id)}
                className="px-3  text-slate-600 hover:text-yellow-400  max-lg:mt-4 "
                key={tipe.id}
              >
                {tipe.marca}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcordeonMarcas;
