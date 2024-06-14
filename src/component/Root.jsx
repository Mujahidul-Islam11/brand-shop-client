import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useDarkMode from "../hooks/useDarkMode";

const Root = () => {
  const {darkMode, handleDark} = useDarkMode();
  return (
    <div className={`${darkMode? "bg-gray-900": "bg-white"}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
