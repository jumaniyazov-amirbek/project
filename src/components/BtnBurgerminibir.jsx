import React, { useState } from "react";
export default function BtnBurgerminibir() {
    const [Avtomobil, setAvtomobillar] = useState(false);
    function Avtomobillarr() {
        if (Avtomobil == true) {
            setAvtomobillar(false);
        }
        if (Avtomobil == false) {
            setAvtomobillar(true);
        }
    }
    return (
        <div className="panel">
            <button className="Avtomobil" onClick={Avtomobillarr}>
                Kiyim va kiyim
            </button>
            <div className={Avtomobil ? "yoqotish" : "korinish"}>
                <div className="blockdivvv">
                    <h1> Kiyim va kiyim</h1>
                </div>
            </div>
        </div>
    );
}
