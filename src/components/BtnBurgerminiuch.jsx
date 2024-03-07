import React, { useState } from "react";
export default function BtnBurgerminiuch() {
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
                Asboblar, jihozlar
            </button>
            <div className={Avtomobil ? "yoqotish" : "korinish"}>
                <div className="blockdivvvv1">
                    <h1> Asboblar, jihozlar</h1>
                </div>
            </div>
        </div>
    );
}
