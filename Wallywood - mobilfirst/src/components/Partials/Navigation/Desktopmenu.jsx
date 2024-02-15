import { MenuDataDesktop } from "./MenuDataDesktop.jsx";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import style from "./DesktopMenu.module.scss";

export const Desktopmenu = () => {
  return (
    <div className={style.desktopMenu}>
      <ul>
        {MenuDataDesktop && MenuDataDesktop.map((item, index) => {
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
          <Link to="/cart">
          <FaShoppingBasket className={style.basket} />

          </Link>
      </ul>
    </div>
  )
}
