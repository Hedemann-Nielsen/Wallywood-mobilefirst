import { Link } from "react-router-dom";
// import style from "./Fallback.module.scss";

export const Fallback = () => {
  return (

  <div className="flex flex-col justify center ">
    <h2>404...</h2>
    <p>Siden du søgte efter findes ikke</p>
    <Link to="/home" className={style.link}>Klik her for at komme til forsiden</Link>
  </div>



 );
}
