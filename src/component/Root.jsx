import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const Root = () => {
  const [darkMood, setDarkMode] = useState(false);
  console.log(darkMood);
  const handleDark = () => {
    setDarkMode(!darkMood);
  };
  return (
    <div>
      <Navbar handleDark={handleDark} darkMood={darkMood}></Navbar>
      <div className={`${darkMood? 'bg-gray-700': 'bg-base-100'}`}><Outlet darkMood={darkMood}></Outlet></div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
