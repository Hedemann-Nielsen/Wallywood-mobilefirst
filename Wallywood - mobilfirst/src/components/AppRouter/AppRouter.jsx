import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/HomePage.jsx";
import { About } from "../../pages/AboutPage.jsx";
import { Contact } from "../../pages/ContactPage.jsx";
import { Login } from "../../pages/LoginPage.jsx";
import { Fallback } from "../../pages/FallbackPage.jsx";
import { Posters } from "../../pages/Posters/Posters.jsx";
import { PosterList } from "../../pages/Posters/PosterList.jsx";
import { PosterDetails } from "../../pages/Posters/PosterDetails.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element ={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/posters" element={<Posters />}>
                <Route index element={<PosterList />} />
                <Route path=":genre" element={<PosterList />} />
                <Route path=":genre/:poster" element={<PosterDetails />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Fallback />} />

        </Routes>
    )
}