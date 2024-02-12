import { useEffect, useState } from "react"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { NavLink } from "react-router-dom"

export const GenreNavigation = () => {
    const [ getApi, setGetApi ] = useState([])
    const { supabase } = useSupabase()

    const getData = async () => {
        if(supabase) {
            const { data, error } = await supabase
                .from('genres')
                .select('*')
                .order('title')
            if(error) {
                console.error("fejl i kald", error)
            } else {
                setGetApi(data)
              }
            }
        }
        useEffect(() => {
          getData()
        }, [setGetApi, supabase])
          console.log(getApi)
    return (
        <>
    <div>GenreList</div>
    <ul>
    {getApi && getApi.map(item => {
        return (
             <li key={item.id}><NavLink to={item.slug}>
               {item.title}   </NavLink></li>
         
        )
    })}
    </ul>
        </>
  )
}
