"use client";
import AcordeonCategorias from "./AcordeonCategorias";
import AcordeonMarcas from "./AcordeonMarcas";
// import logodivisar from "../../public/newLogo.png";
// import Image from "next/image";
import { useGlobal } from "../../context/globalContext";

export default function SideBarProducts() {
  const { isSideNavOpen, changeButonSideBar, isToggleOpen, modalOpen } =
    useGlobal();

  return (
    <>
      {!isToggleOpen ? (
        <button
          title="Side navigation"
          type="button"
          className={`visible relative left-10 top-36 z-40 order-10 block self-center rounded  opacity-100 lg:hidden ${
            isSideNavOpen
              ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
              : ""
          }`}
          m
          aria-haspopup="menu"
          aria-label="Side navigation"
          aria-expanded={isSideNavOpen ? " true" : "false"}
          aria-controls="nav-menu-3"
          onClick={changeButonSideBar}
        >
          <div className=" bg-slate-700 absolute flex gap-2 items-center text-white top-1/2 left-1/2 w-auto px-5 py-2 rounded-full ml-7 shadow-md shadow-slate-400 -translate-x-1/2 -translate-y-1/2 transform max-lg:mt-20 max-lg:ml-14 max-md:mt-16 max-md:ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <p>Filtro</p>
          </div>
        </button>
      ) : (
        ""
      )}

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-3"
        aria-label="Side navigation"
        className={`mt-20  fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 max-lg:mt-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className="border-b border-slate-200 p-3 pb-6">
          <div className="relative">
            <input
              id="id-b13"
              type="text"
              name="id-b13s"
              placeholder="Search here"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-yellow-400 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </div>
        </div>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto 300"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3 ">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-1 text-slate-700 transition-colors  hover:text-yellow-500  aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center "></div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    <AcordeonMarcas />
                  </div>
                </a>
              </li>
              <li className="px-3 ">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-1 text-slate-700 transition-colors hover:text-yellow-500  aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center "></div>
                  <div className=" flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    <AcordeonCategorias />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <footer
          className={
            isSideNavOpen ? "" : "hidden  h-52 border-t  border-slate-200 "
          }
        >
          <a
            href="#"
            className="  flex justify-center items-center   rounded p-3  text-slate-900 transition-colors max-md:mt-[-50px] "
          >
            <div className="w-8/12 text-center flex justify-center items-center py-3  self-center bg-slate-800  gap-3 rounded-lg shadow-md shadow-slate-600 text-lg font-medium text-white transition-all ease-linear duration-150 hover:bg-slate-700">
              <button
                title="Side navigation"
                type="button"
                className=""
                aria-haspopup="menu"
                aria-label="Side navigation"
                aria-expanded={isSideNavOpen ? " true" : "false"}
                aria-controls="nav-menu-3"
                onClick={changeButonSideBar}
              >
                <p className=" flex gap-3 items-center">
                  Cerrar
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>
                </p>
              </button>
            </div>
          </a>
        </footer>
      </aside>
    </>
  );
}
