import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { MenuDataMobil } from "./MenuDataMobil.jsx";
import { FaShoppingBasket } from "react-icons/fa";

import style from "./Burgermenu.module.scss";
import { IoMenu, IoClose  } from "react-icons/io5";

export const Burgermenu = () => {
  const [isActive, setIsActive] = useState();

  return (
      <div className={style.mobilMenu}>
        <div className="w-50 flex">
          <Link  to='/cart' className="text-3xl my-10 p-3" >
            <FaShoppingBasket className="text-[#524641] hover:text-[#d97852] " />
          </Link>
          <Link to='#' onClick={() => setIsActive(!isActive)} className="text-3xl my-10 p-3" >
            <IoMenu className="text-[#524641] hover:text-[#d97852]" />
          </Link>      
        </div>
        <nav className={`${style.navMenu} ${isActive && style.active}`}>
          <ul className={style.sidebar} >
            <li>
              <Link to="#" >
              <IoClose className={style.icon} onClick={() => setIsActive(!isActive) } />
              </Link>
            </li>
            {MenuDataMobil && MenuDataMobil.map((item, index) => {
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
