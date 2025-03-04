import React, { useState } from "react";
import NavBar from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
//db
import products from './db/data'

const App = () => {

  const [setselectedCategory, setSetselectedCategory] = useState(null)

  // -------Input Filter--------
  const [query, setQuery] = useState('Nike')

  const handleInputChange = e => setQuery(e.target.value) 

  const filteredProducts = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  //Another method -> products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
  

  // -------Radio Filter--------

  

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
