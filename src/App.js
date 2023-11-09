import { useState } from "react";
import React from "react";

import Navigations from "./Navigations/Nav";
import Recommend from "./Recommend/Recommend";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";

import './index.css'
//DATABASE
import products from "./db/Data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query,setQuery] = useState("");
//-----------------------------INPUT FILTER------------------------------------------------
const handleInputChange = event => {
  setQuery(event.target.value)
}

const filteredItems = products.filter(product => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1) 
  );
 //-----------------------------RADIO FILTER------------------------------------------------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }
 //-----------------------------BUTTONS FILTER------------------------------------------------
  const handleClick = event => {
     setSelectedCategory(event.target.value)
  }

  function filteredData(products,selected,query) {
    let filteredProducts = products;
    //Filtering Input Items
    if (query){
      filteredProducts = filteredItems;
    }
    //Selected Filter
    if (selected){
      filteredProducts = filteredProducts.filter(({category,company,size,newPrice,title}) => 
      category === selected ||
      company === selected ||
      newPrice === selected || 
      title === selected ||
      size === selected
      );
  }

  return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice}) => (
    <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
    />
    )
  );
}

const result = filteredData(products, selectedCategory, query)

  return ( 
  <>
  <Sidebar handleChange={handleChange} /> 
  <Navigations query={query} handleInputChange = {handleInputChange} />
  <Recommend handleClick={handleClick} />
  <Products result={result} />
  
  </>
  );
}
export default App;
