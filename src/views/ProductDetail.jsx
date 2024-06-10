import React from "react"
import { useParams } from "react-router-dom"
import useProductDetail from "../logic/ProductDetail"
import "../ProductDetail.css"

const ProductDetail = () => {
  const { id } = useParams()
  const { product, loading, error } = useProductDetail(id)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!product) return null

  return (
    <div className='product-detail'>
      <h1>{product.title}</h1>
      <div className='detail'>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail
