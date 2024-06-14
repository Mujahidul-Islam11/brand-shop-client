import { useState } from "react";

const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  return {darkMode, handleDark}
}

export default useDarkMode