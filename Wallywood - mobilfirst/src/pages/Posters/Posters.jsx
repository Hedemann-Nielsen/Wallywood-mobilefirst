import { Outlet } from "react-router-dom"
import { GenreNavigation } from "./GenreNavigation"

export const Posters = () => {
  return (
    <>
      <div>
      <GenreNavigation></GenreNavigation>
      <Outlet></Outlet>
      </div>
    </>
  )
}
