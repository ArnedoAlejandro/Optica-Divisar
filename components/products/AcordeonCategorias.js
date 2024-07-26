"use client";
import { useGlobal } from "../../context/globalContext";

// import less from "../../../public/less.png";

const AcordeonCategorias = () => {
  const { itemCategoria, handleTogleActive, handleTogleActiveCategoria } =
    useGlobal();
  const categori = "categoria";

  const categoria = [
    { id: 1, categori: "Armazones" },
    { id: 2, categori: "Lentes de Sol" },
    { id: 3, categori: "Clip On" },
    { id: 4, categori: "Contacto" },
  ];

  return (
    <section>
      <div
        className={` h-auto m-auto   flex flex-col items-start justify-start w-full duration-700 group max-lg:w-full   ${
          itemCategoria ? "is-active " : ""
        }`}
      >
        <div className="ml-5 w-44  py-1 text-xl duration-700  cursor-pointer  transition-all ease-linear  max-lg:border-1  ">
          <div
            className=" border-b-2 border-slate-400 flex justify-between items-center p-2 gap-3 text-slate-700 transition-all ease-linear duration-300 hover:border-yellow-500 hover:text-yellow-500"
            onClick={() => handleTogleActive(categori)}
          >
            <p className="text-start w-full text-xl ">Categorias</p>
          </div>

          <div className=" mt-2 overflow-hidden  text-lg max-h-0  duration-700 group-[.is-active]:max-h-[400px] ">
            {categoria.map((tipe) => (
              <li
                onClick={() => console.log(tipe.id)}
                className="  px-3 py-2  text-slate-600 hover:text-yellow-400  max-lg:mt-4"
                key={tipe.id}
              >
                {tipe.categori}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcordeonCategorias;
