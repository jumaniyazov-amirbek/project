import React, { useState } from "react";
export default function BtnBurgerminiolti() {
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
            Hayvon va
                    hayvonlar
            </button>
            <div className={Avtomobil ? "yoqotish" : "korinish"}>
                <div className="blockdivvvvvvv">
                    <h1>Hayvon va
                    hayvonlar</h1>
                </div>
            </div>
        </div>
    );
}
