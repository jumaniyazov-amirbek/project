import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logo from "../assets/logo-colored.png";
import my_cart from "../assets/my-cart.png";
import hamburger from "../assets/hamburger.svg";
import profil from "../assets/pirofil.png";
import BtnBurger from "./BtnBurger";
import Profile from "../components/headerfle/Profile";
import Message from "../components/headerfle/Message";
import Orders from "../components/headerfle/Orders";
import Product from "../components/headerfle/product";
export default function header() {
    return (
        <div>
            <div className="header-block-all">
                <div className="continer">
                    <div className="header-block">
                        <div className="header-logo-img">
                            <button className="header-block-logo">
                                <img
                                    className="hamburger"
                                    src={hamburger}
                                    alt=""
                                />
                            </button>
                            <button className="header-block-logo">
                                <img
                                    className="hamburger"
                                    src={hamburger}
                                    alt=""
                                />
                            </button>
                            <button className="header-block-logo">
                              <a href="app">  <img src={logo} alt="" /></a>
                            </button>
                        </div>
                        <div className="header-sorche-option-buton">
                            <div className="header-block-search">
                                <input placeholder="Search" type="text" />
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
                            <BrowserRouter>
                                <nav className="navlink">
                                    <Link to="/">Profile</Link>
                                    <Link to="/Message">Message</Link>
                                    <Link to="/Orders">Orders</Link>
                                    <Link to="/Product">Product</Link>
                                </nav>
                                <Routes>
                                    <Route path="/" element={<Profile />} />
                                    <Route path="/message" element={<Message />} />
                                    <Route path="/orders" element={<Orders />} />
                                    <Route path="/product" element={<Product />} />

                                </Routes>
                            </BrowserRouter>
                        </div>
                        <div className="buton-block">
                            <button>
                                <img src={my_cart} alt="" />
                            </button>
                            <button>
                                <img src={profil} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="header-block-1-all">
                    <div className="header-block-1-hamburger">
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

                                        <div className="header-block-1-link">
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
                                <input placeholder="Search" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="button-block-all">
                        <button>All category</button>
                        <button>Gadgets</button>
                        <button>Clocthes</button>
                        <button>Accessory</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
