import { supabase } from "@supabase/auth-ui-shared"
import { useEffect, useState } from "react"
import { useSupabase } from "../Providers/SupabaseProvider"

import { IoIosCloseCircle } from "react-icons/io";

export const CartPage = () => {
const [ cart, setCart ] = useState([])
const { supabase } = useSupabase()

const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase
      .from('cart')
      .select('*, posters(*)')
    if (error) {
    console.error('fejl i kald', error);;
    } else {
      setCart(data)
      console.log(data);
    }
  }
}

const removeFromCart =  async(itemID) => {
  const updateCart = cart.filter((item) => item.id !== itemID);
  setCart(updateCart);
  if (supabase) {
    const { error } = await supabase.from("cart").delete().match({ id: itemId });
    if (error) {
      console.error("fejl i fjernelse af vare fra kurv", error);
    }
  }
};

useEffect(() => {
  getData()
}, [supabase])




  return (
    <>
      <h2 className="text-3xl pl-5 ">CartPage</h2>
      {cart && cart.map(item => {
          return(
            <>
            <IoIosCloseCircle       
                  onClick={() => removeFromCart(item.id)} 
                  className="hidden text-4xl w-11/12 md:block cursor-pointer"/>

            <div key={item.id} className="md:grid grid-cols-2">
              <div className="flex justify-end pr-44 md:hidden cursor-pointer">
                <IoIosCloseCircle       
                  onClick={() => removeFromCart(item.id)} 
                  className="text-4xl" />
              </div>
              
              <img src={item.posters.image} alt={item.posters.name} className="w-full py-3 px-44 md:px-6" />
              <div className="px-32 grid grid-cols-2 text-center md:text-left my-auto" >
                <ul className="m-auto md:m-0">
                  <li className="py-1">Plakatnavn</li>
                  <li className="py-1">Pris</li>
                  <li className="py-1">Antal</li>
                  <li className="py-1">Total</li>
                </ul>
                <ul className="m-auto md:m-0" >
                  <li className="py-1 w-1/2 md:w-full">{item.posters.name}</li>
                  <li className="py-1 w-1/2 md:w-full">{item.posters.price}</li>
                  <li className="py-1 w-1/2 md:w-full">{item.quantity}</li>
                  <li className="py-1 w-1/2 md:w-full">{item.posters.price * item.quantity}</li>
                </ul>
              </div>
            </div>
                  </>


            )
          })}
    </>
  )
}
      {/* <ul className="pl-5 md:flex">
        



        <li>Antal</li>
        <li>Plakat navn</li>
        <li>Pris</li>
        <li>Total</li>
        { cart && cart.map(item => {
          return(
            <ul className="md:flex">
              <img src={item.posters.image} alt={item.posters.name} />
              <li key={item.id}>{item.quantity}</li>
              <li>{item.posters.name}</li>
            </ul>

            )
          })}
      </ul> */}

    
 

