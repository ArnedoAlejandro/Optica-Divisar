import React from "react";
import Layout from "../../../components/Layout/Layout";
import Solution from "../../../components/Solution";
import Information from "../../../components/preguntas/Information";
import Footer from "../../../components/Footer";

const Comprar = () => {
  return (
    <>
      <div className="m-auto w-full h-full">
        <Layout />
        <Solution />
        <Information />
        <Footer />
      </div>
    </>
  );
};

export default Comprar;
