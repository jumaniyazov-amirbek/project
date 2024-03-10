import React from "react";
import { Link } from "react-router-dom";

export default function RecommendedItems({ item }) {
    return (
        <Link to={`/product/${item.id}`}>
            <div className="RecommendedItems-block-mini">
                <div className="RecommendedItems-block-mini-img">
                    <img src={item.img} alt="" />
                </div>
                <div className="RecommendedItems-block-mini-text">
                    <h1>{item.price}</h1>
                    <p>{item.price}</p>
                </div>
            </div>
        </Link>
    );
}
