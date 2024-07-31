import React from "react";
import Solution from "../../../components/Solution";
import Footer from "../../../components/Footer";
import Policy from "../../../components/information/Policy";
import Navbar from "../../../components/Layout/Navbar";

const Informacion = () => {
  return (
    <>
      <div>
        <Navbar />
        <Solution />
        <Policy />
        <Footer />
      </div>
    </>
  );
};

export default Informacion;
