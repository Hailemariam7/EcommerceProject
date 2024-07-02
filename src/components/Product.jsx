import { useNavigate } from "react-router-dom"
import React, { useContext } from "react"
import { FavouritesContext } from "../context/FavouritesContext"
import heartRegular from "../assets/heart-regular.svg"
import heartSolid from "../assets/heart-solid.svg"

const Product = ({ product }) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext)
  const isFavourite = favourites.includes(product.id)
  const navigate = useNavigate()

  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className='product' onClick={() => handleProductClick(product.id)}>
      <img
        src={isFavourite ? heartSolid : heartRegular}
        alt='favourite'
        className='heart-icon'
        onClick={(e) => {
          e.stopPropagation()
          toggleFavourite(product.id)
        }}
      />
      <img src={product.image} alt={product.title} className='product-img' />
      <h2>{product.title}</h2>
    </div>
  )
}

export default Product
