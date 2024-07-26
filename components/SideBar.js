// "use client";
// import React, { useState } from "react";
// import { useGlobal } from "../context/globalContext";
// import AcordeonMarcas from "./products/AcordeonMarcas";
// import AcordeonCategorias from "./products/AcordeonCategorias";

// export default function NavbarBasicPreview() {
//   const { isToggleSideBar, handleSide, isToggleOpen } = useGlobal();

//   const list = [
//     {
//       question: "Flexibilidad horaria",
//       answer:
//         "Nuestra plataforma está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los usuarios acceder a los contenidos de capacitación en el momento que mejor se ajuste a su agenda.",
//     },
//     {
//       question: "Certificación de prestigio",
//       answer:
//         "Los certificados expedidos por nuestra plataforma son otorgados por profesores altamente calificados y reconocidos en sus respectivas industrias. Esto garantiza que los usuarios obtengan una acreditación valiosa y respetada en el ámbito laboral.",
//     },
//   ];

//   return (
//     <>
//       <section>
//         <div
//           className={
//             isToggleOpen
//               ? "none"
//               : "h-[120vh] mt-0 rounded-br-3xl z-20 flex-col  bg-gradient-to-r from-gray-400 to-gray-700 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full max-lg:w-[100%]  max-lg:bg-blur-sm lg:after:hidden max-lg:h-0 max-lg:absolute  max-lg:top-20 "
//           }
//         >
//           <div className=" m-auto  flex-col max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
//             <nav
//               aria-label="main navigation"
//               className=" flex-col h-auto text-slate-700 "
//               role="navigation"
//             >
//               <button
//                 className={`block h-20  lg:hidden animate-fade-right
//                 ${isToggleSideBar ? "visible opacity-100  " : ""}
//               `}
//                 onClick={handleSide}
//                 aria-expanded={isToggleSideBar ? "true" : "false"}
//                 aria-label="Toggle navigation"
//               >
//                 <div
//                   className={
//                     !isToggleOpen
//                       ? "w-auto transform  h-auto border-2 border-white px-6 shadow-xl py-2 rounded-xl  bg-gradient-to-r from-black/90 to-black/60 text-white/90 "
//                       : "none"
//                   }
//                 >
//                   <span aria-hidden="true" className="text-xl text-center ">
//                     {!isToggleOpen ? "Filtro" : ""}
//                   </span>
//                 </div>
//               </button>
//               {/*      <!-- Navigation links --> */}
//               <div
//                 role="menubar"
//                 aria-label="Select page"
//                 className={`flex-col h-auto top-0 left-0 z-[-1]  m-auto overflow-hidden overflow-y-auto overscroll-contain  p-3 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:mt-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0  lg:opacity-100 ${
//                   isToggleSideBar
//                     ? "visible opacity-100 "
//                     : "invisible opacity-0 "
//                 }`}
//               >
//                 <AcordeonCategorias />
//                 <AcordeonMarcas />
//               </div>
//             </nav>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
