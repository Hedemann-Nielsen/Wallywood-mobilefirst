import curtain from "../assets/images/curtain.jpg";
import { RandomPosters } from "./Posters/RandomPosters";

export const Home = () => {
  return (
<main>
    <img style={{width: '100%'}} src={curtain} alt="" />
    <RandomPosters></RandomPosters>
</main>
  );
}
