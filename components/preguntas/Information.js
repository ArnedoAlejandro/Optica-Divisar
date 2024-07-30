import Whatsap from "../componentes reusables/Whatsap";
import AcordeonBuy from "./AcordeonBuy";
import Instagram from "../componentes reusables/Instagram";
import Testimonials from "./Testimonials";

const Information = () => {
  const buy = [{ question: "", answer: "" }];
  return (
    <>
      <div className=" h-full w-full mt-16 max-md:mt-3">
        <h1
          data-aos="fade-right"
          className="titulos mt-5 p-3  text-center   font-semi-bold "
        >
          Como comprar
        </h1>
      </div>{" "}
      <div className="w-11/12 m-auto flex gap-10 max-md:grid mt-12 ">
        <div className="w-1/2 m-auto divide-y divide-slate-200 rounded bg-white shadow-md shadow-slate-300 max-md:w-full">
          <details className="group p-4" open>
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              ¿Cómo puedo encontrar los lentes adecuados para mí?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac13 desc-ac13"
              >
                <title id="title-ac13">Open icon</title>
                <desc id="desc-ac13">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              En nuestro sitio web, puedes utilizar nuestras herramientas de
              búsqueda y filtros para encontrar lentes que se adapten a tus
              necesidades. También puedes obtener asesoramiento personalizado
              contactando a nuestro equipo de servicio al cliente.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              ¿Necesito una receta médica para comprar lentes?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac14 desc-ac14"
              >
                <title id="title-ac14">Open icon</title>
                <desc id="desc-ac14">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Para lentes recetados, sí, necesitas una receta válida de un
              oftalmólogo o optometrista. Para lentes de sol sin receta, no es
              necesario.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              ¿Cuáles son los tipos de lentes disponibles en su tienda?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac15 desc-ac15"
              >
                <title id="title-ac15">Open icon</title>
                <desc id="desc-ac15">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Ofrecemos una variedad de tipos de lentes, incluyendo lentes
              recetados para miopía, hipermetropía, astigmatismo y lectura, así
              como lentes de sol sin receta. También tenemos lentes de contacto
              disponibles.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              ¿Puedo comprar monturas y lentes por separado?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac16 desc-ac16"
              >
                <title id="title-ac16">Open icon</title>
                <desc id="desc-ac16">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Sí, puedes comprar monturas y lentes por separado. En la mayoría
              de los casos, también ofrecemos la opción de comprarlos como un
              conjunto completo.
            </p>
          </details>
        </div>

        {/*------------------------------------------------------------- Section -------------------------------------------------------- */}
        <div className="w-1/2 m-auto divide-y divide-slate-200 rounded bg-white shadow-md shadow-slate-300 max-md:w-full">
          <details className="group p-4" open>
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              ¿Qué tipos de monturas tienen disponibles?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac13 desc-ac13"
              >
                <title id="title-ac13">Open icon</title>
                <desc id="desc-ac13">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Tenemos una amplia gama de monturas que varían en estilo, forma y
              material. Puedes explorar nuestra colección en línea para
              encontrar las que se adapten a tu gusto y necesidades.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              ¿Ofrecen opciones de personalización para las lentes?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac14 desc-ac14"
              >
                <title id="title-ac14">Open icon</title>
                <desc id="desc-ac14">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Sí, ofrecemos opciones de personalización, como recubrimientos
              anti-reflectantes, anti-rasguños y anti-UV para las lentes. Puedes
              seleccionar estas opciones durante el proceso de compra.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              ¿Cuánto tiempo se tarda en recibir mi pedido?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac15 desc-ac15"
              >
                <title id="title-ac15">Open icon</title>
                <desc id="desc-ac15">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              El tiempo de entrega varía según tu ubicación y la disponibilidad
              del producto. Por lo general, los pedidos se entregan en [insertar
              plazo estimado] días hábiles.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              "¿Tienes alguna consulta?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac16 desc-ac16"
              >
                <title id="title-ac16">Open icon</title>
                <desc id="desc-ac16">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Puedes contactarnos por cualquiera de los medios que contamos, ya
              sea por WhatsApp, Instagram, Facebook o también puedes realizar la
              consulta en la sección de contactos completando el formulario.
              Estaremos encantados de responder todas tus consultas.
            </p>
          </details>
        </div>
      </div>
      <div className="divisorNew">
        <hr className="mt-24 w-full border-2 border-slate-400 " />
        {/* ------------------------------------------------------------- TESTIMONIALES ------------------------------------------------------- */}
        <h2
          data-aos="fade-right"
          className="titulos mt-20 text-xl p-3  text-center   font-semi-bold "
        >
          Testimoniales de nuestros clientes
        </h2>
        <Testimonials />
      </div>
      <hr className=" w-full border-2 border-slate-400 " />
      <div className="mb-16">
        <Instagram />
      </div>
      <div className=" flex justify-center items-center">
        {/* Aquí agregamos el componente de imagen fija */}
        <Whatsap />
      </div>
    </>
  );
};

export default Information;
