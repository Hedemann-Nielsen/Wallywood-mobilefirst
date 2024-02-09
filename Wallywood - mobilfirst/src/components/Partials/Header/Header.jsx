import { Burgermenu } from "../Navigation/Burgermenu.jsx";
import { Desktopmenu } from "../Navigation/Desktopmenu.jsx";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";


export const Header = () => {


  return (
    <header className={style.header}>
        <NavLink to="/" className={style.link}>
          <h1>Wallywood</h1>
        </NavLink>
      <div>
        <Burgermenu></Burgermenu>
        <Desktopmenu></Desktopmenu>
      </div>
   
    </header>
    
  )
}
