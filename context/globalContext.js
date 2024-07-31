"use client";
import { createContext, useContext, useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import * as IoIcons from "react-icons/io";
import clip from "../public/clip.png";
import contact from "../public/contact.png";

// ++++++++++++++++++++++++++++++ Context de login ++++++++++++++++++++++++++++++++++++

export const GlobalContext = createContext();

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  return context;
};

// ++++++++++++++++++++++++++++++General Functions+++++++++++++++++++++++++++++++++++++++++/
const GlobalProvider = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isToggleSideBar, setToggleSideBar] = useState(false);
  // MODAL
  const [modalOpen, setModalOpen] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);
  const [item, setItem] = useState(false);
  const [itemCategoria, setItemCategoria] = useState(false);

  const handleTogleActive = () => {
    setItem(!item);
    setItemCategoria(item !== itemCategoria ? !itemCategoria : itemCategoria);
  };

  const changeButonSideBar = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const SidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text",
    },
    {
      title: "Reports",
      path: "/reports",
      icon: <IoIcons.IoIosPaper />,
      cName: "nav-text",
    },
    {
      title: "Products",
      path: "/products",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text",
    },
    {
      title: "Team",
      path: "/team",
      icon: <IoIcons.IoMdPeople />,
      cName: "nav-text",
    },
    {
      title: "Messages",
      path: "/messages",
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: "nav-text",
    },
    {
      title: "Support",
      path: "/support",
      icon: <IoIcons.IoMdHelpCircle />,
      cName: "nav-text",
    },
  ];

  const products = [
    {
      id: 1,
      nombre: "Solaris Vision",
      marca: "SunGuard",
      descripcion:
        "Lente con anti reflejo y protección UV400, perfecto para actividades al aire libre bajo el sol intenso.",
      precio: 45.0,
      categoria: "sol",
      genero: "unisex",
      material_armazon: "metal",
      forma_armazon: "aviador",
      color_armazon: "dorado",
      material_lente: "cristal",
      color_lente: "azul",
      ancho_lente: 58,
      ancho_puente: 15,
      largo_varilla: 145,
      stock: 20,
      SKU: 223124,
      img: [clip, clip, clip],
      calificaciones: [],
    },
    {
      id: 2,
      nombre: "Eclipse Shades",
      marca: "ShadeMasters",
      descripcion:
        "Lente polarizado con montura ligera y durable. Ideal para conducir y proteger tus ojos del resplandor.",
      precio: 35.0,
      categoria: "sol",
      genero: "unisex",
      material_armazon: "aluminio",
      forma_armazon: "cuadrado",
      color_armazon: "plateado",
      material_lente: "policarbonato",
      color_lente: "verde",
      ancho_lente: 55,
      ancho_puente: 17,
      largo_varilla: 140,
      stock: 15,
      SKU: 223125,
      img: [clip, clip, clip],
      calificaciones: [],
    },
    {
      id: 3,
      nombre: "Crystal Clear",
      marca: "Visionary",
      descripcion:
        "Gafas con lentes transparentes y tecnología anti luz azul, perfectas para largas jornadas frente a la pantalla.",
      precio: 50.0,
      categoria: "computadora",
      genero: "unisex",
      material_armazon: "plástico",
      forma_armazon: "rectangular",
      color_armazon: "negro mate",
      material_lente: "acrílico",
      color_lente: "transparente",
      ancho_lente: 53,
      ancho_puente: 16,
      largo_varilla: 142,
      stock: 25,
      SKU: 223126,
      img: [clip, clip, clip],
      calificaciones: [],
    },
    {
      id: 4,
      nombre: "Retro Round",
      marca: "VintageVue",
      descripcion:
        "Lentes redondos de estilo retro con montura gruesa, ideales para un look clásico y sofisticado.",
      precio: 30.0,
      categoria: "moda",
      genero: "femenino",
      material_armazon: "acetato",
      forma_armazon: "redondo",
      color_armazon: "carey",
      material_lente: "plástico",
      color_lente: "marrón",
      ancho_lente: 50,
      ancho_puente: 18,
      largo_varilla: 135,
      stock: 12,
      SKU: 223127,
      img: [clip, clip, clip],
      calificaciones: [],
    },
    {
      id: 5,
      nombre: "SportFlex",
      marca: "ActiveVision",
      descripcion:
        "Gafas deportivas con montura flexible y lentes resistentes a impactos, perfectas para actividades físicas intensas.",
      precio: 40.0,
      categoria: "deporte",
      genero: "masculino",
      material_armazon: "nylon",
      forma_armazon: "envolvente",
      color_armazon: "azul oscuro",
      material_lente: "policarbonato",
      color_lente: "gris oscuro",
      ancho_lente: 60,
      ancho_puente: 14,
      largo_varilla: 150,
      stock: 18,
      SKU: 223128,
      img: [clip, clip, clip],
      calificaciones: [],
    },
    {
      id: 6,
      nombre: "Urban Chic",
      marca: "MetroStyle",
      descripcion:
        "Lentes de sol urbanos con estilo moderno, lentes polarizados y protección UV, ideales para el día a día en la ciudad.",
      precio: 55.0,
      categoria: "moda",
      genero: "unisex",
      material_armazon: "titanio",
      forma_armazon: "ovalado",
      color_armazon: "negro brillante",
      material_lente: "cristal",
      color_lente: "negro",
      ancho_lente: 57,
      ancho_puente: 19,
      largo_varilla: 148,
      stock: 10,
      SKU: 223129,
      img: [clip, clip, clip],
      calificaciones: [],
    },
  ];

  const handleHead = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  const handleSide = () => {
    setToggleSideBar(!isToggleSideBar);
  };

  // MODAL PRODUCT
  const handleOpenModal = (product) => {
    setModalOpen(!modalOpen);
    setSelectProduct(product);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectProduct(null);
  };

  return (
    <GlobalContext.Provider
      value={{
        isToggleOpen,
        handleHead,
        isToggleSideBar,
        handleSide,
        setToggleSideBar,
        handleOpenModal,
        modalOpen,
        handleCloseModal,
        SidebarData,
        // Productos
        products,
        selectProduct,
        setSelectProduct,

        changeButonSideBar,
        isSideNavOpen,

        handleTogleActive,
        item,
        itemCategoria,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
export default GlobalProvider;
