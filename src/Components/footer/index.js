import React from "react"
import {
  AmericanExpressLogo,
  DgcertLogo,
  Logo,
  MaestroLogo,
  MasterCardLogo,
  PaypalLogo,
  VisaLogo,
} from "../../assets/imgs"
import "./footer.css"

const Footer = () => (
  <div className='rightfit__footer section__padding'>
    <div className='rightfit__footer-logo'>
      <img src={Logo} alt='rightfit_logo' />
    </div>
    <div className='rightfit__footer-container'>
      <div className='rightfit__footer-left'>
        <p>Home</p>
        <p>All Products Media</p>
        <p>Featured Products</p>
        <p>Contact</p>
        <p>About Us</p>
      </div>
      <div className='rightfit__footer-middle'>
        <div className=''>
          <p>
            We are a registered E-Commerce and we support a variety of Local and
            International payment modes
          </p>
        </div>
        <div className=''>
          <div className='rightfit__footer-middle__img'>
            <img src={VisaLogo} alt='visa-logo' />
          </div>
          <div className='rightfit__footer-middle__img'>
            <img src={MasterCardLogo} alt='master-card-logo' />
          </div>
          <div className='rightfit__footer-middle__img'>
            <img src={MaestroLogo} alt='maestro-logo' />
          </div>
          <div className='rightfit__footer-middle__img'>
            <img src={AmericanExpressLogo} alt='AmericanExpressLogo' />
          </div>
          <div className='rightfit__footer-middle__img'>
            <img src={PaypalLogo} alt='paypal-logo' />
          </div>
        </div>
      </div>
      <div className='rightfit__footer-right'>
        <p>Website protected by</p>
        <img src={DgcertLogo} alt='digicert logo' />
      </div>
    </div>
  </div>
)

export default Footer
