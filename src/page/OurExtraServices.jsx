import React from 'react'
import Mask_0 from '../assets/Mask_0.png'
import Mask_1 from '../assets/Mask_1.png'
import Mask_2 from '../assets/Mask_2.png'
import Mask_3 from '../assets/Mask_3.png'
import cards__1 from '../assets/cards__1.png'
import cards__2 from '../assets/cards__2.png'
import cards__3 from '../assets/cards__3.png'
import cards__4 from '../assets/cards__4.png'
export default function OurExtraServices() {
    return (
        <div className='OurExtraServices-bock-all'>
            <div className="continer">
                <h1>Our extra services</h1>
                <div className="OurExtraServices-block">
                    <div className="OurExtraServices-block-1">

                        <div className="OurExtraServices-block-1-img">
                            <img src={Mask_0} alt="" />
                        </div>
                        <div className="OurExtraServices-block-1-icon">
                            <img src={cards__1} alt="" />
                        </div>
                        <div className="OurExtraServices-block-1-text">
                            <p>Source from <br />
                                Industry Hubs</p></div>
                    </div>
                    <div className="OurExtraServices-block-1">
                        <div className="OurExtraServices-block-1-img">
                            <img src={Mask_1} alt="" />
                        </div>
                        <div className="OurExtraServices-block-1-icon">
                            <img src={cards__2} alt="" />
                        </div>
                        <div className="OurExtraServices-block-1-text">
                            <p>Customize Your <br />
                                Products</p>
                        </div>
                    </div>
                    <div className="OurExtraServices-block-1">
                        <div className="OurExtraServices-block-1-img">
                            <img src={Mask_2} alt="" />
                        </div>
                        <div className="OurExtraServices-block-1-icon">
                            <img src={cards__3} alt="" />
                        </div>
                        <div className="OurExtraServices-block-1-text">
                            <p>Fast, reliable shipping <br />
                                by ocean or air</p>
                        </div>
                    </div>
                    <div className="OurExtraServices-block-1">
                        <div className="OurExtraServices-block-1-img">
                            <img src={Mask_3} alt="" />
                        </div>
                        <div className="OurExtraServices-block-1-icon">
                            <img src={cards__4} alt="" />
                        </div>
                        <div className="OurExtraServices-block-1-text">
                            <p>Product monitoring <br />
                                and inspection</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
