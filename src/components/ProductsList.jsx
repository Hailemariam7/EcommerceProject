import React from "react"

const ProductList = ({ products }) => {
  return (
    <div className='product-list'>
      {products.map((product) => (
        <div key={product.id} className='product'>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default ProductList
