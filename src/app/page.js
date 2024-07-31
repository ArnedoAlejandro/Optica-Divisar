"use client";
import Content from "../../components/principal/Content";
import Footer from "../../components/Footer";
import Navbar from "../../components/Layout/Navbar";
// import Layout2 from "../../components/Layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Layout2 /> */}
      <Content />
      <Footer />
    </>
  );
}
