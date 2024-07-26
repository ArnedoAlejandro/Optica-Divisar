"use client";
import { useState } from "react";
import Image from "next/image";
import { useGlobal } from "../../context/globalContext";
import "./../Sidebar.css";
import "aos/dist/aos.css";
import Whatsap from "../componentes reusables/Whatsap";
import Solution from "../Solution";
import ModalProduct from "./ModalProduct";
import Instagram from "../componentes reusables/Instagram";

// import carrito from "../../public/carrito.gif";

function ProductosNew() {
  const { modalOpen, handleOpenModal, products } = useGlobal();
  const [product, setProduct] = useState("");

  const dataModalProduct = (product) => {
    setProduct(product);
    handleOpenModal();
  };

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
          {!modalOpen ? null : <ModalProduct product={product} />}

          {/* DIV CONTENEDOR DE LOS PRODUCTO */}
          <div className="m-auto w-full grid grid-cols-3 gap-11 content-between max-lg:grid-cols-3 max-md:grid-cols-2 max-lg:gap-6">
            {/* DIV CONTENEDOR DEL PRODUCTO */}

            {products.map((product) => (
              <div
                className="w-full flex flex-col items-start cursor-pointer transition-all duration-700 hover:bg-black/60 group rounded-xl relative"
                key={product.id}
                onClick={() => dataModalProduct(product)}
              >
                <div className="w-full h-[230px] max-md:h-[170px] relative">
                  <Image
                    src={product.img[0]}
                    className="imagenGradient w-full h-full rounded-t-lg transition-all duration-700 group-hover:opacity-70"
                    alt="productos imagen"
                  />
                  <div className="absolute inset-0 flex items-center justify-center hidden group-hover:flex ">
                    <button className="flex items-center gap-2 text-white text-3xl font-base justify-center py-2 px-5    mt-64 ">
                      <p>Ver producto</p>
                    </button>
                  </div>
                </div>

                <div className="w-full px-4 py-2">
                  <p className="text-slate-800 text-2xl">{product.marca}</p>
                  <div className="w-full flex justify-between items-center gap-7">
                    <p className="text-slate-600 text-xl max-md:ml:0">
                      {product.nombre}
                    </p>
                    <p className="text-2xl text-gray-500 font-medium">
                      ${product.precio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Vista instagram */}
      <Instagram />
      <Whatsap />
    </>
  );
}

export default ProductosNew;
