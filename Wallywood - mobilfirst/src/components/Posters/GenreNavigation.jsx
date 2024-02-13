import { useEffect, useState } from "react"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { NavLink } from "react-router-dom"
import style from "../../style/GlobalStyle.module.scss"

export const GenreNavigation = () => {
    const [ getApi, setGetApi ] = useState([])
    const { supabase } = useSupabase()

   const getData = async () => {
    if (supabase) {
      const {data, error} = await supabase
      .from('genres')
      .select('*')
      .order('title')
    if(error) {
      console.errer('fejl i kald', error)
    } else {
      setGetApi(data)
      
    }
  }}


  useEffect(() => {
    getData()
  }, [setGetApi, supabase])

    return (
    <>
      <ul className={style.gridCars}>
        {getApi && getApi.map(item => {
            return (
                <li key={item.id}>
                  <NavLink to={item.slug}>
                  {item.title}   
                  </NavLink>
                </li>
            )
        })}
      </ul>
    </>
  )
}
