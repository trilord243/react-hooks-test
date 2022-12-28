import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemContext";
function Header() {
  const [darkmode, setDarkmode] = useState(false);
  const handleClick = () => {
    return setDarkmode(!darkmode);
  };
  const color = useContext(ThemeContext);
  return (
    <>
      <div className={`${darkmode ? "bg-black" : ""} w-full `}>
        <h1 className={`text-${color}-400 `}>React Hooks</h1>
        <button type="button" onClick={handleClick}>
          DarkMode
        </button>
      </div>
    </>
  );
}

export default Header;
