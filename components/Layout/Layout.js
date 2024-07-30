"use client";
import Link from "next/link";
import Image from "next/image";
import { useGlobal } from "../../context/globalContext";
import newLogo from "../../public/newLogo.png";
import carritoCompra from "../../public/carritoCompra.png";
const Layout = () => {
  const { handleHead, isToggleOpen, setIsToggleOpen } = useGlobal();

  return (
    <>
      <header className="fixed w-full border-b-1 bg-white/90 z-20 border-b border-slate-200 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="w-full h-20 relative  px-2 flex items-center  max-md:p-3">
          <nav
            aria-label="main navigation"
            className="w-full  px-3 flex h-[5.5rem] gap-5 items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <div className="min-w-[15vw] max-lg:w-auto  flex items-center ">
              <Link
                className=" flex  items-center gap-2 whitespace-nowrap py-5 text-xl focus:outline-none lg:flex-1"
                href="/"
              >
                <div className="h-auto  max-lg:h-16 flex text-3xl text-slate-500 font-semibold gap-3 items-center">
                  <Image
                    src={newLogo}
                    width={0}
                    height={0}
                    alt="logo"
                    className="w-16 h-auto"
                  />
                  <p className="w-auto  max-md:hidden max-md:w-0">
                    Optica Divisar
                  </p>
                </div>
              </Link>
            </div>
            <button
              className={`relative order-10 block h-10 w-10 mr-6 self-center lg:hidden max-md:mr-9 ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45"
                  : ""
              }`}
              onClick={handleHead}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute  text-xl m-auto top-0 left-0 z-[-1] h-[100vh] w-full justify-between overflow-hidden overflow-y-auto overscroll-contain  px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 max-md:text-lg lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible  lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm bg-white/90"
                  : "invisible opacity-0"
              }`}
            >
              <div className="w-[65vw]   flex justify-center   max-lg:flex-col gap-4 max-md:items-start">
                <li
                  onClick={() => setIsToggleOpen(false)}
                  role="none"
                  className="flex items-stretch"
                >
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="flex font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400 lg:px-8"
                    href="/"
                  >
                    <span>Inicio</span>
                  </Link>
                </li>
                <li
                  onClick={() => setIsToggleOpen(false)}
                  role="none"
                  className="flex items-stretch"
                >
                  <Link
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="flex font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400 lg:px-8"
                    href="/product"
                  >
                    <span>Productos</span>
                  </Link>
                </li>
                <li
                  onClick={() => setIsToggleOpen(false)}
                  role="none"
                  className="flex items-stretch"
                >
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="flex font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400 lg:px-8"
                    href="/contact"
                  >
                    <span>Contacto</span>
                  </Link>
                </li>
                <li
                  onClick={() => setIsToggleOpen(false)}
                  role="none"
                  className="w-[200px] items-center flex  max-md:w-auto max-lg:items-stretch"
                >
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="flex flex-col font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400 lg:px-8"
                    href="/buy"
                  >
                    <span className="w-full text-center flex-grow">
                      Como comprar
                    </span>
                  </Link>
                </li>
                <li
                  onClick={() => setIsToggleOpen(false)}
                  role="none"
                  className="flex items-stretch"
                >
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="flex font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400 lg:px-8"
                    href="/information"
                  >
                    <span>Información</span>
                  </Link>
                </li>
              </div>
              <div className=" min-w-[150px]  flex justify-end gap-4 items-center max-lg:justify-start max-lg:ml-[-10px] max-lg:mt-5">
                <button className="w-auto h-10 px-5 text-lg bg-yellow-300 font-semibold text-slate-700  rounded-full shadow-sm transform-all duration-700 hover:bg-yellow-400 max-lg:px-3 max-lg:shadow-sm max-lg:shadow-black/30 max-lg:bg-yellow-400 hover:text-slate-500">
                  Iniciar sesión
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Layout;
