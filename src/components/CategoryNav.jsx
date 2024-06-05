// src/CategoryNav.js
import React from "react"

const CategoryNav = ({ categories, selectedCategory, onCategoryClick }) => {
  return (
    <nav>
      {categories.map((categoryName, index) => (
        <button
          key={index}
          className={selectedCategory === categoryName ? "active" : ""}
          onClick={() => onCategoryClick(categoryName)}
        >
          {categoryName}
        </button>
      ))}
    </nav>
  )
}

export default CategoryNav
