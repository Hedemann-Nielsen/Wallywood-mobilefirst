import { createClient } from "@supabase/supabase-js"
import { createContext, useContext, useEffect, useState } from "react";

const supabaseContext = createContext()

export const SupabaseProvider = ({children}) => {
    const [ supabase, setSupabase] = useState(null)

    const supabaseUrl = 'https://ztbnvdzwkfrufxcosjzk.supabase.co';
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

    useEffect(() => {
        setSupabase(createClient(supabaseUrl, supabaseKey))
    }, [supabaseKey])

  return (
    <supabaseContext.Provider value={{ supabase }}>{children}</supabaseContext.Provider>
  )
}

export const useSupabase = () => useContext(supabaseContext)