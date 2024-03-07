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
          <a href="#"><img className='Footre-block-1-img' src={logo} alt="" /></a>
            <span>Best information about the company <br />
              gies here but now lorem ipsum is</span>
            <img className='gropp' src={gropp} alt="" />
          </div>
          <div className="Footre-block-1">
            <p>About</p>
            <a href="#">About Us</a>
            <a href="#">Find store</a>
            <a href="#">Categories</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>
          <div className="Footre-block-1">
            <p>Partnership</p>
            <a href="#">About Us</a>
            <a href="#">Find store</a>
            <a href="#">Categories</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>
          <div className="Footre-block-1">
            <p>Information</p>
            <a href="#">Help Center</a>
            <a href="#">Money Refund</a>
            <a href="#">Shipping</a>
            <a href="#">Contact us</a>
          </div>
          <div className="Footre-block-1">
            <p>For users</p>
            <a href="#">Login</a>
            <a href="#">Register</a>
            <a href="#">Settings</a>
            <a href="#">My Orders</a>
          </div>
          <div className="Footre-block-1">
            <p>Get app</p>
            <a href="https://www.apple.com/app-store/"><img src={btn_1} alt="" /></a>
            <a href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1"><img src={btn_2} alt="" /></a>    
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
