"use client";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Layout/Navbar";
import SideBarProducts from "../../../components/products/SideBarProducts";
import ProductosNew from "../../../components/products/ProductosNew";
import { useGlobal } from "../../../context/globalContext";

const Modelo = () => {
  const { modalOpen } = useGlobal();
  return (
    <>
      <Navbar />
      {/* TODO: REalizar la verificacion si el modal se muestra que no se muestre el sideProductos */}
      {!modalOpen && <SideBarProducts />} <ProductosNew />
      <Footer />
    </>
  );
};

export default Modelo;
