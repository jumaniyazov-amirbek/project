import React, { useState } from "react";
export default function Avtomobillar() {
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
                <p>Avtomobillar </p>
            </button>
            <div className={Avtomobil ? "yoqotish" : "korinish"}>
                <div className="blockdivv">
                    <h1>Avtomobillar</h1>
                </div>
            </div>
        </div>
    );
}
