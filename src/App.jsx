import React, { useState } from "react"
import allCategories from "./fake-data/all-categories"
import allProducts from "./fake-data/all-products"
import CategoryNav from "./components/CategoryNav"
import ProductList from "./components/ProductsList"
import "./App.css"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? "" : categoryName
    )
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
        <CategoryNav
          categories={allCategories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App
