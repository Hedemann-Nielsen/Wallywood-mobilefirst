import { Outlet } from "react-router-dom"
import { GenreNavigation } from "../components/Posters/GenreNavigation"
import  style  from "../style/GlobalStyle.module.scss"

export const Posters = () => {
  return (
    <>
      <div className={style.grid} >
      <GenreNavigation></GenreNavigation>
      <Outlet></Outlet>
      </div>
    </>
  )
}
