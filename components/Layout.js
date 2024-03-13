"use client";

import Link from "next/link";

import Image from "next/image";
import newLogo from "../public/newLogo.png";
import { useGlobal } from "../context/globalContext";

const Layout = () => {
  const { handleHead, isToggleOpen } = useGlobal();

  return (
    <>
      <header className="fixed border-b-1 bg-white/90 z-20 w-full border-b border-slate-200  shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="h-20 relative flex  items-center mx-auto w-full  lg:max-w-5xl xl:max-w-7xl max-lg:h-[72px] 2xl:max-w-[96rem] max-md:p-3">
          <nav
            aria-label="main navigation "
            className=" w-full px-3 flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <Link
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex   items-center  gap-2 whitespace-nowrap py-5 text-xl focus:outline-none lg:flex-1"
              href="/"
            >
              <div className="w-16  h-auto  max-lg:h-16 flex text-3xl text-slate-500  font-semibold gap-3 items-center ">
                <Image
                  src={newLogo}
                  width={0}
                  height={0}
                  alt="logo"
                  className="w-16 h-auto "
                />{" "}
                <p className="w-auto max-md:hidden  max-md:w-0">
                  Optica Divisar
                </p>
              </div>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={` relative order-10 block h-10 w-10 mr-6 self-center lg:hidden max-md:mr-9
                ${
                  isToggleOpen
                    ? " visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
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
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute text-xl top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 max-md:text-lg lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm "
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex  items-stretch ">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex  font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400 lg:px-8 "
                  href="/"
                >
                  <span>Inicio</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch ">
                <Link
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex  font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400  lg:px-8"
                  href="/product"
                >
                  <span>Productos</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex  font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400 lg:px-8"
                  href="/contact"
                >
                  <span>Contacto</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex  font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400  lg:px-8"
                  href="/buy"
                >
                  <span>Como comprar</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex  font-semibold items-center gap-2 py-4 transition-colors duration-300 hover:text-yellow-400  lg:px-8"
                  href="/information"
                >
                  <span>Información</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Layout;
