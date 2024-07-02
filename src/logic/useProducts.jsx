import { useState, useEffect } from "react"

const useProducts = (selectedCategory) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : "https://fakestoreapi.com/products"
        )
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        setError("Failed to fetch products.")
      }
    }

    fetchProducts()
  }, [selectedCategory])

  return { products, error }
}

export default useProducts
