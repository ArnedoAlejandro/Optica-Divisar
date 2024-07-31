import React from "react";
import Layout from "../../../components/Layout/Navbar1";
import Solution from "../../../components/Solution";

import Footer from "../../../components/Footer";
import Policy from "../../../components/information/Policy";

const Informacion = () => {
  return (
    <>
      <div>
        <Layout />
        <Solution />
        <Policy />
        <Footer />
      </div>
    </>
  );
};

export default Informacion;
