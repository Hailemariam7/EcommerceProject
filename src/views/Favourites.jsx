import { useContext, useEffect, useState } from "react"
import { FavouritesContext } from "../context/FavouritesContext"
import Product from "../components/Product"

const Favourites = () => {
  const { favourites } = useContext(FavouritesContext)
  const [favouriteProducts, setFavouriteProducts] = useState([])

  useEffect(() => {
    const fetchFavourites = async () => {
      const products = await Promise.all(
        favourites.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        )
      )
      setFavouriteProducts(products)
    }

    fetchFavourites()
  }, [favourites])

  return (
    <div>
      <h1 className='favourites'>Favourites</h1>
      <div className='product-list'>
        {favouriteProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Favourites
