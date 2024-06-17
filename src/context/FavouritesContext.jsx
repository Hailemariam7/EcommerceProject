import { createContext, useState } from "react"

export const FavouritesContext = createContext()

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const toggleFavourite = (id) => {
    setFavourites((prevFavourites) =>
      prevFavourites.includes(id)
        ? prevFavourites.filter((favId) => favId !== id)
        : [...prevFavourites, id]
    )
  }

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}
