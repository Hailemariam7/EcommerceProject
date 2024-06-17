import { useState } from "react"
import useCategories from "../logic/useCategories"
import useProducts from "../logic/useProducts"
import CategoryNav from "../components/CategoryNav"
import ProductList from "../components/ProductsList"
import "../App.css"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories()
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useProducts(selectedCategory)

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
        {productsLoading ? (
          <div>Loading products...</div>
        ) : productsError ? (
          <div>Error: {productsError}</div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  )
}

export default Home
