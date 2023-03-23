import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";

const App = () => {
const [theme, setTheme] = useState(false)
const toggleTheme =()=>{
    setTheme(!theme)
}

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </>
  );
};

export default App;
