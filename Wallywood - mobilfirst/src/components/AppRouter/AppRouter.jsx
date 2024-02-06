import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element ={<Home />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}