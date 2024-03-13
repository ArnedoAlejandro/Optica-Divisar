import React from "react";
import Instagram from "../Instagram";
import Whatsap from "../Whatsap";

const Policy = () => {
  return (
    <div className=" m-auto">
      {" "}
      <h1
        data-aos="fade-right"
        className="titulos mt-5 p-3  text-center   font-semi-bold "
      >
        Nuestra politica de trabajo
      </h1>
      <div className="w-10/12 mt-9   p-4 rounded-lg  max-lg:w-11/12 m-auto">
        <h2 className="text-4xl text-slate-800">Políticas de Calidad</h2>
        <p className="text-xl text-slate-600 mt-5">
          En Optica Divisar, nuestro mayor orgullo es poder servir a nuestros
          clientes con honestidad y dedicación. Nos esforzamos por ofrecer
          productos y servicios de la más alta calidad, con la humildad de
          reconocer que siempre hay espacio para mejorar.
        </p>
        <p className="text-xl text-slate-600 mt-2">
          {" "}
          Entendemos que cada interacción con nuestros clientes es una
          oportunidad para aprender y crecer.{" "}
        </p>
        <p className="text-xl text-slate-600 mt-2">
          Por ello, nos comprometemos a escuchar activamente sus necesidades y
          preocupaciones, y a trabajar incansablemente para superar sus
          expectativas. Reconocemos la importancia de nuestro equipo humano en
          la consecución de nuestros objetivos.
        </p>
        <p className="text-xl text-slate-600 mt-2">
          {" "}
          Por eso, valoramos y apreciamos a cada uno de nuestros colaboradores,
          y nos comprometemos a brindarles las herramientas y el apoyo necesario
          para que puedan desempeñarse al máximo de sus capacidades.
        </p>
        <p className="text-xl text-slate-600 mt-2">
          {" "}
          En Optica Divisar, la calidad no es simplemente un objetivo a
          alcanzar, es un compromiso diario que asumimos con humildad y
          gratitud.
        </p>
        <p className="text-xl text-slate-600 mt-2">
          Nos esforzamos por comunicar, entender, aplicar y mantener los más
          altos estándares de calidad en todas nuestras operaciones, asegurando
          así la satisfacción de nuestros clientes y el éxito a largo plazo de
          nuestra empresa.
        </p>
      </div>
      <h3
        data-aos="fade-right"
        className="titulos mt-20 p-3  text-center   font-semi-bold "
      >
        Información y concejos
      </h3>
      <div className="mt-16 w-9/12 m-auto flex  gap-24 max-md:w-11/12 max-lg:grid max-lg:gap-12">
        {/* ------------------------------------------LINEA DE TIEMPO-------------------------------- */}
        <div className=" w-1/2 max-lg:w-full">
          {" "}
          <h3>
            {" "}
            <div className=" text-center flex flex-col flex-1 gap-4">
              <h4 className="font-medium  text-2xl">
                Factores a Tener en Cuenta al Limpiar Tus Lentes:
              </h4>
            </div>
          </h3>
          <ul
            aria-label="Changelog feed"
            role="feed"
            className="relative mt-5 flex flex-col  gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
          >
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-yellow-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-yellow-500">
                  Utiliza los Productos Correctos
                </h4>
                <p className="cards text-slate-500">
                  Opta por soluciones limpiadoras especialmente diseñadas para
                  lentes, ya sea en forma de aerosol o líquido. Evita usar
                  productos como alcohol, amoníaco o limpiadores domésticos, ya
                  que pueden dañar los recubrimientos de tus lentes y causar
                  irritación ocular.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-yellow-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-yellow-500">
                  Usa un Paño de Microfibra:
                </h4>
                <p className="cards text-slate-500">
                  Los paños de microfibra son suaves y no abrasivos, lo que los
                  hace ideales para limpiar lentes sin rayarlas. Asegúrate de
                  que estén limpios y libres de partículas de suciedad antes de
                  usarlos.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-yellow-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-yellow-500">
                  Enjuaga con Agua:
                </h4>
                <p className="cards text-slate-500">
                  Antes de limpiar tus lentes, enjuágalas con agua tibia para
                  eliminar partículas de suciedad y polvo que podrían rayar la
                  superficie durante el proceso de limpieza.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-yellow-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-yellow-500">
                  Sigue las Instrucciones del Fabricante:
                </h4>
                <p className="cards text-slate-500">
                  Si tus lentes tienen algún tipo de recubrimiento especial o
                  tratamiento, sigue las instrucciones específicas
                  proporcionadas por el fabricante para evitar daños.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* -------------------------------------------------------------------------------- NO DEBES HACER -------------------------------------- */}
        <div className=" w-1/2 max-lg:w-full">
          {" "}
          <h3>
            {" "}
            <div className=" text-center flex flex-col flex-1 gap-4">
              <h4 className="font-medium  text-2xl">
                Lo que NO Debes Hacer al Limpiar Tus Lentes:
              </h4>
            </div>
          </h3>
          <ul
            aria-label="Changelog feed"
            role="feed"
            className="relative mt-5 flex flex-col  gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
          >
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-red-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-red-500">
                  Utiliza los Productos Correctos
                </h4>
                <p className="cards text-slate-500">
                  Opta por soluciones limpiadoras especialmente diseñadas para
                  lentes, ya sea en forma de aerosol o líquido. Evita usar
                  productos como alcohol, amoníaco o limpiadores domésticos, ya
                  que pueden dañar los recubrimientos de tus lentes y causar
                  irritación ocular.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-red-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-red-500">
                  Usa un Paño de Microfibra:
                </h4>
                <p className="cards text-slate-500">
                  Los paños de microfibra son suaves y no abrasivos, lo que los
                  hace ideales para limpiar lentes sin rayarlas. Asegúrate de
                  que estén limpios y libres de partículas de suciedad antes de
                  usarlos.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-red-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-red-500">
                  Enjuaga con Agua:
                </h4>
                <p className="cards text-slate-500">
                  Antes de limpiar tus lentes, enjuágalas con agua tibia para
                  eliminar partículas de suciedad y polvo que podrían rayar la
                  superficie durante el proceso de limpieza.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-red-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-red-500">
                  Sigue las Instrucciones del Fabricante:
                </h4>
                <p className="cards text-slate-500">
                  Si tus lentes tienen algún tipo de recubrimiento especial o
                  tratamiento, sigue las instrucciones específicas
                  proporcionadas por el fabricante para evitar daños.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- LUZ AZUL ----------------------------------------- */}
      <div className=" flex mt-14 w-10/12 bg-slate-200 rounded-lg shadow-lg shadow-slate-300 m-auto max-lg:grid max-lg:w-11/12 max-md:bg-white max-md:shadow-none">
        <div className="w-1/2 bg-yellow-200 px-8 flex items-center rounded-l-lg max-lg:rounded-lg max-lg:px-3 max-lg:w-full max-lg:py-4 max-md:shadow-lg max-md:shadow-slate-300">
          <div className="h-auto ">
            <h4 className="font-medium  text-3xl">
              {" "}
              ¡Protejé tus ojos de la luz azul de las pantallas!
            </h4>
            <p className="mt-10 text-xl text-slate-700">¿Qué es la LUZ AZUL?</p>
            <p className="mt-10 text-xl text-slate-700">
              {" "}
              La luz azul también conocida como luz azul-violeta o luz visible
              de alta energía, es un color del espectro visible de luz que puede
              ser percibido por el ojo humano y cuyas longitudes de onda oscilan
              entre los 415 y los 455 nanómetros.
            </p>
            <p className="text-xl text-slate-700">
              {" "}
              Es emitida por las pantallas de los dispositivos digitales y de
              iluminación LED, los que pueden producir, entre otros síntomas:
              Enrojecimiento o sequedad ocular.
            </p>
            <p className=" text-xl text-slate-700">Insomnio.</p>
            <p className="text-xl text-slate-700">
              {" "}
              Fatiga visual y/o visión borrosa (aún en personas que
              habitualmente no necesitan corrección visual)
            </p>
          </div>
        </div>
        {/* -------------------------------------------------------------------------- BENEFICIOS ---------------------------------------------- */}
        <div className="w-1/2  m-auto  max-lg:w-full py-6 px-5 max-lg:py-3 max-lg:px-2 max-md:mt-7">
          <h4 className="font-medium  text-2xl  text-center">
            Algunos de los beneficios de utilizar Bloqueadores de Luz Azul son
          </h4>
          <div className="mt-11 grid grid-cols-2  gap-5 max-lg:w-full marker:m-auto max-md:grid-cols-1">
            {" "}
            <div className="overflow-hidden text-center bg-white rounded text-slate-50 shadow-md shadow-slate-300">
              <div className="p-3 ">
                <h4 className="tarjeta mb-4 text-xl font-medium text-slate-700">
                  Bloquean el 90% de la luz azul nociva
                </h4>
                <p className="cards">
                  Filtran eficazmente la luz azul de dispositivos digitales,
                  reduciendo la fatiga ocular y protegiendo la salud visual.
                </p>
              </div>
            </div>{" "}
            <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-300">
              <div className="p-3 ">
                <h4 className="tarjeta mb-4 text-xl font-medium text-slate-700">
                  Se pueden hacer neutras o graduadas
                </h4>
                <p className="cards">
                  Adaptabilidad para ofrecer protección a cualquier usuario, con
                  o sin necesidad de corrección visual.
                </p>
              </div>
            </div>{" "}
            <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-300">
              <div className="p-3 ">
                <h4 className="tarjeta mb-4 text-xl font-medium text-slate-700">
                  No afectan la percepción del color
                </h4>
                <p className="cards">
                  Proporcionan protección sin distorsionar los colores naturales
                  del entorno.
                </p>
              </div>
            </div>{" "}
            <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-300">
              <div className="p-3 ">
                <h4 className="tarjeta mb-4 text-xl font-medium text-slate-700">
                  Tecnología filtrante en la masa de la lente
                </h4>
                <p className="cards">
                  Ofrece protección uniforme sin depender de tratamientos
                  superficiales.
                </p>
              </div>
            </div>
            <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-300">
              <div className="p-3 ">
                <h4 className="tarjeta mb-4 text-xl font-medium text-slate-700">
                  Aplicable a cualquier tipo de lente
                </h4>
                <p className="cards">
                  Disponible para una amplia variedad de lentes, incluyendo
                  oftálmicas, de contacto y de sol.
                </p>
              </div>
            </div>
            <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-300">
              <div className="p-3 ">
                <h4 className="tarjeta mb-4 text-xl font-medium text-slate-700">
                  Cuentan con corte UV en los 400 nm
                </h4>
                <p className="cards">
                  Además de proteger contra la luz azul, también bloquean los
                  rayos UV dañinos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whatsap />
      <Instagram />
    </div>
  );
};

export default Policy;
