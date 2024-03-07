import React, { useState } from "react";
export default function BtnBurgerminisakkiz() {
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
                Ko'proq kategoriya
            </button>
            <div className={Avtomobil ? "yoqotish" : "korinish"}>
                <div className="blockdivvvvv">
                    <h1>Ko'proq kategoriya</h1>
                </div>
            </div>
        </div>
    );
}
