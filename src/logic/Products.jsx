import { useState, useEffect } from "react"

const useProducts = (selectedCategory) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
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
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory])

  return { products, loading, error }
}

export default useProducts
