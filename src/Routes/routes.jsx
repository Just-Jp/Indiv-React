import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/homepage/home";
import { Q1 } from "../pages/q1/q1";
import { Q2 } from "../pages/q2/q2";
import { Q3 } from "../pages/q3/q3";

export function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Q1" element={<Q1/>}/>
            <Route path="/Q2" element={<Q2/>}/>
            <Route path="/Q3" element={<Q3/>}/>
        </Routes>
    )
}