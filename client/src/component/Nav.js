import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Nav() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div>
      <p onClick={toggleTheme} style={{ color: isDark ? "black" : "red" }}>
        click to theme
      </p>
    </div>
  );
}

export default Nav;
