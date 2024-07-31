import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Solution from "../../../components/Solution";
import Information from "../../../components/preguntas/Information";
import Footer from "../../../components/Footer";

const Comprar = () => {
  return (
    <>
      <div className="m-auto w-full h-full">
        <Navbar />
        <Solution />
        <Information />
        <Footer />
      </div>
    </>
  );
};

export default Comprar;
