import React from "react";
import { useParams } from "react-router-dom";

export default function RecommendedItemsMini() {
    const params = useParams();
    console.log(params);

    return <div className="fuck">Hello Product</div>;
}
