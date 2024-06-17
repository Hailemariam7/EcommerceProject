import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./views/Home"
import ProductDetail from "./views/ProductDetail"
import Favourites from "./views/Favourites"
import { FavouritesProvider } from "./context/FavouritesContext"
import "./App.css"

const App = () => {
  return (
    <FavouritesProvider>
      <Router>
        <nav className='menu-bar'>
          <Link to='/'>Home</Link>
          <Link to='/favourites'>Favourites</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </Router>
    </FavouritesProvider>
  )
}

export default App
