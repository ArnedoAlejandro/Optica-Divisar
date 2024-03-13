"use client";
import Solution from "../Solution";

import Whatsap from "../Whatsap";
import Slider from "./Slider";
import "aos/dist/aos.css";
import Instagram from "../Instagram";
import Marcas from "./Marcas";
import Reparacion from "./Reparacion";
import Abaout from "./Abaout";
import ProductosHome from "./ProductosHome";

const Content = () => {
  return (
    <section className="w-full h-auto m-auto">
      <Solution />
      <Slider />
      <Marcas />
      <ProductosHome />
      <Reparacion />
      <Abaout />
      <Instagram />
      <div className=" w-auto h-auto flex justify-center items-center">
        <Whatsap />
      </div>
    </section>
  );
};

export default Content;
