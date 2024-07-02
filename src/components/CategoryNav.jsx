import useCategories from "../logic/useCategories"

const CategoryNav = ({ categories, selectedCategory, onCategoryClick }) => {
  /* const { categories, loading, error } = useCategories()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading categories, {error}</div> */
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
