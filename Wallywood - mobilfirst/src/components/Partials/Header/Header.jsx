import { Burgermenu } from "../Burgermenu/Burgermenu.jsx";
import { Desktopmenu } from "../Desktopmenu/Desktopmenu.jsx";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";


export const Header = () => {


  return (
    <header className={style.header}>
        <Burgermenu></Burgermenu>
        <NavLink to="/" className={style.link}>
          <h1>Wallywood</h1>
        </NavLink>
        <Desktopmenu></Desktopmenu>
    </header>
    
  )
}
