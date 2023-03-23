import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
        <Header />
        <Outlet />
    </>
  );
};

export default App;
