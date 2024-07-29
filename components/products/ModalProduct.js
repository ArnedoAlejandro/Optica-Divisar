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
  const [total, setTotal] = useState(product.precio);

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);

  const totalProduct = (newCantidad) => {
    const newTotal = product.precio * newCantidad;
    setTotal(newTotal);
  };

  const handleAddToCart = () => {
    setCantidad((prevCantidad) => {
      const newCantidad = prevCantidad + 1;
      totalProduct(newCantidad);
      return newCantidad;
    });
  };
  const handleRemoveFromCart = () => {
    setCantidad((prevCantidad) => {
      if (prevCantidad > 1) {
        const newCantidad = prevCantidad - 1;
        totalProduct(newCantidad);
        return newCantidad;
      } else {
        return prevCantidad;
      }
    });
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
          <div className="bg-white mt-10 flex justify-center w-8/12 h-auto rounded-lg p-1 max-md:flex-col max-lg:w-9/12 max-lg:justify-end max-lg:mt-24 max-md:w-9/12  max-md:mr-[14%]">
            <div className="h-full w-1/2  flex justify-center items-center max-lg:w-full">
              <SliderModal productsImg={productsImg} />
            </div>

            <div className="w-1/2 pb-5 h-100vh flex flex-col  justify-between max-lg:w-full   ">
              {/* <div className=" w-full flex justify-end  z-20 max-lg:w-0">
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
              </div> */}

              <div className="w-full  flex flex-col gap-auto px-5">
                <p className=" text-2xl font-semibold text-slate-600">
                  {product.marca}
                </p>
                <p className=" text-lg text-slate-500 max-lg:text-sm">
                  {product.descripcion}
                </p>

                <p className="mt-1 text-xl  text-yellow-500 max-lg:text-sm">
                  Descripción completa en de las cuotas disponibles
                </p>
              </div>

              <div className="px-5 flex justify-between items-center gap-2 max-md:flex-col ">
                <div className="flex flex-col  max-md:w-full max-md:flex-row max-md:items-center max-md:justify-between  ">
                  <p className="text-xl text-start text-slate-500 max-lg:text-lg">
                    Cantidad
                  </p>

                  <div className="flex  items-center gap-2 ">
                    <button
                      onClick={handleRemoveFromCart}
                      className="w-7 h-auto bg-yellow-300 rounded-full border border-black/60 shadow-sm shadow-black/70 transform duration-500 hover:shadow-none hover:bg-yellow-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <p className=" text-yellow-400 py-1 px-2 rounded-md text-2xl text-black/80">
                      {cantidad}
                    </p>
                    <button
                      onClick={handleAddToCart}
                      className="w-7 h-auto bg-yellow-300 rounded-full border border-black/60 shadow-sm shadow-black/70 transform duration-500 hover:shadow-none hover:bg-yellow-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>{" "}
                    </button>
                  </div>
                </div>
                <div className="h-full  flex  items-end max-md:w-full max-md:justify-between max-lg:flex-col max-md:flex-row ">
                  {" "}
                  <p className=" text-xl  text-slate-500 max-lg:text-lg">
                    Total:
                  </p>
                  <p className=" px-5 text-3xl text-black/80 max-lg:text-2xl max-lg:px-0">
                    ${total}
                  </p>
                </div>
              </div>
              <div className="px-5 max-lg:mt-4   ">
                <button className="w-auto py-2 px-3 bg-black flex justify-between  items-center gap-2 rounded-md transform duration-500 shadow-md shadow-black/30 hover:bg-black/70 hover:shadow-none">
                  <p className="text-yellow-400 font-semibold text-lg">
                    Comprar{" "}
                  </p>{" "}
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
