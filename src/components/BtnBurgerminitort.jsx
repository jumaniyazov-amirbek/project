import React, { useState } from "react";
export default function BtnBurgerminitort() {
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
            Kompyuter va texnika
            </button>
            <div className={Avtomobil ? "yoqotish" : "korinish"}>
                <div className="blockdivvvv2">
                    <h1>Kompyuter va texnika</h1>
                </div>
            </div>
        </div>
    );
}
