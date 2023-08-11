import "../../assets/css/header.css"
import { MdOutlineShoppingCart } from "react-icons/md"
const Header = () => {
  const navChange = (data) => {
    localStorage.setItem("nav", JSON.stringify(data))
  }
  return (
    <header className='container'>
      <div className='nav'>
        <div className='logo'>
          <span className='gray'>right</span>
          <span className='white'>fit.com</span>
        </div>
        <div className='nav-links'>
          <div className='link' onClick={() => navChange("All Products")}>
            All Products
          </div>
          <div className='link' onClick={() => navChange("Featured Products")}>
            Featured Products
          </div>
          <div className='link' style={{ width: "auto" }}>
            <MdOutlineShoppingCart size={28} />
          </div>
          <div className='link' style={{ width: "auto" }}>
            0
          </div>
        </div>
      </div>
      <div className='content-block'>
        <div className='title'>Latest Styles</div>
        <div className='subtitle'>At Yestarday Prices</div>
        <button className='btn'>Browse All Styles</button>
      </div>
    </header>
  )
}

export default Header
