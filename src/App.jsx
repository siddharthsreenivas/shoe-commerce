import React from "react";
import NavBar from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
