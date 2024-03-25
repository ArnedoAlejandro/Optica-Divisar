"use client";

import { useGlobal } from "../../context/globalContext";
import SliderModal from "./SliderModal";

const ModalProduct = () => {
  const { modalOpen, handleCloseModal, selectProduct } = useGlobal();

  return (
    <div
      className={`bg-black/60  fixed z-10 inset-0 grid place-items-center   ${
        modalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-70 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div className="mt-10 grid place-items-center w-4/12 h-auto bg-white rounded-lg p-1 max-lg:w-6/12  max-md:w-9/12  max-md:mt-3 max-md:mr-[14%]">
        <div className="w-full  ">
          <SliderModal />
        </div>
        <div className="w-full py-2">
          <div className="w-10/12 mt-[-30px] text-start  m-auto ">
            <p className="text-2xl text-black/80 ">
              {selectProduct.marca} & {selectProduct.modelo}
            </p>

            <p className="text-lg text-black/80 ">
              Codigo: {selectProduct.codigo}
            </p>
          </div>

          <div className="m-auto w-full flex  text-lg justify-evenly gap-5 mt-5 max-md:text-md max-md:p-4 max-lg:mt-1">
            <a
              href=""
              className="h-auto w-1/3 bg-yellow-400  text-white   text-center py-2 rounded-md  font-semibold transition-colors ease-linear duration-200 hover:bg-yellow-300 max-md:w-10/12"
              onClick={handleCloseModal}
            >
              Consultar
            </a>
            <button
              className="h-auto w-1/3 bg-black  text-white  text-center py-2 rounded-md font-semibold transition-colors ease-linear duration-200 hover:bg-yellow-300 max-md:w-10/12"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
