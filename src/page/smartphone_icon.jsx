import React from 'react'
import box_1 from '../assets/box-1.svg'
import box_2 from '../assets/box-2.svg'
import box_3 from '../assets/box-3.png'
import box_4 from '../assets/box-4.svg'
import box_5 from '../assets/box-5.svg'
export default function smartphone_icon() {
    return (
        <div className='smartphone_icon-block-all'>
            <div className="continer">
                <div className="smartphone_icon-block">

                    <div className="smartphone_icon-calendar-block">
                        <div className="smartphone_icon-calendar-block-text">
                            <h1>Deals and offers</h1>
                            <p>Hygiene equipments</p>
                        </div>

                        <div className="smartphone_icon-btn-block">
                            <button>
                                <h1>04</h1>
                                <p>Days</p>
                            </button>
                            <button>
                                <h1>13</h1>
                                <p>Hour</p>
                            </button>
                            <button>
                                <h1>34</h1>
                                <p>Min</p>
                            </button>
                            <button>
                                <h1>56</h1>
                                <p>Sec</p>
                            </button>
                        </div>
                    </div>
                    <div className="smartphone_icon__block">
                        <button className='smartphone_icon__block-btn'>
                            <img src={box_1} alt="" />
                            <p>Smart watches</p>
                            <button className='percentage'>-25%</button>
                        </button>
                    </div>
                    <div className="smartphone_icon__block">
                        <button className='smartphone_icon__block-btn'>
                            <img src={box_2} alt="" />
                            <p>Laptops</p>
                            <button className='percentage'>-15%</button>
                        </button>
                    </div>
                    <div className="smartphone_icon__block">
                        <button className='smartphone_icon__block-btn'>
                            <img src={box_3} alt="" />
                            <p>GoPro cameras</p>
                            <button className='percentage'>-40%</button>
                        </button>
                    </div>
                    <div className="smartphone_icon__block">
                        <button className='smartphone_icon__block-btn'>
                            <img src={box_4} alt="" />
                            <p>Headphones</p>
                            <button className='percentage'>-25%</button>
                        </button>
                    </div>
                    <div className="smartphone_icon__block">
                        <button className='smartphone_icon__block-btn'>
                            <img src={box_5} alt="" />
                            <p>Canon camreras</p>
                            <button className='percentage'>-25%</button>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
