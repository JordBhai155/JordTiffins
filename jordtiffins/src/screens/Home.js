import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import Products from "../components/Products";
import Aboutus from "../components/Aboutus";
import Aboutcompany from "../components/Aboutcompany";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";


function Home() {
  const [display, setDisplay] = useState(Array(6).fill(false));

  const filterContentsRef = useRef(null);

  const toggle = (index) => {
    // var abc = document.getElementById("pt-1")
    // abc.style.display = "flex"
    // console.log(abc.style.display)
    // abc.className =
    // if (filterContentsRef.current) {
    //   filterContentsRef.current.style.display = display === "none" ? "flex" : "none";
    // }

    setDisplay((prevDisplay) => {
      const newDisplay = [...prevDisplay];
      newDisplay[index] = !newDisplay[index];
      // console.log(newDisplay)
      return newDisplay;
    });
  };
  const handleToggleClick = (index) => {
    toggle(index);
    console.log(display); // Log the updated state after toggling
  };
  return (
    <>
      <Navbar />
      <MainBanner image_path="/images/main_banner.jpg" />
      <Products
        toggle={handleToggleClick}
        stat={display}
        filterContentsRef={filterContentsRef}
      />
    <Aboutcompany/>
      <Aboutus />
      <Faqs/>
      <Footer/>
    </>
  );
}

export default Home;
