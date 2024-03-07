import React, { useState } from "react";
export default function BtnBurgerminiikki() {
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
                Uy interyerlari
            </button>
            <div className={Avtomobil ? "yoqotish" : "korinish"}>
                <div className="blockdivvvv">
                    <h1>Uy interyerlari</h1>
                </div>
            </div>
        </div>
    );
}
