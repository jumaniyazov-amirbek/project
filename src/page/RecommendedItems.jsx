import React from 'react'
import clothes_1 from '../assets/clothes-1.png'
import clothes_2 from '../assets/clothes-2.png'
import clothes_3 from '../assets/clothes-3.png'
import clothes_4 from '../assets/clothes-4.png'
import clothes_5 from '../assets/clothes-5.png'
import clothes_6 from '../assets/clothes-6.png'
import clothes_7 from '../assets/clothes-7.png'
import clothes_8 from '../assets/clothes-8.png'
import clothes_10 from '../assets/clothes-10.png'
export default function RecommendedItems() {
    return (
        <div className='RecommendedItems-block-all'>
            <div className="continer">
                <div className="RecommendedItems-block-h1">
                    <h1>Recommended items</h1>
                </div>
                <div className="blok-all">
                    <div className="RecommendedItems-block">
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_1} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$10.30</h1>
                                <p>T-shirts with multiple <br />
                                    colors, for men</p>

                            </div>
                        </div>
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_2} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$10.30</h1>
                                <p>Jeans shorts for men <br /> blue color</p>
                            </div>
                        </div>
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_3} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$12.50</h1>
                                <p>Brown winter coat <br /> medium size</p>
                            </div>
                        </div>
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_4} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$34.00</h1>
                                <p>Jeans bag for travel <br />for men</p>
                            </div>
                        </div>
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_5} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$99.00</h1>
                                <p>Leather wallet</p>
                            </div>
                        </div>
                    </div>


                    <div className="RecommendedItems-block">
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_6} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$9.99</h1>
                                <p>Canon camera <br /> black, 100x zoom</p>
                            </div>
                        </div>
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_7} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$8.99</h1>
                                <p>Headset for gaming <br /> with mic</p>
                            </div>
                        </div>
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_5} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$10.30</h1>
                                <p>Smartwatch <br /> silver color modern</p>
                            </div>
                        </div>
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_8} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$10.30</h1>
                                <p>Blue wallet for men <br /> leather metarfial</p>
                            </div>
                        </div>
                        <div className="RecommendedItems-block-mini">
                            <div className="RecommendedItems-block-mini-img">
                                <img src={clothes_10} alt="" />
                            </div>
                            <div className="RecommendedItems-block-mini-text">
                                <h1>$80.95</h1>
                                <p>Jeans bag for travel <br /> for men</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
