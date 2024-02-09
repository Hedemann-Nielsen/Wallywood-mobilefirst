import { MenuData } from "./MenuData.jsx";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import style from "./DesktopMenu.module.scss";

export const Desktopmenu = () => {
  return (
    <div className={style.desktopMenu}>
      <ul>
        {MenuData && MenuData.map((item, index) => {
          return (
            <li key={index} className={style.navText}>
                <NavLink 
                to={item.url}
                style={({ isActive }) => ({
                  color: isActive
                  ? "#d97852"
                  : "#524641",
                })}
                >
                  <span>{item.title}</span>
                </NavLink>
              </li>
            )
          })}
          <FaShoppingBasket className={style.basket} />
      </ul>
    </div>
  )
}
