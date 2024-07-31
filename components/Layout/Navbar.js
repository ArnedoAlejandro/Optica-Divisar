"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGlobal } from "../../context/globalContext";
import newLogo from "../../public/newLogo.png";
import carritoCompra from "../../public/carritoCompra.png";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Header --> */}
      <header className="fixed w-full border-b-1 bg-white/90 z-20 border-b border-slate-200 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 ">
          <nav
            aria-label="main navigation"
            className="flex h-[5.3rem]  items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              className=" flex  items-center gap-2 whitespace-nowrap py-5 text-xl focus:outline-none lg:flex-1"
              href="/"
            >
              <div className=" h-auto  max-lg:h-16 flex flex-col items-center text-3xl text-slate-500 font-semibold ">
                <Image
                  src={newLogo}
                  width={0}
                  height={0}
                  alt="logo"
                  className="w-16 h-auto m-auto"
                />
                <p className="w-auto text-lg  max-md:hidden max-md:w-0 max-md:h-0">
                  Optica Divisar
                </p>
              </div>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
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
              className={`absolute left-0 top-0 z-[-1] h-[150vh] w-full text-xl justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
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
              {/* Crear condicional de inicial sesion, cerrar sesion */}
              <button className="invisible  max-lg:visible ml-[-8px] mt-4 w-auto h-10 px-5 text-lg bg-yellow-300 font-semibold text-slate-700  rounded-full shadow-sm shadow-black/20 transition duration-700 ease-out hover:bg-yellow-400 max-lg:px-3 max-lg:shadow-sm max-lg:shadow-black/30 max-lg:bg-yellow-400 hover:text-slate-500  hover:shadow-none ">
                Iniciar sesión
              </button>
            </ul>
            {/*      <!-- Actions --> */}
            <div className="ml-auto flex items-center gap-5 justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0 max-lg:gap-3 max-lg:flex-row-reverse">
              {/* Generar condicional si el usuario esta dentro de su secion que se muestre el carro */}
              {/* Generar dinamicamente el numero que tiene en el carro de compras si tiene que se muestr si no no */}
              {/* <a
                href="#"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-yellow-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title description"
                  role="graphics-symbol"
                >
                  <title id="title">Cart Icon</title>
                  <desc id="description">Cart icon with items</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <span className="absolute -right-1.5 -top-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-green-500 px-1.5 text-sm text-white">
                  1<span className="sr-only"> new emails </span>
                </span>
              </a> */}
              <button className="w-auto h-10 px-5 text-lg bg-yellow-300 font-semibold text-slate-700  rounded-full shadow-sm shadow-black/20 transition duration-700 ease-out hover:bg-yellow-400 max-lg:px-3 max-lg:shadow-sm max-lg:shadow-black/30 max-lg:bg-yellow-400 hover:text-slate-500  hover:shadow-none max-lg:invisible">
                Iniciar sesión
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
}
