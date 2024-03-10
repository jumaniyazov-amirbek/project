import Header from "./page/header";

import FootreMini from "./page/FootreMini";
import Footre from "./page/Footre";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import RecommendedItemsMini from "./page/RecommendedItems/RecommendedItemsMini";
function App() {
    return (
        <div className="Home">
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/product/:id"
                        element={<RecommendedItemsMini />}
                    />
                </Routes>
                <FootreMini />
                <Footre />
            </div>
        </div>
    );
}

export default App;
