import Product from "./Product"

const ProductsList = ({ products }) => {
  return (
    <div className='product-list'>
      {products.map((product) => {
        if (!product) {
          console.error("Product is undefined:", product)
          return null
        }
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}

export default ProductsList
