import { useEffect, useState } from "react"
import Layout from "../../Components/layout"
import "./home.css"

const Home = ({ allproduct, materials, colors, featuredProduct }) => {
  const [checkProductId, setProductId] = useState("")
  const [navStatus, setStatus] = useState(localStorage.getItem("nav"))
  const productLength = allproduct !== undefined && allproduct.length
  const [materialId, setMaterialId] = useState("")
  const [colorId, setColorId] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 6
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records =
    allproduct !== undefined &&
    allproduct.length > 0 &&
    allproduct.slice(firstIndex, lastIndex)
  const npage = Math.ceil(productLength / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  const changePage = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
  }
  let materialName =
    materialId && materials.find((data) => data.id === materialId)
  let colorName = colorId && colors.find((data) => data.id === colorId)
  console.log("Material ", materialName)
  const findMaterialId = (id) => {
    setMaterialId(id)
    setColorId("")
  }
  const findColorId = (id) => {
    setColorId(id)
    setMaterialId("")
  }
  const filterData =
    materialId && colorId
      ? records.filter(
          (rec) => rec.materialId === materialId || rec.colorId === colorId
        )
      : records
  console.log("Featured ", featuredProduct)
  useEffect(() => {
    if (navStatus !== localStorage.getItem("nav")) {
      setStatus(localStorage.getItem("nav"))
    }
    console.log("fgg ", navStatus)
  }, [navStatus])
  return (
    <>
      <Layout>
        <div className='home-container'>
          <div className=''>
            <div className='header'>Filter</div>
            <div className='mt-2'>
              <ul>
                <li>Materials</li>
                <li>
                  <b>All</b>
                </li>
                {materials !== undefined &&
                  materials.length > 0 &&
                  materials.map((data) => (
                    <li
                      onClick={() => findMaterialId(data.id)}
                      className={data.id === materialId && "active-link"}
                    >
                      {data.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div className='mt-2'>
              <ul>
                <li>Color</li>
                <li>
                  <b>All</b>
                </li>
                {colors !== undefined &&
                  colors.length > 0 &&
                  colors.map((data) => (
                    <li
                      onClick={() => findColorId(data.id)}
                      className={data.id === colorId && "active-link"}
                    >
                      {data.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {materialId || colorId ? (
            <>
              <div className='products-list'>
                <div className='selective-filter'>
                  <div className='tags'>
                    {materialName ? (
                      <button className='tag-btn'>
                        {materialName.name} <span>x</span>
                      </button>
                    ) : (
                      colorName && (
                        <button className='tag-btn'>
                          {colorName.name} <span>x</span>
                        </button>
                      )
                    )}
                  </div>
                </div>
                {allproduct !== undefined &&
                  allproduct.length > 0 &&
                  records
                    .filter(
                      (rec) =>
                        rec.materialId === materialId || rec.colorId === colorId
                    )
                    .map((prodData) => (
                      <div className='box'>
                        <div
                          className='img-bg'
                          onMouseOver={() => setProductId(prodData.id)}
                          onMouseOut={() => setProductId("")}
                        >
                          {checkProductId !== "" &&
                            checkProductId === prodData.id && (
                              <span className='text-position'>Add to Cart</span>
                            )}
                          <img
                            src={prodData.image}
                            className='img'
                            alt={prodData.name}
                          />
                        </div>
                        <div className='detail-container'>
                          <div className='bold'>{prodData.name}</div>
                          <div className='material-color-info'>
                            <span>
                              {colors !== undefined &&
                                colors.length > 0 &&
                                colors.map(
                                  (colorData) =>
                                    colorData.id === prodData.colorId &&
                                    colorData.name
                                )}
                            </span>{" "}
                            <span>
                              {materials !== undefined &&
                                materials.length > 0 &&
                                materials.map(
                                  (materialData) =>
                                    materialData.id === prodData.materialId &&
                                    materialData.name
                                )}
                            </span>
                          </div>
                          <div className='amount'>INR {prodData.price}</div>
                        </div>
                      </div>
                    ))}
              </div>
            </>
          ) : (
            <>
              <div className='products-list'>
                {allproduct !== undefined &&
                  allproduct.length > 0 &&
                  records.map((prodData) => (
                    <div className='box'>
                      <span className='text-position'>
                        {checkProductId !== "" &&
                        checkProductId === prodData.id ? (
                          "Add to Cart"
                        ) : (
                          <span style={{ opacity: 0 }}>.</span>
                        )}
                      </span>
                      <div
                        className='img-bg'
                        onMouseOver={() => setProductId(prodData.id)}
                        onMouseOut={() => setProductId("")}
                      >
                        <img
                          src={prodData.image}
                          className='img'
                          // onClick={() => {
                          //   addToCart(prodData.id)
                          // }}
                        />
                      </div>
                      <div className='detail-container'>
                        <div className='bold'>{prodData.name}</div>
                        <div className='material-color-info'>
                          <span>
                            {colors !== undefined &&
                              colors.length > 0 &&
                              colors.map(
                                (colorData) =>
                                  colorData.id === prodData.colorId &&
                                  colorData.name
                              )}
                          </span>{" "}
                          <span>
                            {materials !== undefined &&
                              materials.length > 0 &&
                              materials.map(
                                (materialData) =>
                                  materialData.id === prodData.materialId &&
                                  materialData.name
                              )}
                          </span>
                        </div>
                        <div className='amount'>INR {prodData.price}</div>
                      </div>
                    </div>
                  ))}
                <div className='pagination'>
                  {numbers.map((n, i) => {
                    return (
                      <div
                        className={
                          currentPage === n ? "active-circle-btn" : "circle-btn"
                        }
                        onClick={(e) => changePage(e, n)}
                      >
                        {n}
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  )
}

export default Home
