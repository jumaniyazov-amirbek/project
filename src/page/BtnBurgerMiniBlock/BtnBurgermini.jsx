import React from "react";
import Avtomobillar from "../../components/BtnBurgermini/Avtomobillar";
import BtnBurgerminibir from "../../components/BtnBurgerminibir";
import BtnBurgerminiikki from "../../components/BtnBurgerminiikki";
import BtnBurgerminiuch from "../../components/BtnBurgerminiuch";
import BtnBurgerminitort from "../../components/BtnBurgerminitort";
import BtnBurgerminibesh from "../../components/BtnBurgerminibesh";
import BtnBurgerminiolti from "../../components/BtnBurgerminiolti";
import BtnBurgerminiyetti from "../../components/BtnBurgerminiyetti";
import BtnBurgerminisakkiz from "../../components/BtnBurgerminisakkiz";
export default function BtnBurgermini() {
    return (
        <div className="BtnBurgermini-btn-block">
            <div>
                {" "}
                <Avtomobillar />
            </div>
            <div>
                <div className="BtnBurgermini-btn-block-mini">
                    <BtnBurgerminibir />
                </div>
            </div>
            <div className="BtnBurgermini-btn-block-mini">
                <BtnBurgerminiikki />
            </div>
            <div className="BtnBurgermini-btn-block-mini">
                <BtnBurgerminiuch />
            </div>
            <div className="BtnBurgermini-btn-block-mini">
                <BtnBurgerminitort />
            </div>
            <div className="BtnBurgermini-btn-block-mini">
                <BtnBurgerminibesh />
            </div>
            <div className="BtnBurgermini-btn-block-mini">
                <BtnBurgerminiolti />
            </div>
            <div className="BtnBurgermini-btn-block-mini">
                <BtnBurgerminiyetti />
            </div>
            <div className="BtnBurgermini-btn-block-mini">
                <BtnBurgerminisakkiz />
            </div>
        </div>
    );
}
