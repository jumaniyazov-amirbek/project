import React from 'react'
import avatar from '../assets/Avatar.png'
export default function About() {
    return (
        <div className='about-block-all'>
            <div className="continer">
                <div className="about-block">
                    <div className="about-block-link">
                        <a href="">Automobiles</a>
                        <a href="">Clothes and wear</a>
                        <a href="">Home interiors</a>
                        <a href="">Computer and tech</a>
                        <a href="">Tools, equipments</a>
                        <a href="">Sports and outdoor</a>
                        <a href="">Animal and pets</a>
                        <a href="">Machinery tools</a>
                        <a href=""> More category</a>
                    </div>
                    <div className="img-block">
                        <p>Latest trending</p>
                        <h1>Electronic items</h1>
                        <button>Learn more</button>
                    </div>
                    <div className="about-block-button">
<div className="about-block-button-1">
    <div className="about-block-button-img-text">
        <img src={avatar} alt="" />
        <p>Hi, user <br />  let’s get stated</p>
    </div>
    <div className="about-block-button_button">
        <button className='Join'>Join now</button>
        <button className='Log'>Log in</button>
    </div>
</div>
<div className="about-block-button-2">
    <p>Get US $10 off <br />
     with a new <br />
         supplier</p>
</div>
<div className="about-block-button-3">
    <p>Send quotes with <br />
     supplier <br />
      preferences</p>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}