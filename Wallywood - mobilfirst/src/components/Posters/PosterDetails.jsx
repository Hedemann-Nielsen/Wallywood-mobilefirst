import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { useForm } from "react-hook-form"

import style from "./Posters.module.scss"

export const PosterDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { posterSlug } = useParams()
  const [ poster, setPoster ] = useState([])
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
      
        setPoster(data)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [posterSlug, supabase])

  const add2Cart = async formData => {
    if(supabase) {
        const { data: { session: { user: { id: user_id}}}} = await supabase.auth.getSession()
        const { data, error } = await supabase
        .from('cart')
        .insert([{
          user_id: user_id,
          poster_id: formData.poster_id,
          quantity: formData.quantity
      }])
      if (error) {
        console.error(error);
        
      } else {
        console.log('Addede to cart', data);
      }
    }
  }


  return (
    <>
    {poster && poster.id && (
      <div className={style.PosterDetails}>
        <img src={poster.image} alt={poster.name} />
        <div className={style.detailsInfo}>
          <h3 className="text-xl font-bold">{poster.name}</h3>
          <p dangerouslySetInnerHTML={{ __html: poster.description}}></p>
          <p>Størrelse: {poster.height} x {poster.width}</p>
          <p>Varenummer(SKU): {poster.id}</p>

          <form onSubmit={handleSubmit(add2Cart)}>
            <input type="hidden" defaultValue={poster.id} {...register('poster_id')} />
            <input 
              type="number" 
              {...register('quantity', { required: true})}
              placeholder={poster.stock}
              defaultValue={poster.stock > 0 ? Math.min(poster.stock, 1) : ''}
              min="0"
              max={poster.stock} />
            <button>Læg i kurven</button>
          </form>
          
        </div>
      </div>
      )}
    </>
  )
}
  
