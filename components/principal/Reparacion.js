import Image from "next/image";
import reparacion from "../../public/reparacion.png";
import soldadura from "../../public/soldadura.png";
import ajuste from "../../public/ajuste.png";
import cambio from "../../public/cambio.png";

const Reparacion = () => {
  return (
    <section>
      {" "}
      <h2 className="titulos mt-5 p-3  text-center   font-semi-bold ">
        Servicios de reparación
      </h2>
      <div className="mt-16 w-9/12 m-auto flex  gap-10 max-md:w-11/12 max-lg:grid">
        <div className="grid grid-cols-2 w-1/2 gap-5 max-lg:w-full marker:m-auto max-md:grid-cols-1">
          {" "}
          <div className="overflow-hidden text-center bg-white rounded text-slate-50 shadow-md   shadow-slate-300">
            {/*  <!-- Icon --> */}
            <Image className="m-auto mt-7" alt="icono" src={cambio} />
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="subtitulo mb-4 text-xl font-medium text-slate-700">
                Reemplazo de lentes
              </h3>
              <p className="cards">
                Si tienes lentes rayadas o dañadas, podemos reemplazarlas con
                lentes de alta calidad.
              </p>
            </div>
          </div>{" "}
          <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-300">
            {/*  <!-- Icon --> */}
            <Image className="m-auto mt-7" alt="icono" src={ajuste} />
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="subtitulo mb-4 text-xl font-medium text-slate-700">
                Ajustes de monturas
              </h3>
              <p className="cards">
                Si tus gafas no se ajustan correctamente o están torcidas,
                nuestro equipo puede realizar los ajustes necesarios para que
                sean cómodas de nuevo.
              </p>
            </div>
          </div>{" "}
          <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-300">
            {/*  <!-- Icon --> */}

            <Image className="m-auto mt-7" alt="icono" src={soldadura} />

            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="subtitulo mb-4 text-xl font-medium text-slate-700">
                Soldadura de monturas
              </h3>
              <p className="cards">
                Si tienes un marco metálico que se ha roto o desprendido,
                ofrecemos servicios de soldadura para repararlos de manera
                segura y duradera.
              </p>
            </div>
          </div>{" "}
          <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-300">
            {/*  <!-- Icon --> */}
            <Image className="m-auto mt-7" alt="icono" src={reparacion} />

            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="subtitulo mb-4 text-xl font-medium text-slate-700">
                Reparación de bisagras
              </h3>
              <p className="cards">
                Las bisagras suelen ser una parte vulnerable de las monturas.
                Reparamos y reemplazamos bisagras dañadas para garantizar que
                tus gafas se mantengan en buen estado.
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------------------------LINEA DE TIEMPO-------------------------------- */}
        <div className=" w-1/2 max-lg:w-full">
          {" "}
          <h3>
            {" "}
            <div className=" text-center flex flex-col flex-1 gap-4">
              <h4 className="font-medium  text-2xl">
                Como es nuestro proceso de reparación te contamos a continuación
              </h4>
            </div>
          </h3>
          <ul
            aria-label="Changelog feed"
            role="feed"
            className="relative flex flex-col  gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
          >
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-yellow-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-yellow-500">
                  Evaluación
                </h4>
                <p className="cards text-slate-500">
                  Trae tus lentes o monturas a nuestro centro de reparación para
                  una evaluación gratuita. Nuestro equipo determinará el alcance
                  del daño y te proporcionará un presupuesto.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-yellow-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-yellow-500">
                  Reparación
                </h4>
                <p className="cards text-slate-500">
                  Una vez que apruebes el presupuesto, comenzaremos la
                  reparación. Usamos herramientas y técnicas de última
                  generación para garantizar un trabajo de alta calidad. nuevo.
                </p>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-3 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-yellow-500 before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-4">
                <h4 className="text-2xl font-medium  text-yellow-500">
                  Entrega
                </h4>
                <p className="cards text-slate-500">
                  Cuando tus lentes o marcos estén listos, te los entregaremos
                  en el plazo acordado. En Optica Divisar, estamos comprometidos
                  en brindarte soluciones de reparación de lentes y marcos que
                  sean asequibles y de alta calidad. No dudes en contactarnos
                  para obtener más información sobre nuestros servicios de
                  reparación o para programar una evaluación gratuita.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reparacion;
