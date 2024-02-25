import React from 'react'
import logo from '../assets/logo-colored.png'
import pirofil from '../assets/pirofil.png'
import sms from '../assets/sms.png'
import orders from '../assets/orders.png'
import my_cart from '../assets/my-cart.png'
import hamburger from '../assets/hamburger.svg'
import BtnBurger from './BtnBurger'
export default function header() {
    return (

        <div className='header-block-all'>
            <div className="continer">
                <div className="header-block">
                    <div className="header-logo-img">

                        <button className="header-block-logo">
                            <img className='hamburger' src={hamburger} alt="" />
                        </button>
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
                    <div className="buton-block">
                        <button>
                            <img src={my_cart} alt="" />

                        </button>
                        <button>
                            <img src={pirofil} alt="" />

                        </button>
                    </div>
                </div>

            </div>
            <div className="header-block-1-all"> <div className="header-block-1-hamburger">
                <button>
                    <BtnBurger />
                </button>
            </div>
                <div className="continer">
                    <div className="header-block-1">
                        <div className="header-block-1-hamburger-link-option">
                            <div className="header-block-1-hamburger-link">

                                <div className="header-block-1-link">
                                    <a href=""> All category</a>
                                    <a href="">Hot offers</a>
                                    <a href="">Gift boxes</a>
                                    <a href="">Projects</a>
                                    <a href="">Menu item</a>
                                    <div className="header-block-1-option">
                                        <select>
                                            <option>Help</option>
                                            <option>Help</option>
                                        </select>
                                    </div>
                                </div>


                            </div>
                            <div className="header-block-1-option-block">
                                <div className="header-block-1-option">
                                    <select>
                                        <option>English, USD</option>
                                        <option>English, USD</option>
                                    </select>
                                </div>
                                <div className="header-block-1-option">
                                    <select>
                                        <option>Ship to</option>
                                        <option>Ship to</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="sorche-input">
                        <input placeholder='Search' type="text" />
                    </div>

                </div>
            </div>
            <div className="button-block-all">
                <button>
                    All category
                </button>
                <button>
                    Gadgets
                </button>
                <button>
                    Clocthes
                </button>
                <button>
                    Accessory
                </button>
            </div>
        </div>

    )
}
