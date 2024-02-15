import curtain from "../assets/images/curtain.jpg";
import { RandomPosters } from "../components/Posters/RandomPosters";
import "../style/GlobalStyle.module.scss"

export const Home = () => {
  return (
<main>
    <img className="w-full hidden md:block lg:block"  src={curtain} alt="" />
    <RandomPosters></RandomPosters>
</main>
  );
}
