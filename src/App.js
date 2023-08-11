import "./App.css"
import {
  allProducts,
  productColors,
  productFeatured,
  productMaterials,
} from "./API"
import { useEffect, useState } from "react"
import Home from "./views/home"

function App() {
  const [products, setProducts] = useState([""])
  const [productColor, setProductColor] = useState([""])
  const [productMaterial, setProductMaterial] = useState([""])
  const [featuredProduct, setFeaturedProduct] = useState([""])
  useEffect(() => {
    allProducts(setProducts)
    productColors(setProductColor)
    productMaterials(setProductMaterial)
    productFeatured(setFeaturedProduct)
  }, [])

  return (
    <div className='App'>
      <Home
        allproduct={products.products}
        materials={productMaterial.material}
        colors={productColor.colors}
        featuredProduct={featuredProduct}
      />
    </div>
  )
}

export default App
