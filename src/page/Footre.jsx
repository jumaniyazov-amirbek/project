import React from 'react'
import logo from '../assets/logo-colored.png'
import gropp from '../assets/Group 987.png'
import btn_1 from '../assets/btn-1.png'
import btn_2 from '../assets/btn-2.png'
export default function Footre() {
  return (
    <div className='Footre-block-all'>
    <div className="continer">
    <div className="Footre-block">
        <div className="Footre-block-1">
        <img className='Footre-block-1-img' src={logo} alt="" />
        <span>Best information about the company <br />
         gies here but now lorem ipsum is</span>
         <img className='gropp' src={gropp} alt="" />
        </div>
        <div className="Footre-block-1">
          <p>About</p>
          <span>About Us</span>
          <span>Find store</span>
          <span>Categories</span>
          <span>Categories</span>
          <span>Blogs</span>
        </div>
        <div className="Footre-block-1">
          <p>Partnership</p>
          <span>About Us</span>
          <span>Find store</span>
          <span>Categories</span>
          <span>Categories</span>
          <span>Blogs</span>
        </div>
        <div className="Footre-block-1">
          <p>Information</p>
          <span>Help Center</span>
          <span>Money Refund</span>
          <span>Shipping</span>
          <span>Contact us</span>
        </div>
        <div className="Footre-block-1">
          <p>For users</p>
          <span>Login</span>
          <span>Register</span>
          <span>Settings</span>
          <span>My Orders</span>
        </div>
        <div className="Footre-block-1">
          <p>Get app</p>
          <img src={btn_1} alt="" />
          <img src={btn_2} alt="" />
        </div>
      </div>
    </div>
<div className="FootreTheEnd">
  <p>© 2023 Ecommerce. </p>
  <select >
    <option>English</option>
  </select>
</div>
    </div>
  )
}
