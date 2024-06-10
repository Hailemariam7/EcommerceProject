import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import ProductDetail from "./views/ProductDetail"
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
