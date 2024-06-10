import React from "react"
import { useNavigate } from "react-router-dom"

const ProductList = ({ products }) => {
  const navigate = useNavigate()

  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className='product-list'>
      {products.map((product) => (
        <div
          key={product.id}
          className='product'
          onClick={() => handleProductClick(product.id)}
        >
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default ProductList
