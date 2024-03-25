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

  const handleTogleActiveMarcas = () => {
    setItem(!item);
    // setItemCategoria(item !== itemCategoria ? !itemCategoria : itemCategoria);
  };
  const handleTogleActiveCategoria = () => {
    setItemCategoria(!itemCategoria);
    // setItemCategoria(item !== itemCategoria ? !itemCategoria : itemCategoria);
  };

  const handleTogleActive = (param) => {
    if (param === "marca") {
      setItem(!item);
      setItemCategoria(false);
    }
    if (param === "categoria") {
      setItemCategoria(!itemCategoria);
      setItem(false);
    }
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
      marca: "reef sadsadasdasdasd asdsadasd",
      categoria: "sol",
      modelo: "new",
      codigo: 123124,
      img: [clip, clip, clip],
    },
    {
      id: 2,
      marca: "reef",
      tipo: "sol",
      modelo: "newsadasd",
      codigo: 123124,
      img: [contact, clip, contact],
    },
    {
      id: 3,
      marca: "reef",
      categoria: "sol",
      modelo: "nsadsadsadsadew",
      codigo: 123124,
      img: [clip, contact, clip],
    },
    {
      id: 4,
      marca: "reef ",
      categoria: "sol",
      modelo: "nsadsadsadsadew",
      codigo: 123124,
      img: [clip, clip, clip],
    },
    {
      id: 5,
      marca: "reef",
      tcategoriaipo: "sol",
      modelo: "nsadsadsadsadew",
      codigo: 123124,
      img: [clip, clip, clip],
    },
    {
      id: 6,
      marca: "reef",
      categoria: "sol",
      modelo: "nsadsadsadsadew",
      codigo: 123124,
      img: [clip, clip, clip],
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
        setIsToggleOpen,
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

        // handleTogleActive,
        item,
        itemCategoria,

        //
        handleTogleActive,
        handleTogleActiveCategoria,
        handleTogleActiveMarcas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
export default GlobalProvider;
