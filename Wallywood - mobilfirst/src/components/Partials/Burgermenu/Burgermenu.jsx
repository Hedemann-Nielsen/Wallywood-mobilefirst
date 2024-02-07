import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { MenuData } from "./MenuData";
import style from "./Burgermenu.module.scss";
import { IoMenu, IoClose  } from "react-icons/io5";

export const Burgermenu = () => {
  const [isActive, setIsActive] = useState();


  return (
      <div className={style.mobilMenu}>
        <div className={style.navbar}>
            <Link to='#' >
              <IoMenu className={style.icon} onClick={() => setIsActive(!isActive) } />
            </Link>      
        </div>
        <nav className={`${style.navMenu} ${isActive && style.active}`}>
          <ul className={style.sidebar} >
            <li>
              <Link to="#" >
              <IoClose className={style.icon} onClick={() => setIsActive(!isActive) } />
              </Link>
            </li>
            {MenuData && MenuData.map((item, index) => {
              return (
                <li key={index} className={style.navText}>
                  <NavLink to={item.url}>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    )
}
