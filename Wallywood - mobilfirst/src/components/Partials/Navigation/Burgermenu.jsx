import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { MenuData } from "./MenuData";
import style from "./Burgermenu.module.scss";
import { IoMenu, IoClose  } from "react-icons/io5";

export const Burgermenu = () => {
  const [isActive, setIsActive] = useState();

  return (
      <div className={style.mobilMenu}>
        <div className="h-20 ">

        {/* <div className={style.navbar}> */}
            <Link to='#' className="text-3xl m-10 p-3" >
              <IoMenu className="text-[#524641] hover:text-[#d97852]" onClick={() => setIsActive(!isActive) } />
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
                  <NavLink to={item.url} onClick={() => setIsActive(!isActive) }>
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
