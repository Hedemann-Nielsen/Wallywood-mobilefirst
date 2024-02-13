import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSupabase } from "../../Providers/SupabaseProvider"

import style from "./Posters.module.scss"

export const PosterDetails = () => {
  const { posterSlug } = useParams()
  const [ poster, setPoster ] = useState()
  const { supabase } = useSupabase()
  
  const getData = async () => {
    if(supabase) {
    const { data, error } = await supabase
    .from('posters')
    .select("*")
    .eq("slug", posterSlug)
    .limit(1)
    .single()
   if(error) {
    console.error("fejl i kald", error);
  } else {
    console.log(data.name);
    setPoster(data)
  }
}}
  useEffect(() => {
    getData()
  }, [posterSlug, supabase])
  console.log(poster);
  return (
    <>
    {poster && (
      <figure className={style.PosterDetails}>
        <img src={poster.image} alt={poster.name} />
        <figcaption>
          <h3>{poster.name}</h3>
          <p dangerouslySetInnerHTML={{ __html: poster.description}}></p>
          <p>Størrelse: {poster.height} x {poster.width}</p>
          <p>Varenummer(SKU): {poster.id}</p>
          <input 
          type="number" 
          placeholder={poster.stock}
          defaultValue={poster.stock > 0 ? Math.min(poster.stock, 1) : ''}
          min="0"
          max={poster.stock} />
          
            <button>Læg i kurven</button>
          
        </figcaption>
      </figure>
      )}
    </>
  )
}
  
