"use client";
import Footer from "../../../components/Footer";
import Layout from "../../../components/Layout/Layout";
import SideProducts from "../../../components/products/SideProducts";
import ProductosNew from "../../../components/products/ProductosNew";
import { useGlobal } from "../../../context/globalContext";

const Modelo = () => {
  const { modalOpen } = useGlobal();
  return (
    <>
      <Layout />
      {/* TODO: REalizar la verificacion si el modal se muestra que no se muestre el sideProductos */}
      {!modalOpen && <SideProducts />} <ProductosNew />
      <Footer />
    </>
  );
};

export default Modelo;
