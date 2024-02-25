import React from 'react'
import Mask from '../assets/Mask group (1).png'
export default function AnEasyWayToSend() {
    return (
        <div className='AnEasyWayToSend-block-all'>
            <div className="AnEasyWayToSend-block">
                <div className="AnEasyWayToSend-block__block-all-2">      <div className="AnEasyWayToSend-text-img">
                    <img src={Mask} alt="" />
                </div>

                    <div className="AnEasyWayToSend-text">

                        <h1>An easy way to send <br />
                            requests to all suppliers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br />
                            elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="AnEasyWayToSend-input">
                        <h1>Send quote to suppliers</h1>
                        <div className="AnEasyWayToSend-input-block">
                            <input placeholder='What item you need?' className='AnEasyWayToSend-input-block__input-1' type="text" />
                            <input placeholder='Type more details' className='AnEasyWayToSend-input-block__input-2' type="text" />
                            <div className="AnEasyWayToSend-input-block-mini">
                                <input placeholder='Quantity' className='AnEasyWayToSend-input-block__input-3' type="text" />
                                <select><option >Pcs</option></select>
                            </div>
                            <button>Send inquiry</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
