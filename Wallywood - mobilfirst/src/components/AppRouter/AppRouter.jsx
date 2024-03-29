import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/HomePage.jsx";
import { About } from "../../pages/AboutPage.jsx";
import { Contact } from "../../pages/ContactPage.jsx";
import { LoginPage } from "../../pages/LoginPage.jsx";
import { Fallback } from "../../pages/FallbackPage.jsx";
import { Posters } from "../../pages/PosterPage.jsx";
import { PosterList } from "../Posters/PosterList.jsx";
import { PosterDetails } from "../Posters/PosterDetails.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element ={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/posters" element={<Posters />}>
                <Route path=":genreSlug" element={<PosterList />} />
                <Route path=":genreSlug/:posterSlug" element={<PosterDetails />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Fallback />} />

        </Routes>
    )
}