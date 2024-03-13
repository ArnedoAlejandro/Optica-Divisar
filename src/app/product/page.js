import React from "react";

import Footer from "../../../components/Footer";

import Layout from "../../../components/Layout";
import Products from "../../../components/products/Products";
import ProductosNew from "../../../components/products/ProductosNew";

const Modelo = () => {
  return (
    <>
      <Layout />
      <Products />
      <ProductosNew />
      <Footer />
    </>
  );
};

export default Modelo;
