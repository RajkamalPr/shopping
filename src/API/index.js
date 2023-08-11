import {
  products,
  product_colors,
  product_materials,
  product_featured,
  Auth_token,
} from "./const"

export const allProducts = async (setProduct) => {
  const headers = { Authorization: `Bearer ${Auth_token}` }
  await fetch(products, {
    headers,
  })
    .then((resp) => resp.json())
    .then((json) => setProduct(json))
}

export const productColors = async (setProductColor) => {
  const headers = { Authorization: `Bearer ${Auth_token}` }
  await fetch(product_colors, {
    headers,
  })
    .then((resp) => resp.json())
    .then((json) => setProductColor(json))
}

export const productMaterials = async (setProductMaterial) => {
  const headers = { Authorization: `Bearer ${Auth_token}` }
  await fetch(product_materials, {
    headers,
  })
    .then((resp) => resp.json())
    .then((json) => setProductMaterial(json))
}

export const productFeatured = async (getFeaturedProduct) => {
  const headers = { Authorization: `Bearer ${Auth_token}` }
  await fetch(product_featured, {
    headers,
  })
    .then((resp) => resp.json())
    .then((json) => getFeaturedProduct(json))
}
