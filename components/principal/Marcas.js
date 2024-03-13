import Image from "next/image";
import tres from "../../public/tres.png";
import eliana from "../../public/eliana.png";
import aynotdead from "../../public/aynotdead.png";
import oreiro from "../../public/oreiro.png";
import paula from "../../public/paula.png";
import philippe from "../../public/philippe.png";
import reef from "../../public/reef.png";
import rusty from "../../public/rusty.png";
import valeria from "../../public/valeria.png";
import vulck from "../../public/vulck.png";
import mormai from "../../public/mormaii.png";

import wanama from "../../public/wanama.png";
import wrangler from "../../public/wrangler.png";
const Marcas = () => {
  return (
    <section className="w-10/12 m-auto">
      <div className="max-md:w-11/12 max-md:m-auto">
        <h2 className="titulos mt-5 p-3  text-center   font-semi-bold ">
          Nuestras marcas
        </h2>
        <p className="subtitulo  text-center    ">
          Contamos con una amplia cartillas de marcas disponibles{" "}
        </p>
      </div>
      <div className=" m-auto   flex justify-centrer  content-around items-center max-md:h-auto">
        <div
          data-aos="zoom-in"
          className="bg-black/80  shadow-2xl p-4 w-10/12 mt-10 m-auto rounded-xl  grid grid-cols-5  place-items-center   gap-5 max-lg:grid-cols-4 max-lg:gap-3  max-md:grid-cols-2  max-md:bg-white max-md:shadow-xl max-md:p-3 max-md:rounded-xl max-md:w-11/12"
        >
          <Image
            width={0}
            height={0}
            src={tres}
            className="w-[100%] border-2 border-yellow-400 shadow-lg  object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={eliana}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={valeria}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={oreiro}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={paula}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={philippe}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={reef}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={rusty}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={aynotdead}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-3 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={vulck}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={wrangler}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={wanama}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-1 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
          <Image
            width={0}
            height={0}
            src={mormai}
            className="w-[100%] border-2 border-yellow-400 shadow-lg object-contain aspect-[6/3]   rounded-lg p-3 bg-white max-md:aspect-[7/3] max-md:shadow-none max-md:border-yellow-400 max-md:border-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Marcas;
