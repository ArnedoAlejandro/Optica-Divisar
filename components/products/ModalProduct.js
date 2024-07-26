"use client";
import { useGlobal } from "../../context/globalContext";
import Image from "next/image";
import SliderModal from "./SliderModal";
import carrito from "../../public/carrito.gif";
import { useEffect, useState } from "react";
import ModifiedSpiner from "../spiner/ModifiedSpiner";

const ModalProduct = ({ product }) => {
  const { modalOpen, handleCloseModal } = useGlobal();
  const [productsImg] = useState([product.img]);
  const [isLoading, setIsLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);

  const handleAddToCart = () => {
    setCantidad(cantidad + 1);
  };

  const handleRemoveFromCart = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div
      className={`bg-black/80 fixed z-10 inset-0 grid place-items-center ${
        modalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-70 pointer-events-none"
      } transition-opacity duration-300`}
    >
      {isLoading ? (
        <ModifiedSpiner />
      ) : (
        <>
          <div className="bg-white mt-10 flex justify-between items-center w-8/12 h-auto rounded-lg p-1 max-lg:w-6/12 max-md:w-9/12 max-md:mt-3 max-md:mr-[14%]">
            <div className="h-full w-1/2  flex justify-center items-center">
              <SliderModal productsImg={productsImg} />
            </div>
            <div className="w-1/2 flex flex-col ">
              <div className="w-full flex justify-end ">
                <button onClick={handleCloseModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full flex flex-col px-5">
                <p className=" text-2xl text-black/80">{product.nombre}</p>
                <p className=" text-xl text-black/80">{product.marca}</p>
                <p className=" text-md text-black/80">{product.descripcion}</p>
                {/* <p className="mt-3 text-3xl text-black/80">${product.precio}</p> */}
                <p className="mt-1 text-lg text-yellow-500">
                  Descripción completa en de las cuotas disponibles
                </p>
              </div>
              <div className="px-5 flex justify-start items-center gap-2 ">
                <div className="flex items-center gap-2 ">
                  <button
                    onClick={handleRemoveFromCart}
                    className="w-7 h-auto bg-yellow-400 rounded-full shadow-sm shadow-black/70 transform duration-500 hover:shadow-none hover:bg-yellow-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                  <p className=" text-yellow-500 py-1 px-2 rounded-md text-2xl text-black/80">
                    {cantidad}
                  </p>
                  <button
                    onClick={handleAddToCart}
                    className="w-7 h-auto bg-yellow-400 rounded-full shadow-sm shadow-black/70 transform duration-500 hover:shadow-none hover:bg-yellow-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>{" "}
                  </button>
                </div>
                <div>
                  {" "}
                  <p className="px-10 text-3xl text-black/80 ">
                    ${product.precio}
                  </p>
                </div>
              </div>
              <div className="px-5 ">
                <button className="w-auto py-2 px-3 bg-black flex justify-between  items-center gap-2 rounded-md transform duration-500 shadow-md shadow-black/30 hover:bg-black/70 hover:shadow-none">
                  <p className="text-yellow-200 text-lg">Comprar </p>{" "}
                  <Image src={carrito} alt="carrito" width={30} height={30} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ModalProduct;
