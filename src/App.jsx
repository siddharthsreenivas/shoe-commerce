import React, { useState } from "react";
import NavBar from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
//db
import products from './db/data'
import Card from "./components/Card";

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')

  // -------Input Filter--------
  const handleInputChange = e => setQuery(e.target.value) 

  const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  //Another method -> products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
  
  // -------Radio Filter--------
  const handleChange = e => setSelectedCategory(e.target.value)
  
  // -------Button Filter--------
  const handleClick = e => setSelectedCategory(e.target.value)

  function filteredData (products, selected, query) {
    let filteredProducts = products
    if(query){
      filteredProducts = filteredItems
    }

    if(selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      <Card key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      />
    ))

  }

  const result = filteredData(products, selectedCategory, query) 

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <NavBar query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
