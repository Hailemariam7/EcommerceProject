import React, { useState, useEffect } from "react"
import useCategories from "../logic/useCategories"
import useProducts from "../logic/useProducts"
import CategoryNav from "../components/CategoryNav"
import ProductsList from "../components/ProductsList"
import "../App.css"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [productsLoading, setProductsLoading] = useState(true)

  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories()

  const { products, error: productsError } = useProducts(selectedCategory)

  useEffect(() => {
    setProductsLoading(true)
  }, [selectedCategory])

  useEffect(() => {
    if (products.length > 0 || productsError) {
      setProductsLoading(false)
    }
  }, [products, productsError])

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? "" : categoryName
    )
  }

  return (
    <div className='home'>
      <div className='header'>
        <h1>Products</h1>
        {categoriesLoading ? (
          <div>Loading categories...</div>
        ) : categoriesError ? (
          <div>Error: {categoriesError}</div>
        ) : (
          <CategoryNav
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
        )}
      </div>
      <div className='product-list-wrapper'>
        {productsLoading && <div>Loading products...</div>}
        {productsError && <div>Error: {productsError}</div>}
        {!productsLoading && !productsError && products.length > 0 && (
          <ProductsList products={products} />
        )}
        {!productsLoading && !productsError && products.length === 0 && (
          <div>No products found.</div>
        )}
      </div>
    </div>
  )
}

export default Home
