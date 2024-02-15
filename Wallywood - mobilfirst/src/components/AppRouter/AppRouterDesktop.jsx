import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/HomePage.jsx";
import { AboutPage } from "../../pages/AboutPage.jsx";
import { ContactPage } from "../../pages/ContactPage.jsx";
import { LoginPage } from "../../pages/LoginPage.jsx";
import { FallbackPage } from "../../pages/FallbackPage.jsx";
import { PostersDesktop } from "../../pages/PosterDesktopPage.jsx";
import { PosterList } from "../Posters/PosterList.jsx";
import { PosterDetails } from "../Posters/PosterDetails.jsx";
import { CartPage } from "../../pages/CartPage.jsx";

export const AppRouterDesktop = () => {
    return (
        <Routes>
            <Route index element ={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/posters" element={<PostersDesktop />}>
                <Route path=":genreSlug" element={<PosterList />} />
                <Route path=":genreSlug/:posterSlug" element={<PosterDetails />} />
            </Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<FallbackPage />} />

        </Routes>
    )
}