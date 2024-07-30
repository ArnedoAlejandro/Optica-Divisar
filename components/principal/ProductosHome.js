import Link from "next/link";
import Image from "next/image";
import armazonesNew from "../../public/armazonesNew.png";
import armazonesAmarillo from "../../public/armazones.png";
import lenteContacto from "../../public/lenteContacto.jpg";
import sol from "../../public/sol.png";
import consultas from "../../public/consultas.png";
import clipon from "../../public/clipon.jpg";

const ProductosHome = () => {
  return (
    <>
      <div className=" w-full  mt-10 py-16   ">
        <h2 className="titulos mt-5 p-3  text-center   font-semi-bold ">
          Productos
        </h2>
        <div
          data-aos="zoom-in"
          className="  w-8/12 mt-14 m-auto  grid grid-cols-3  place-items-stretch  gap-11 max-lg:grid-cols-2 max-md:w-10/12 max-sm:grid-cols-1 "
        >
          <Link href="">
            <div className="flex-col bg-white justify-center text-black/80   w-full h-[385px] rounded-lg shadow-md   shadow-slate-400 text-yellow/70 font-bold items-center ease-in duration-500  ">
              <div className=" w-full   text-3xl  rounded-t-lg h-auto text-center justify-start">
                <h3 className="max-md:text-2xl">Lentes de sol</h3>
              </div>
              <div className="w-full h-[321px] overflow-hidden ">
                <Image
                  src={sol}
                  className="imagenGradient  w-full h-full  transition-transform ease-linear transform duration-300 hover:scale-105   hover:grayscale"
                  alt="Imagen del sol"
                />
              </div>
              <div className="w-full pb-10     rounded-b-lg h-auto text-center ">
                <p className="text-lg  ">Haga click</p>
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="flex-col bg-white justify-center text-black/80   w-full h-[385px] rounded-lg shadow-md   shadow-slate-400 text-yellow/70 font-bold items-center ease-in duration-500  ">
              <div className=" w-full   text-3xl rounded-t-lg h-auto text-center justify-start">
                <h3 className="">Armazones</h3>
              </div>
              <div className=" w-full h-[321px] overflow-hidden ">
                <Image
                  src={armazonesNew}
                  className="imagenGradient  w-full h-full  transition-transform ease-linear transform duration-300 hover:scale-105   hover:grayscale"
                  alt="Imagen del sol"
                />
              </div>
              <div className="w-full    rounded-b-lg h-auto text-center ">
                <p className="text-lg ">Haga click</p>
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="flex-col bg-white justify-center text-black/80   w-full h-[385px] rounded-lg shadow-md   shadow-slate-400 text-yellow/70 font-bold items-center ease-in duration-500  ">
              <div className=" w-full   text-3xl rounded-t-lg h-auto text-center justify-start">
                <h3 className="max-md:text-2xl">Clip on</h3>
              </div>
              <div className="w-full h-[321px] overflow-hidden ">
                <Image
                  src={clipon}
                  className="imagenGradient  w-full h-full  transition-transform ease-linear transform duration-300 hover:scale-105   hover:grayscale"
                  alt="Imagen del sol"
                />
              </div>
              <div className="w-full pb-10    rounded-b-lg h-auto text-center ">
                <p className="text-lg  ">Haga click</p>
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="flex-col bg-white justify-center text-black/80   w-full h-[385px] rounded-lg shadow-md   shadow-slate-400 text-yellow/70 font-bold items-center ease-in duration-500  ">
              <div className=" w-full   text-3xl   rounded-t-lg h-auto text-center justify-start">
                <h3 className="">Lentes de contacto</h3>
              </div>
              <div className="w-full h-[321px] overflow-hidden ">
                <Image
                  src={lenteContacto}
                  className="imagenGradient  w-full h-full  transition-transform ease-linear transform duration-300 hover:scale-105   hover:grayscale"
                  alt="Imagen del sol"
                />
              </div>
              <div className="w-full    rounded-b-lg h-auto text-center ">
                <p className="text-lg  ">Haga click</p>
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="flex-col bg-white justify-center text-black/80   w-full h-[385px] rounded-lg shadow-md   shadow-slate-400 text-yellow/70 font-bold items-center ease-in duration-500  ">
              <div className=" w-full  text-3xl   rounded-t-lg h-auto text-center justify-start">
                <h3 className="">Consultas</h3>
              </div>
              <div className="w-full h-[321px] overflow-hidden ">
                <Image
                  src={consultas}
                  className="imagenGradient  w-full h-full  transition-transform ease-linear transform duration-300 hover:scale-105   hover:grayscale"
                  alt="Imagen del sol"
                />
              </div>
              <div className="w-full   rounded-b-lg h-auto text-center ">
                <p className="text-lg ">Haga click</p>
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="flex-col bg-white justify-center text-black/80   w-full h-[385px] rounded-lg shadow-md   shadow-slate-400 text-yellow/70 font-bold items-center ease-in duration-500  ">
              <div className=" w-full   text-3xl   rounded-t-lg h-auto text-center justify-start">
                <h3 className="">Presupuestos</h3>
              </div>
              <div className="w-full h-[321px] overflow-hidden ">
                <Image
                  src={armazonesAmarillo}
                  className="imagenGradient  w-full h-full  transition-transform ease-linear transform duration-300 hover:scale-105   hover:grayscale"
                  alt="Imagen del sol"
                />
              </div>
              <div className="w-full    rounded-b-lg h-auto text-center ">
                <p className="text-lg ">Haga click</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <hr className="mt-20 m-auto w-full border-3 border-yellow-400 " />{" "}
    </>
  );
};

export default ProductosHome;
