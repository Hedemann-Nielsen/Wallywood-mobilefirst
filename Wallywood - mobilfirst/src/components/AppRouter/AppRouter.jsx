import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home.jsx";
import { About } from "../../pages/About/About.jsx";
import { Contact } from "../../pages/Contact/Contact.jsx";
import { Login } from "../../pages/Login/Login.jsx";
import { Fallback } from "../../pages/Fallback/Fallback.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element ={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Fallback />} />

        </Routes>
    )
}