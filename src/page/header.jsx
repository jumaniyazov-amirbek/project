import React from 'react'
import logo from '../assets/logo-colored.png'
import pirofil from '../assets/pirofil.png'
import sms from '../assets/sms.png'
import orders from '../assets/orders.png'
import my_cart from '../assets/my-cart.png'
export default function header() {
    return (

        <div className='header-block-all'>
            <div className="continer">
                <div className="header-block">

                    <div className="header-logo-img">
                        <button className="header-block-logo">
                            <img src={logo} alt="" />
                        </button>
                    </div>
                    <div className="header-sorche-option-buton">
                        <div className="header-block-search">
                            <input placeholder='Search' type="text" />
                        </div>
                        <div className="header-block-option">
                            <select>
                                <option>All category</option>
                            </select>
                        </div>
                        <div className="header-block-buton">
                            <button>Search</button>
                        </div>

                    </div>
                    <div className="header-block-buton-all">
                        <button>
                            <img src={pirofil} alt="" />
                            <p>Profile</p>
                        </button>
                        <button>
                            <img src={sms} alt="" />
                            <p>Message</p>
                        </button>
                        <button>
                            <img src={orders} alt="" />
                            <p>Orders</p>
                        </button>
                        <button>
                            <img src={my_cart} alt="" />
                            <p>My cart</p>
                        </button>




                    </div>
                </div>

            </div>
            <div className="header-block-1-all">
                <div className="continer">
                    <div className="header-block-1">
<div className="header-block-1-hamburger-link"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
