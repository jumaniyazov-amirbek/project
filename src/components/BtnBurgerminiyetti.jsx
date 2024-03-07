import React, { useState } from "react";
export default function BtnBurgerminiyetti() {
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
                Mashina asboblari
            </button>
            <div className={Avtomobil ? "yoqotish" : "korinish"}>
                <div className="blockdivvvvvv">
                    <h1>Mashina asboblari </h1>
                </div>
            </div>
        </div>
    );
}
