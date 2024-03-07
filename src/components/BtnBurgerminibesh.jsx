import React, { useState } from "react";
export default function BtnBurgerminibesh() {
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
            Sport va ochiq havoda
            </button>
            <div className={Avtomobil ? "yoqotish" : "korinish"}>
                <div className="blockdivvvv3">
                    <h1>Sport va ochiq havoda</h1>
                </div>
            </div>
        </div>
    );
}
