import React, { useState } from "react";
import hamburge from "../assets/hamburger.svg";
import BtnBurgermini from "./BtnBurgerMiniBlock/BtnBurgermini";
export default function BtnBurger() {
    const [burger, setBurger] = useState(false);
    function hamburger() {
        if (burger == true) {
            setBurger(false);
        }
        if (burger == false) {
            setBurger(true);
        }
    }
    return (
        <div className="panel">
            <button className="burgerr" onClick={hamburger}>
                {" "}
                <img src={hamburge} alt="" />
            </button>
            <div className={burger ? "none" : "korish"}>
                <div className="blockdiv">
                    <BtnBurgermini />
                </div>
            </div>
        </div>
    );
}
