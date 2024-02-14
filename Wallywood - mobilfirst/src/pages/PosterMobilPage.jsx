import { GenreNavigation } from "../components/Posters/GenreNavigation"
import  style  from "../style/GlobalStyle.module.scss"

export const PostersMobil = () => {
  return (
    <>
      <div className={style.grid} >
      <GenreNavigation></GenreNavigation>
      
      </div>
    </>
  )
}
