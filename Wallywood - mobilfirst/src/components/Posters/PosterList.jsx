import style from "./Posters.module.scss";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useSupabase } from "../../Providers/SupabaseProvider";

export const PosterList = () => {
  const { genreSlug } = useParams();
  const [ posterData, setPosterData ] = useState([]);
  const { supabase } = useSupabase()

  const getData = async () => {
    if(supabase) {
      const  { data, error } = await supabase
      .from('genres')
      .select('*, posters(*)')
      .eq("slug", genreSlug)
    if (error) {
    console.error(error);
  } else {
    // console.log(data[0].posters);
    setPosterData(data[0].posters);
  }
}}

useEffect(() => {
getData()
}, [genreSlug, supabase])
  // console.log(genreSlug);

  return (
    
    <div className={style.posterListWrap}>
      {posterData && posterData.map((item) => {
      return (
        <div key={item.id} className={style.posterList}>
          <img src={item.image} alt="" />
          <div>
          <h3>{item.name}</h3>
          <p>kr. {item.price.toLocaleString("da-DK", { minimumFractionDigits: 2 })}</p>
          <Link to={item.slug}>
                      <button>læs mere</button>
          </Link>
          </div>
        </div>
      )
    })}
    </div>
    
    
  )
  }
