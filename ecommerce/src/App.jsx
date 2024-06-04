import React, { useState } from "react"
import allCategories from "./fake-data/all-categories"
import allProducts from "./fake-data/all-products"
import "./App.css"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName)
  }

  const getCategoryName = (productCategory) => {
    return `FAKE: ${productCategory}`
  }

  const filteredProducts = selectedCategory
    ? allProducts.filter(
        (product) => getCategoryName(product.category) === selectedCategory
      )
    : allProducts

  return (
    <div className='app'>
      <div className='header'>
        <h1>Products</h1>
        <nav>
          {allCategories.map((categoryName, index) => (
            <button
              key={index}
              className={selectedCategory === categoryName ? "active" : ""}
              onClick={() => handleCategoryClick(categoryName)}
            >
              {categoryName}
            </button>
          ))}
        </nav>
      </div>
      <div className='product-list'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='product'>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
