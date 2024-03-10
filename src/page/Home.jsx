import React, { useState } from "react";
import About from "./About";
import AnEasyWayToSend from "./AnEasyWayToSend";
import RecommendedItems from "./RecommendedItems";
import OurExtraServices from "./OurExtraServices";
import SuppliersByRegion from "./SuppliersByRegion";
import clothes_1 from "../assets/clothes-1.png";
import { Link } from "react-router-dom";
import Smartphone from "./Smartphone";
import Pratucts from "./Pratucts";
import Pratuctss from "./Pratuctss";

export default function Home() {
    const [product, setProduct] = useState([
        {
            id: 1,
            img: clothes_1,
            price: "$10.30",
            title: "T-shirts with multiple colors for men",
        },
        {
            id: 2,
            img: clothes_1,
            price: "$10.30",
            title: "T-shirts with multiple colors for men",
        },
        {
            id: 3,
            img: clothes_1,
            price: "$10.30",
            title: "T-shirts with multiple colors for men",
        },
        {
            id: 4,
            img: clothes_1,
            price: "$10.30",
            title: "T-shirts with multiple colors for men",
        },
        {
            id: 5,
            img: clothes_1,
            price: "$10.30",
            title: "T-shirts with multiple colors for men",
        },
    ]);

    return (
        <div>
            <About />
            <Smartphone />
            <Pratucts />
            <Pratuctss />
            <AnEasyWayToSend />
            <div className="RecommendedItems-block-all">
                <h1>Recommended items</h1>
                {product.map((item) => (
                        <RecommendedItems item={item} key={item.id} />
                    
                ))}
            </div>
            <OurExtraServices />
            <SuppliersByRegion />
        </div>
    );
}
