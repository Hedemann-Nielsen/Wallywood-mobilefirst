import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/HomePage.jsx";
import { AboutPage } from "../../pages/AboutPage.jsx";
import { ContactPage } from "../../pages/ContactPage.jsx";
import { LoginPage } from "../../pages/LoginPage.jsx";
import { FallbackPage } from "../../pages/FallbackPage.jsx";
import { PostersMobil } from "../../pages/PosterMobilPage.jsx";
import { PosterList } from "../Posters/PosterList.jsx";
import { PosterDetails } from "../Posters/PosterDetails.jsx";
import { CartPage } from "../../pages/CartPage.jsx";

export const AppRouterMobil = () => {
    return (
        <Routes>
            <Route index element ={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/posters" element={<PostersMobil />} />
            <Route path="/posters/:genreSlug" element={<PosterList />} />
            <Route path="/posters/:genreSlug/:posterSlug" element={<PosterDetails />} />
           
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<FallbackPage />} />

        </Routes>
    )
}